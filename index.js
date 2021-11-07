const fs = require("fs")
const jwt = require("jsonwebtoken")

const privateKey = fs.readFileSync("./private.key")

const generateAccessToken = () => {
    const options = {
        algorithm: "RS256"
    };
    
    const accessToken = jwt.sign(
        { email: "teste@gmail.com", expiresIn: "1h" },
        privateKey,
        options
    );

    return accessToken
}

module.exports = generateAccessToken()
