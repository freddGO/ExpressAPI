import express from 'express'
import dbControllers from '../../controllers/database/database';
const routerDatabase = express.Router();

routerDatabase.post('/getInfoFromDatabase', dbControllers.getInfoFromDatabase);

export default routerDatabase