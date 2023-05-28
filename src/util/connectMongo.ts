import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose.connect(process.env.MONGO_URI as string, {
    maxPoolSize: 1000
  }).catch((error) => {
    console.log(error);
  });
};

export default connectMongo;
