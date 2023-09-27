
const axios = require('axios')
const dotenv = require('dotenv')
dotenv.config()

const createToken = async (req, res, next) => {
  const secret = process.env.secret
  const consumer = process.env.consumerkey
  const auth = new Buffer.from(`${consumer}:${secret}`).toString("base64");
  const response = await axios.get(
      "https://sandbox.safaricom.co.ke/oauth/v1/generate?grant_type=client_credentials",
      {
        headers: {
          authorization: `Basic ${auth}`,
        },
      }
    )
    .then((data) => {
      token = data.data.access_token;
      console.log(data.data);
      next();
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};

const stkPush = async (req, res) => {
  const shortCode = 174379;
  const phonenumber = req.body.phonenumber.substring(1);

  const passkey =process.env.passkey 
  

  var now = new Date();
var year = now.getFullYear();
var month = String(now.getMonth() + 1).padStart(2, '0');
var date = String(now.getDate()).padStart(2, '0');
var hour = String(now.getHours()).padStart(2, '0');
var minute = String(now.getMinutes()).padStart(2, '0');
var second = String(now.getSeconds()).padStart(2, '0');

var timestamp = year + month + date + hour + minute + second;

console.log(timestamp);

 
  const password = new Buffer.from(shortCode + passkey + timestamp).toString(
    "base64"
  );


  //post user






  const data = {
    BusinessShortCode: shortCode,
    Password: password,
    Timestamp: timestamp,
    TransactionType: "CustomerPayBillOnline",
    Amount: "1",
    PartyA: `254${phonenumber}`,
    PartyB: '174379',
    PhoneNumber: `254${phonenumber}`,
    CallBackURL: "https://mydomain.com/path",
    AccountReference: "NATION AFRICA", 
    TransactionDesc: "Doing Stk push",
  };

  const response = await axios.post( "https://sandbox.safaricom.co.ke/mpesa/stkpush/v1/processrequest", data,{
      headers: {
        authorization: `Bearer ${token}`,
      },
    })
    .then((data) => {
      console.log(data); 
      res.status(200).json(data.data);
    })
    .catch((err) => {
      console.log(err);
      res.status(400).json(err.message);
    });
};

module.exports = { createToken, stkPush };