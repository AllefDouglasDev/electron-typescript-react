// import { ipcMain } from 'electron'

import Handler from './Handler'
import UserController from '../controllers/UserController'

// export default function userHandler() {
//   const userController = new UserController()

//   ipcMain.on('user:findOne', async (event, args) => {
//     event.reply('user:findOne', await userController.findOne(args))
//   })
// }

class UserHandler extends Handler {
  constructor() {
    super('user')

    const userController = new UserController()

    this.on('findOne', userController.findOne)
  }
}

export default () => new UserHandler()
