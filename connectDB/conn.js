const mongoose = require('mongoose');

const uri = process.env.DATABASE_URL
console.log(uri)
// mongoose.connect(uri)
// .then(() => console.log("Connection Successful"))
// .catch(err => {
//   console.log("Connection error")
// })

mongoose.connect(`${uri}`, () => {
  try {
    console.log("Connection Successful")
  } catch (error) {
    console.log(error.message)
  }
})