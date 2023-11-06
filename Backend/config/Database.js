import { Sequelize } from "sequelize"

const db= new Sequelize({
    dialect: 'sqlite',
    storage: '../Backend/Database/database.db'
})

export default db