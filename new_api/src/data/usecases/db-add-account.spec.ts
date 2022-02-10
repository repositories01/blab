import {DbAddAccount} from './db-add-account'
describe('DbAccount UseCase', () => {

 it('should call encrypter with correct pass', () => {

    class EncrypterStub {
      async encrypt(value:string):Promise<string>{
        return new Promise(resolve => resolve('hashed_value'))
      }
    }
 const encrypterStub= new EncrypterStub();
 const sut = new DbAddAccount( encrypterStub);
    const encrypterSpy = jest.spyOn(encrypterStub, 'encrypt')
    const accountData = {
      name:'valid_name',
      email:"valid_email",
      password:"valid_password"
    }
    sut.add(accountData)
    expect(encrypterSpy).toHaveBeenCalledWith('valid_password')
  })
})
