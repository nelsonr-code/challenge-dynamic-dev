import { DataTypes } from 'sequelize'
import { sequelize } from './index.js'
import { CustomError } from '../../helpers/errorsHandler.js'

const LIMIT_ALBUMS = 4
const DATE_GREATER_THAN_2021 = new Date('2022-01-01')
const DATE_LESS_THAN_2010 = new Date('2009-12-31')

export const Albums = sequelize.define('Album', {
  id: {
    type: DataTypes.UUID,
    primaryKey: true,
    defaultValue: DataTypes.UUIDV4,
    validate: {
      async checkAlbumsLimit() {
        const albums = await Albums.count({
          where: {
            isDeleted: false
          }
        })
        if (albums >= LIMIT_ALBUMS) {
          throw new CustomError('You have reached the limit of albums', 400)
        }
      }
    }
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
    allowNull: false,
    validate: {
      dateBetweenValidator(yearRelease) {
        if (
          new Date(yearRelease) <= DATE_LESS_THAN_2010 ||
          new Date(yearRelease) >= DATE_GREATER_THAN_2021
        ) {
          throw new CustomError(
            'The year of release must be between 2010 and 2021',
            400
          )
        }
      }
    }
  },
  urlImage: {
    type: DataTypes.STRING,
    allowNull: true
  },
  isDeleted: {
    type: DataTypes.BOOLEAN,
    defaultValue: false
  }
})
