const fs = require('fs');
fs.writeFileSync('./.env', 'https://randomuser.me/api/API=${process.env.API}\n')