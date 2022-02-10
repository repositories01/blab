import {AddAccount, AddAccountModel} from  '../../domain/usecases/add-account'
import { AccountModel } from '@/domain/models/account';
import { Encrypter } from '../protocols/encrypter';

export class DbAddAccount implements AddAccount{
  private readonly encrypter
  constructor(encrypter: Encrypter){
   this.encrypter = encrypter
  }
  async add(account: AddAccountModel): Promise<AccountModel>{
  return new Promise(resolve => resolve({}))
  }

}
