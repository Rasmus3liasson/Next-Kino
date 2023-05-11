import mongoose from 'mongoose';

if (typeof process.env.MONGO_URI === 'string') {
    const connectMongo = async () => mongoose.connect(process.env.MONGO_URI as string);
}


