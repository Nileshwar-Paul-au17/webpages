const mongoose =require('mongoose');

const connectDb = async() => {
    try{
        const connect = await mongoose.connect(process.env.MONGO_URI)
        console.log(`MongoDB connected to ${connect.connection.host}`);
    }catch(err){
        console.error(err.message);
        process.exit(1);

    }
}

module.exports = connectDb;