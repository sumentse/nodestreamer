'use strict';

import 'babel-polyfill';
import dotenv from 'dotenv';
dotenv.config();
import express from 'express';
import logger from 'morgan';
import errorhandler from 'errorhandler';
import fs from 'fs';
import path from 'path';
import chartsAPI from './api/charts';

//execute program
(async () => {
    
    try {
        const app = express();
        app.set('port', process.env.PORT || 3000);
        app.use(logger('combined'));
        app.use('/charts', chartsAPI);
        
        app.use(errorhandler());
        
        const server = app.listen(app.get('port'), () => {
            console.log(`Server is running at port ${app.get('port')}`);
        });
    } catch (err) {

        console.log(err);
        server.close();
    }

})();
