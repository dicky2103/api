const {MongoClient} = require ('mongodb');

const url ='mongodb://localhost'
const client = MongoClient (url, {
});

(async()=>{
    try{
        await client.connect();
        console.log('koneksi ke mongodb berhasil');
    }catch(e){
        console.log(e){
            console.log(e)
        }
    }
})();

const db = client.db('');

module.exports = db;