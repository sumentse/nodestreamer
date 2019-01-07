'use strict';

import 'babel-polyfill';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import logger from 'morgan';
import csv from 'csv-streamify';
import errorhandler from 'errorhandler';
import fs from 'fs';
import chartsAPI from './api/charts';
import mongodb from 'mongodb';
import uuidv4 from 'uuid/v4';
const MongoClient = mongodb.MongoClient;

//execute program
(async () => {
    let server, client;

    try {

        const url = process.env.MONGOURL || 'mongodb://localhost:27017';
        const dataSrc = './dataSrc/adata.csv';
        client = await MongoClient.connect(url, { useNewUrlParser: true });
        console.log('Mongo is connected');
        const dbo = client.db('FinTechTest');    
        
        let exampleDB;

        const startServer = ()=> {
            const app = express();
            app.set('port', process.env.PORT || 3000);
            app.use(cors());
            app.use(bodyParser.json({limit:'100mb'}));
            app.use(bodyParser.urlencoded({extended: true, limit:'100mb'}));
            app.use(logger('combined'));
            app.use('/charts', chartsAPI(exampleDB));
            
            app.use(errorhandler());
            
            server = app.listen(app.get('port'), () => {
                console.log(`Server is running at port ${app.get('port')}`);
            });
    
        }

        //handles CSV to JSON Conversion via streaming
        const readCSV = () => {
            console.log('Processing the file');
            const parser = csv({ columns: true });
            
            let tempArr = [];

            parser.on('data', (line) => {
                tempArr.push({
                    _id: uuidv4(),
                    currency: line.sym,
                    time_stamp: new Date(line.ts),
                    lp: line.lp,
                    bid_price: Number(line.bid_price),
                    bid_quantity: Number(line.bid_quantity),
                    asking_price: Number(line.ask_price),
                    asking_quantity: Number(line.ask_quantity)
                });
            });

            parser.on('end', async()=>{
                await exampleDB.insertMany(tempArr);
                await exampleDB.createIndex({_id:1});
                console.log('Finished processing. Now starting server.');
                startServer();

            });

            fs.createReadStream(dataSrc).pipe(parser);
    
        };

        const checkIfCollectionExist = async(collectionName) => {
            const hasCollections = await dbo.collection(collectionName).findOne({});
            
            //checks if collection exist otherwise create a new one
            if(!hasCollections) {
                console.log(`The collection '${collectionName}' does not exist. Creating a new one.`);
                await dbo.createCollection(collectionName);
                console.log(`The collection '${collectionName}' was created`);
                exampleDB = dbo.collection(collectionName);
                readCSV();
            } else {
                exampleDB = dbo.collection(collectionName);
                startServer();
            }
            
        };

        checkIfCollectionExist('example');


    } catch (err) {

        console.log(err);
        server.close();

    }

})();
