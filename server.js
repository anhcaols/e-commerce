const app = require("./src/app");

const {port} = require('./src/configs/config.mongodb');


const server = app.listen(port, () => {
  console.log("Server started!");
});

// process.on('SIGINT', () => {
//   server.close(() => console.log("Server closed!"));
// });