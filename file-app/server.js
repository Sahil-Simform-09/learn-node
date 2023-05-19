const fs = require('fs/promises');
(async () => {
    
    const createFile = async (path) => {
        try {
            const existingFileHandle = await fs.open(path, 'r');
            existingFileHandle.close();

            return console.log(`this file ${path} already exist`);
        } catch (error) {
            const newFileHandle = await fs.open(path, 'w');
            newFileHandle.close();
            console.log(`new file ${path} successfully created`);
        }
    };
    const deletFile = async (path) => {
        try {
            await fs.unlink(path);
            console.log(`File ${path} deleted successfully.`);
        } catch (error) {
            console.error('Error deleting the file:', error);
        }
    };
    const renameFile = async (oldPath, newPath) => {
        try {
            await fs.rename(oldPath, newPath);
            console.log(`File name changes successfully`);
        } catch (error) {
            console.error('Error rename the file:', error);
        }
    };
    const addToFile = async (path, data) => {
        try {
            const existingFileHandle = await fs.open(path, 'r');
            existingFileHandle.close();

            fs.appendFile(path, data);
            console.log(`content added to file successfully`);
        } catch (error) {
            console.error('Error add into file:', error);
        }
    };

    // commands
    const CREATE_FILE = 'create a file',
        RENAME_FILE = 'rename a file',
        ADD_TO_FILE = 'add to this file'
        DELETE_FILE = 'delete a file';

    // open file
    const commandFilehandler = await fs.open('./command.txt', 'r');
    
    commandFilehandler.on('change', async () => {
        // get the size of our file
        const size = (await commandFilehandler.stat()).size;
        // allocate our buffer with the size of the file
        const buff = Buffer.alloc(size);
        // the location at which we want to start filling our buffer
        const offset = 0;
        // how many bytes we want to read
        const position = buff.byteLength;

        // we always want to read the whole content (from beginning all the way to the end)
        await commandFilehandler.read(buff, offset, position);

        const command = buff.toString("utf-8");

        // create a file:
        // create a file <path>
        if(command.includes(CREATE_FILE)) {
            const path = command.substring(CREATE_FILE.length + 1);
            createFile(path);
        }

        // delete a file:
        // delete a file <path>
        if(command.includes(DELETE_FILE)) {
            const path = command.substring(DELETE_FILE.length + 1);
            deletFile(path);
        }
        
        // rename a file:
        // rename a file <path> to <path>
        if(command.includes(RENAME_FILE)) {
            const index = command.indexOf(' to ');
            const oldPath = command.substring(RENAME_FILE.length + 1, index);
            const newPath = command.substring(index + 4);
            renameFile(oldPath, newPath);
        }

        // addTo a file:
        // addTo this file <path> this content: <content>
        if(command.includes(ADD_TO_FILE)) {
            const index = command.indexOf(' this content: ');
            const path = command.substring(ADD_TO_FILE.length + 1, index);
            const data = command.substring(index + 15);
            addToFile(path, data);
        }
    });

    // watcher...
    const watcher = fs.watch("./command.txt");
    for await (const event of watcher) {
        if (event.eventType === "change") {           
            commandFilehandler.emit('change');
        }
    }
})();