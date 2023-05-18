# Buffer
- **Buffer** is container in memory and it has fixed length, which gets some data from one place and send it to another place.
-  The **Buffer** class in Node.js is used to perform operations on raw binary data. Generally, Buffer refers to the particular memory location in memory. Buffer and array have some similarities, but the difference is array can be any type, and it can be resizable. **Buffers** only deal with binary data, and it can not be resizable. Each integer in a buffer represents a byte. console.log() function is used to print the Buffer instance.
## Why need of Buffers?
- While JavaScript's Unicode system is well-suited for working with textual data and supports a wide range of character encodings, Buffers in Node.js fill the gap for efficient and direct manipulation of binary data. They offer performance optimizations, interoperability with external systems, and facilitate low-level operations that are necessary in many scenarios.
## Different Method to create Buffer
1. ``Buffer.alloc()`` method is recommended for creating Buffer objects. It allocates a new Buffer object with the specified size and initializes its content to zero. This helps prevent the risk of exposing uninitialized memory.
2. ``Buffer.from()`` method creates a Buffer object from the given input, which can be an array, string, or another Buffer object. It allows you to specify the encoding of the input, such as 'utf8' or 'hex', to correctly interpret the data.
3. ``new Buffer()``: This syntax is considered legacy and deprecated in recent versions of Node.js. It allows you to create a Buffer object with the specified size or by passing an array or string as the content. However, it has some potential security and performance risks, as it may allocate uninitialized memory that could contain sensitive data.      
> **When you try to create buffer using this method and run your code, you will message like below**
(node:86817) [DEP0005] DeprecationWarning: Buffer() is deprecated due to security and usability issues. Please use the Buffer.alloc(), Buffer.allocUnsafe(), or Buffer.from() methods instead.
(Use `node --trace-deprecation ...` to show where the warning was created)
## Manipulating Buffer Data
1. ``Buffer.write(data)`` method writes the data on the buffer.
2. ``Buffer.toString()`` method read data from the buffer and returned it as a string.
3.	``Buffer.copy(buffer,subsection size)`` method copies data from one buffer to another.
4. ``Buffer.slice(start, end=buffer.length)`` method returns the subsection of data stored in a buffer.
5. ``Buffer.concat([buffer,buffer])`` method concatenates two buffers.
## Reference
### Video
- [Understanding Buffers | Understanding Node.js Core Concepts](https://www.youtube.com/watch?v=QZIeZM-yXXU&list=PLCiGw8i6Nhvo08rQd9J7e19ToKMCJVKaM&index=6)
### Article
- [What is buffer in Node.js ?](https://www.geeksforgeeks.org/what-is-buffer-in-node-js/)