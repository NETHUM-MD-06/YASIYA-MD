const fs = require('fs');
if (fs.existsSync('config.env')) require('dotenv').config({
    path: './config.env'
});

function convertToBool(text, fault = 'true') {
    return text === fault ? true : false;
}

module.exports = {
    SESSION_ID: process.env.SESSION_ID || 'YASIYA-MD~VIpgDJJQ#1dLqZRqkAKXzLtgnUrf6t3PDeoL1VvO1g7K-mhKpm4A'
};
