const fs = require("fs")
const jwt = require("jsonwebtoken")
const accessToken = require("./index")

const publicKey = fs.readFileSync("./public.key")

const getPayload = (accessToken) => {
    const options = {
        algorithm: "RS256"
    };
    
    return jwt.verify(accessToken, publicKey, options)
}

console.log(getPayload(accessToken))