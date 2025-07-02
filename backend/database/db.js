const {sequelize,DataTypes}=require("sequelize")
require("dotenv").config()
const sequelize=new Sequelize({
    database:process.env.database,
    username:process.env.username,
    host:process.env.host,
    dialect:"mysql",
    port:process.env.port
})
sequelize.authenticate()
.then(()=>{
    console.log("connected successfully")
})
.catch((err)=>{
    console.log("error aayo")
})
module.exports=sequelize