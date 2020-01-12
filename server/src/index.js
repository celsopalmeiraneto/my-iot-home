require('./dotenv').config();

import { Server } from './mosca';
import PouchDB from './pouchdb';

const db = new PouchDB(process.env.POUCHDB_URL);
const server = new Server({});


server.on('published', (packet) => {
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


