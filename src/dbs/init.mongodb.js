'use strict';

const {db: {host, port, name}} = require('../configs/config.mongodb');

const mongoose = require('mongoose');
const connectString = `mongodb://${host}:${port}/${name}`;
const {countConnect} = require('../helpers/check.connect');

class Database {
  constructor() {
    this.connect();
  }

  //connect
  connect(type = 'mongodb') {
    if (1 === 1) {
      mongoose.set('debug', true);
      mongoose.set('debug', {color: true});
    }

    mongoose.connect(connectString, {
      maxPoolSize: 50
    })
      .then(_ => {
        console.log('Connected MongoDB Success', countConnect())
      })
      .catch(() => console.log('Error Connect!'));
  }

  static getInstance() {
    if (!Database.instance) {
      Database.instance = new Database();
    }
    return Database.instance;
  }
}

const instanceMongoDb = Database.getInstance();

module.exports = instanceMongoDb;