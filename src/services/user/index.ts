import { send } from '../request'

interface User {
  id: number
  name: string
}

export default {
  findOne(id: number) {
    return send<User>('user:findOne', id)
  },
}
