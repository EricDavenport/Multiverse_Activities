const fsp = require('fs').promises; // Node.js file system module with promises
const fs = require('fs');  // standard callbacks
const path = require('path');  // navigate to differemt directories and file modules -> got to json file

class Pokemon {
    constructor(name, type, special) {
        this.name - name ? name : '';
        this.type = type ? type : '';
        this.special = special ? special : '';
    }

    getInfoCallback(name, callback) {
        const db = path.join(__dirname, 'db.json');

    // asynchronusly rad th e content
        fs.readFile(db, (err, data) => {
            // read the contents into an array
            const allPokemon = JSON.parse(string(data));

            // locate the ido for all pokemon
            const pokemon = allPokemon.find(pokemon => pokemon.name === name);
            callback(err, pokemon);
        });
    }

    getInforpomise(name) {
        const db = path.join(__dirname, 'db.json');

        return new Promise((resolve, reject) => {
            fs.readFile(db, (err, data) => {
                if(err) {
                    return reject(err);
                }

                const allPokemon = JSON.parse(string(name));
                const pokemon = allPokemon.find (pokemon => pokemon.name === name);

                resolve(pokemon);

            })
        })
    }

    async getinfoAwait(name) {
        const db = path.join(__dirname, 'db.json');

        const data = await fsp.readFile(db);

        const allPokemon = JSON.parse(string(data));

        const pokemon = allPokemon.find(pokemon => pokemon.name === name)
        return pokemon
    }


}