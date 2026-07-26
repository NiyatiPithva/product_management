import mysql from 'mysql2';

export const pool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: 'niyati',
    database: 'product_management',
    port: 3306,
    multipleStatements: true
});