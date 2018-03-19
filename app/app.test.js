let expect=require('expect');

let rewire=require('rewire');
let app=rewire('./app');

describe('App',()=>{
    let db={
        saveUser:expect.createSpy()
    }
    app.__set__('db',db);
    it('should call saveUser with user object',()=>{
        let email='achievinglegend@163.com';
        let password='123abc';

        app.handleSignup(email,password);
        expect(db.saveUser).toHaveBeenCalledWith({email,password});
    });
    

});