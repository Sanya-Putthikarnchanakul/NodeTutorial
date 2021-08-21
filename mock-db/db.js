const { genId } = require('./utils');

let users = [];

exports.signupUser = ({ fullname, username, password }) => {
    try {
        const user = {
            _id: genId(),
            fullname,
            username,
            password
        };

        users.push(user);
    } catch (err) {
        throw err;
    }
}

exports.loginUser = ({ username, password }) => {
    try {
        return users.find(u => u.username === username && u.password === password);
    } catch (err) {
        throw err;
    }
}