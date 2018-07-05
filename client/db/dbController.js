const Resource = require('./models/resourceModels');


const dbController = {
    getFiles: (req, res) => {
        // retrieves the count from db
        // use mongo find method and return to the client
        Resource.find()
        .then (result => {
            return res.json(result);
        })
        .catch(err => {
            if(err) console.error(err);
        });

      
    }
}

module.exports = dbController;