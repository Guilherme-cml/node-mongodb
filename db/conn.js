const mongoose = require('mongoose');

async function main(){

    try{
        await mongoose.connect(`mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASS}@cluster0.s12gfmy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`);

    console.log('Conectado ao MongoDB')
    }catch(err){
        console.log(err)
    }
    
};
module.exports = main