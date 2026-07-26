import { pool } from "../config/db.js";


const addProduct = (req,res) => {
    const { name, price, qty, category } = req.body;
    const data = `insert into products (product_name,parice,quantity,category_id) values (?,?,?,?)`;
    
    pool.query(data,[name,price,qty,category],(error, result) => {
        if (error) {
            return res.status(500).json({
                success: false,
                message: error.message
            });
        }
        return res.status(201).json({
            success: true,
            message: "successfully created"
        });
    })
}

export { addProduct };