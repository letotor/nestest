
const {hash,verify} = require('./hash')    
const { generateJwt, verifyJwt, decodeJwt, generateXsrfToken,
 refreshSecret } = require('./auth');
const { extractTimeMs } = require('./tools');
const { json } = require('stream/consumers');
console.log('bienvenu sur le HELPER');

const start = Date.now();
console.log(start);
let myDate = '2021-05-22T15:00:00.000Z'
myDateTrasn =myDate.split("-").join("/").split("T")[0]
console.log(myDateTrasn);
console.log('crypto hex',generateXsrfToken());
console.log('cryto 64',refreshSecret());


EMAIL_USER_FROM = "v.degermain@gmail.com"
EMAIL_SERVICEID = "service_qxlq0ho"
EMAIL_TEMPLATEID = "template_g8un8b4"
EMAIL_TEMPLATEPARAMS =""
    EMAIL_PUBLICKEY =""
templateParams = {
    EMAIL_USER_FROM,
    EMAIL_SERVICEID,
    EMAIL_TEMPLATEID,
    EMAIL_TEMPLATEPARAMS,
    EMAIL_PUBLICKEY
}

await emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', templateParams)

const openclose = { Mon: "8H00-12H30 14H00 17H00", Tue: "8H00-12H30 14H00 17H00", Wed: "8H00-12H30 14H00 17H00", Thu: "8H00-12H30 14H00 17H00", Fri: "8H00-12H30 14H00 17H00", Sat: "8H00-12H30 14H00 17H00", Sun: "8H00-12H30 14H00 17H00" }
console.log(JSON.stringify(openclose) ) 

extractTimeMs(process.env.JWT_REFRESH_TIME)
// hash mot de passe
console.log("-------HASH PASSWORD-------");
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout,
});
readline.question(`What's your password to hash? `, password => {
    hashPassword(password);
    readline.close();
});

const hashPassword = async (password)=>{
   let hashPassword = await hash(password);
    console.log(`${hashPassword}`);
} 

// decode Payload
console.log("-------DECODE PAYLOAD -------");


readline.question(`What's your token to decode? `, token => {
    const payload =  decodeJwt(token);
    console.log(payload);
    readline.close();
});



    




    

    