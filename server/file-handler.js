const jsonFolder = './data';
const fs = require('fs');

const getFiles = () => {
    return new Promise((resolve, reject) => {
        fs.readdir(jsonFolder, (error, files) => {
            if (error) { 
                reject(error); 
                return; 
            }
            resolve(files);
        });
    })


};

const getFile = (fileName) => {
    return new Promise((resolve, reject) => {
        fs.readFile(jsonFolder + "/" + fileName, (error, data) => {
            if (error) { 
                reject(error); 
                return; 
            }
            resolve(JSON.parse(data).tables);
        });
    })
};

module.exports = { getFiles, getFile }