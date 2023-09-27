const express = require('express')
const  dotenv = require('dotenv')
dotenv.config()
const cors = require('cors')



const app = express()


app.use(express.json())
app.use(cors())

const PORT = process.env.port



  

try {
   app.use(require('./backend/db/db')) 
} catch (error) {
  error
}




try {
  app.use(require('./backend/routes/NEWS/localnews'))
} catch (error) {
  error
}



try {
  app.use(require('./backend/routes/NEWS/globalnews'))
} catch (error) {
  error
}




try {
  app.use(require('./backend/routes/LIFESTYLE/healthnews'))
} catch (error) {
  error
}




try {
  app.use(require('./backend/routes/LIFESTYLE/relationshipnews'))
} catch (error) {
  error
}

try {
  app.use(require('./backend/routes/SPORTS/athleticnews'))
} catch (error) {
  error
}
try {
  app.use(require('./backend/routes/SPORTS/footballnews'))
} catch (error) {
  error   
}


try {
  app.use(require('./backend/routes/STK/stk/actstk'))
  
} catch (error) {
  error
}

 
 
app.listen(`${PORT}`,()=>{

    console.log(` app Listening at ${PORT} `)
})