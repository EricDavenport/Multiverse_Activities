const sqlite3 = require('sqlite3').verbose();  // require the dependencies from sqlite3

const db = new sqlite3.Database('./restaurants.sqlite');  // creating a new db instance called restaurants

try {
    db.serialize(function() {
        // create a new table
        db.run('CREATE TABLE IF NOT EXIST RESTAURANT (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT, imagelink TEXT)');
    
        let stmt;

        // insert data
        try {
            stmt = db.prepare('INSERT INTO RESTAURANT (name, imagelink) VALUES (?, ?)');

            stmt.run('Raising Canes', 'https://www.google.com/search?q=raising+cane%27s&rlz=1C5CHFA_enUS868US869&sxsrf=AOaemvJ4al49xACC2yJFNkpCC2ewuFHN8w:1637181112807&tbm=isch&source=iu&ictx=1&fir=71UZjKC1qwL8bM%252CYQTTxaBfmniJ5M%252C%252Fm%252F0422xx&vet=1&usg=AI4_-kS0rB8kCVLlH8A1QoEfH42dw833fQ&sa=X&ved=2ahUKEwjK-Z71nqD0AhUTqXIEHX_8DCMQ_B16BAhPEAI#imgrc=71UZjKC1qwL8bM');
        } 
        // finally is a release of data - at the end this is what to be done with the data
        finally { 
            stmt.finalize();
        }

        // select some rows and console log
        db.each('SELECT * FROM RESTAURANT',
            function(err, rows) {
                console.log(rows);
            });
    })

} finally {
    // release all resources - close connects
    db.close();
}