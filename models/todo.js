'use strict';

module.exports = (sequelize, DataTypes) => {
  const todo = sequelize.define('todo', {
    external_id: {
      type: DataTypes.STRING(32),
      allowNull: true
    },
    name: {
      type: DataTypes.STRING(120),
      allowNull: true
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull:false,
      defaultValue: false
    }
  });

  return todo;
};