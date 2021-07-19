const express = require('express')
const app = express()
const port = 3000
const {getFile, getFiles} = require("./file-handler")
const cors = require('cors')

app.use(express.json(), cors())

app.get('/files', async (req, res) => {
    try{
        fileNames = await getFiles();
        res.json(fileNames);
    }
    catch(e){
        console.error(e);
        res.status(500).send({
            message: "Error: Files don't exist!"
        });
    }
})

app.get('/files/:name', async (req, res) => {
    try{
        const file = await getFile(req.params.name);
        res.json(file);
    }
    catch(e){
        console.error(e);
        res.status(500).send({
            message: "Error: File doesn't exist!"
        });
    }
    
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})