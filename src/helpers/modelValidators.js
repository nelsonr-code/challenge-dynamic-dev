import { CustomError } from './errorsHandler.js'

const checkLimit = async (model, validator) => {
  const albums = await model.count({
    where: {
      isDeleted: validator
    }
  })
  if (albums >= 4) {
    throw new CustomError('You have reached the limit of albums', 400)
  }
}

export { checkLimit }
