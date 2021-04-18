const mongoose = require('mongoose');

const dbConnection = async() => {
    try{
        mongoose.set('useCreateIndex', true)
        await mongoose.connect(process.env.DB_CNN, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });

        

    } catch (error) {
        console.log(error);
        throw new Error('Error a la hora de inicializar Base de Datos');
    }
}

module.exports = {
    dbConnection
}