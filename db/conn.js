const mongoose = require('mongoose');

async function main(){

    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@mydb.u0611u0.mongodb.net/?retryWrites=true&w=majority&appName=MyDB`);
        
    console.log('Conectado ao MongoDB')
    }catch(err){
        console.log(err)
    }
    
};
module.exports = main