import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose.connect(process.env.MONGO_URI as string, {}).catch((error) => {
    console.log(error);
  });
};

export default connectMongo;
