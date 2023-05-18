// Different Method to create Buffer
const buffer1 = Buffer.alloc(10);
const buffer2 = new Buffer('GFG');
const buffer3 = Buffer.from([115, 255], 'utf-8');

// Writing data to Buffer
buffer1.write('Happy Learning', 'utf-8');

// Reading data from Buffer
console.log('buffer1 ->', buffer1); // buffer1 -> <Buffer 48 61 70 70 79 20 4c 65 61 72>
console.log('data in buffer1 ->', buffer1.toString()); // data in buffer1 -> Happy Lear
//Here it's priting only 'Happy Lear' because of we've provided only 10 bytes sized to buffer and 'Happy Learning' taking more than 10 bytes.

console.log('data in buffer3 -> ', buffer3.toString()); // data in buffer3 ->  s�

// Check object is buffer or not
console.log('Is object -> ', Buffer.isBuffer(buffer1)); // Is object ->  true

//check buffer is array or not
console.log('Is array -> ', Array.isArray(buffer1)); // Is array ->  false

// Check length of Buffer
console.log(buffer1.length); // 10

// Copy buffer
const bufferSrc = new Buffer('ABC');
const bufferDest = Buffer.alloc(3);
bufferSrc.copy(bufferDest);

const Data = bufferDest.toString('utf-8');
console.log('cpied buffer data -> ', Data); // cpied buffer data ->  ABC

// Slicing data
const bufferOld = new Buffer('GeeksForGeeks');
const bufferNew = bufferOld.slice(0, 4);
console.log('sliced buffer data -> ', bufferNew.toString()); // sliced buffer data ->  Geek

// concatenate two buffer
const bufferOne = new Buffer('Happy Learning ');
const bufferTwo = new Buffer('With GFG');
const bufferThree = Buffer.concat([bufferOne, bufferTwo]);
console.log('concated buffer data -> ', bufferThree.toString()); // concated buffer data ->  Happy Learning With GFG
