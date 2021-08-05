import path from 'path'

interface User {
  id: number
  name: string
}

export default class UserController {
  findOne(id: number): Promise<User> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve({
          id,
          name: path.join(process.cwd(), '..'),
        })
      }, 2000)
    })
  }
}
