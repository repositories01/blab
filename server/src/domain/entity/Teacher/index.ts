import {User} from '../User'

export interface Teacher extends User {
  createClass(params: Teacher.Create): Promise<void>;
}

export namespace Teacher {
  export interface Create {
    whatsapp: string
     bio: string
     subject: string
     cost: number
     schedule: Date
  }
}