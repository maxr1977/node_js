const { DataTypes } = require('sequelize');

const sequelize = require('../config/db');

const App = sequelize.define('App', {
  id: {
    type: DataTypes.INTEGER,       
    primaryKey: true,              
    autoIncrement: true,           
    allowNull: false               
  },
  name: {
    type: DataTypes.STRING,        
    allowNull: false              
  },
  size: {
    type: DataTypes.INTEGER,       
    allowNull: false               
  }
}, {
  

  tableName: 'Apps',               
  timestamps: false               
});


module.exports = App;    