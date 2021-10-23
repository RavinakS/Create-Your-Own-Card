const user = require('./middlewares/token');

const user_info = user.verify(req, res);

console.log(user_info);