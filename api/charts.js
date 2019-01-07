import express from 'express';
import pagination from '../utils/pagination.js';
const router = express.Router();

/**
 * API for getting charts
 * @param {MongoDB Collection} collection 
 */
const chartsAPI = (collection) => {

  router.get('/categories', async(req, res)=>{
    const currency = await collection.distinct('currency');
    const lp = await collection.distinct('lp');
    
    res.json({
      currency,
      lp
    });

  });

  //This will serve the data, filter, and pagination.
  router.post('/filter', async (req, res)=>{
   
    const totalDocuments = await collection.countDocuments({});
    const currentPage = Number(req.query.currentPage) ? Number(req.query.currentPage) : 1;
    const pageSize = Number(req.query.pageSize) ? Number(req.query.pageSize) : 300;
    const maxPage = Number(req.query.maxPage) ? Number(req.query.maxPage) : 10;

    const paginationObj = pagination(totalDocuments, currentPage, pageSize, maxPage);
    console.log(currentPage,  pagination.currentPage)
    if(currentPage > paginationObj.currentPage) {
      res.sendStatus(404).end();
    } else {

      const results = await collection.find({...req.body})
        .skip((paginationObj.currentPage - 1) * paginationObj.pageSize)
        .limit(paginationObj.pageSize)
        .toArray();
  
      return res.json({
        results,
        pagination: paginationObj
      });

    }


  });

  return router;
};

export default chartsAPI;