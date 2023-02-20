import { DataTypes } from 'sequelize'
import { sequelize } from './index.js'

export const Album = sequelize.define('Album', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  artist: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'Unknown'
  },
  yearRelease: {
    type: DataTypes.DATE,
    allowNull: false
  },
  urlImage: {
    type: DataTypes.STRING,
    allowNull: true
  }
})
