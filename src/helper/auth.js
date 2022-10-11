require('dotenv').config()
const crypto = require('crypto');
const jwt = require("jsonwebtoken");
const jwt_decode = require('jwt-decode')


const generateXsrfToken = () => crypto.randomBytes(64).toString('hex');
const refreshSecret = () => crypto.randomBytes(128).toString('base64');


const generateAccessToken = (id, email, role) => jwt.sign({ id, email, role }, process.env.JWT_TOKEN_SECRET, { expiresIn: process.env.JWT_ACCESS_TIME })

const generateRefreshToken = (id, email, role) => {
    return jwt.sign({ id, email, role }, process.env.JWT_REFRESH_SECRET, { expiresIn: process.env.JWT_REFRESH_TIME })
}

const verifyJwt = (token, secret) => jwt.verify(token, process.env.JWT_REFRESH_SECRET)
const verifyJwtAccess = (token, secret) => jwt.verify(token, process.env.JWT_TOKEN_SECRET)

const decodeJwt = (token) => jwt_decode(token)

module.exports = {
    generateAccessToken,
    generateRefreshToken,
    generateXsrfToken,
    refreshSecret,
    verifyJwtAccess,
    verifyJwt,
    decodeJwt
} 