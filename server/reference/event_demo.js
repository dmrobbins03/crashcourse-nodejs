const EventEmitter = require('events');
const Logger = require('./logger');

class CustomEmitter extends EventEmitter {}

const emitter = new CustomEmitter();

emitter.on('toot', () => { 
    console.log('toot!');
});

emitter.emit('toot');
emitter.emit('toot');
emitter.emit('toot');
emitter.emit('toot');

const logger = new Logger();
logger.on('log', (e) => {
    console.log(e);
});
logger.log('hello log');