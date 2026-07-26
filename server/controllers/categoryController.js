import { pool } from "../config/db.js";


const getCategory = (req,res) => {
    let query = "select * from categories";
    pool.query(query,(error,rows) => {
        if (error) {
            res.status(500).send(error);
        }
        return res.status(200).json(rows);
    })

}

export {getCategory};