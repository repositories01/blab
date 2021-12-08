import { UserModel } from "../models/User";

export interface IUser {
  name:string
  email:string
  password:string


  create(params: any): UserModel
}