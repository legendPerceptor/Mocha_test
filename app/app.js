let db=require('./db');

let handleUser=(email,password)=>{
    let user={email,password};
    db.saveUser(user);
}

module.exports.handleSignup=handleUser;
