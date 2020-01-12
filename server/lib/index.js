"use strict";

var _mosca = require("./mosca");

var _pouchdb = _interopRequireDefault(require("./pouchdb"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

require('./dotenv').config();

const db = new _pouchdb.default(process.env.POUCHDB_URL);
const server = new _mosca.Server({});
server.on('published', packet => {
  packet.payload = packet.payload.toString();

  if (packet.topic === 'temperature') {
    db.post({
      topic: packet.topic,
      payload: JSON.parse(packet.payload)
    });
  }

  if (packet.topic === 'luminosity') {
    db.post({
      topic: packet.topic,
      payload: JSON.parse(packet.payload)
    });
  }
});
//# sourceMappingURL=index.js.map