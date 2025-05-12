const app = require("./src/app");

const {app: appConfigs} = require('./src/configs/config.mongodb');

const server = app.listen(appConfigs.port, () => {
  console.log("Server started!", appConfigs.port);
});

// process.on('SIGINT', () => {
//   server.close(() => console.log("Server closed!"));
// });