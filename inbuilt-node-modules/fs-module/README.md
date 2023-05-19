# fs module
- each sequence of bits in hard drive in your computer is a file.
## methods
1. ``fsPromises.open()`` method not move whole content of file from memory, what actucally happens is that it's just saving number regarding that file which is called file descriptor. File descriptor is just number that has been assign to that file therefore each open file hase unique descriptor like id. it returns **FileHandle** class.
2. **FileHandle** object is an object wrapper for a numeric file descriptor. Instances of the **FileHandle**  object are created by the ``fsPromises.open()`` method.
3. ``filehandle.read()`` method reads data from the file and stores that in the given buffer.
4. ``filehandle.stat()`` method is used to retrieve information about a file. It provides details such as the file's size, timestamps (last modified, last accessed), and file type (whether it's a regular file, directory, symbolic link, etc.).
5. ``fsPromises.rename()`` method is called with the oldPath parameter set to 'oldFile.txt' (the current name or path of the file) and the newPath parameter set to 'newFile.txt' (the new name or path for the file).
6. ``fsPromises.unlink()`` method used to delete the file. this method returns a promise, so we use await to wait for the promise to be resolved or rejected.
7. ``fsPromises.appendFile()`` is used to append the string 'New data to append' to the file. this method returns a promise, so we use await to wait for the promise to be resolved or rejected.

## Reference
### video
- [Understanding File System | Understanding Node.js Core Concepts](https://www.youtube.com/watch?v=hNzRoZti6vI&list=PLCiGw8i6Nhvo08rQd9J7e19ToKMCJVKaM&index=6)
### Documentation
- [Official Docs](https://nodejs.org/dist/latest-v18.x/docs/api/fs.html)