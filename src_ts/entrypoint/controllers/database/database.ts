import express from 'express'
import query from '../../../model/databaseImplementation/query'


const dbControllers = {
    async getInfoFromDatabase (req : express.Request, res : express.Response) {
        try {
            const numberOfRows = req.body.numberOfRows;
            const queryString = 'SELECT h.QRYID, h.INVNO, h.INVDATE, h.INVAGE FROM HSI.HSIMASTINV h FETCH FIRST ? ROWS ONLY;';
            query(queryString, [ numberOfRows ])
                .then((rows: Record<string, any>[]): void => {

                    res.status(200).json(rows)

                })
                .catch((error: Error) => res.status(400).json({'error':error.message}));



        } catch (e) {
        console.log(e.message);
        }
    }

}

export default dbControllers

