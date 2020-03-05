import databasebControllers from '../../controllers/database/database';

import express from 'express';
const RouterDatabase = express.Router();

RouterDatabase.post('/getInfoFromDatabase', databasebControllers.getInfoFromDatabase);


export default RouterDatabase;