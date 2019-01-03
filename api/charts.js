'use strict';

import express from 'express';
let router = express.Router();

router.get('/test', (req, res, next)=>{
  res.send('Its working now\n');
});

export default router;