import express from 'express';
import logger from '../../../utils/logger';
import query from '../../../model/DatabaseImplementation/query';

const dbControllers = {
  getInfoFromDatabase (req: express.Request, res: express.Response): void {

    try {

      const { numberOfRows, } = req.body,
        queryString = 'SELECT h.QRYID, h.INVNO, h.INVDATE, h.INVAGE FROM HSI.HSIMASTINV h FETCH FIRST ? ROWS ONLY;';

      query(queryString, [ numberOfRows, ])
      .then((rows: Record<string, any>[]): void => {

        res.status(200).json(rows);

      })
      .catch((error: Error) => {

        logger.error(error);
        res.status(400).json({ error: error.message, });


      });


    } catch (error) {

      logger.error(error.message);

    }

  },

};

export default dbControllers;