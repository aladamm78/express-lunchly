/** Database for lunchly */

const { Pool } = require("pg");

const db = new Pool({
  user: 'aladamm78',       
  host: 'localhost',              
  database: 'lunchly',            
  password: 'ali011380',   
  port: 5432,                     
});

db.connect();

module.exports = db;
