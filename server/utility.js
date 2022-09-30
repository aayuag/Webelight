const userModel = require("./models/UserModel");
const bcrypt = require("bcryptjs");
const checkExistingUser = async (email)=> {
    let existingUser = false;
    await userModel.find({email: (email).toLowerCase()}).then(async(userData)=> {
        if(userData.length) {
            existingUser = true;
        }
    });
    return existingUser;
}

const generatePasswordHash = (password) => {
    const salt = 10;
    return new Promise((resolve, reject)=> {
         bcrypt.genSalt(salt).then((hashSalt)=> {
            bcrypt.hash(password, hashSalt).then((passwordHash)=> {
                resolve(passwordHash);
            })
        })
    });
}
module.exports = {checkExistingUser, generatePasswordHash};