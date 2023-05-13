import mongoose from "mongoose";

const MONGO_URI =
  "mongodb://northUser:bGJucFTFliN8qX2Z@ac-gkbjsml-shard-00-00.oxafelt.mongodb.net:27017,ac-gkbjsml-shard-00-01.oxafelt.mongodb.net:27017,ac-gkbjsml-shard-00-02.oxafelt.mongodb.net:27017/?ssl=true&replicaSet=atlas-yrtq9t-shard-0&authSource=admin&retryWrites=true&w=majority";

const connectMongo = async () => {
  mongoose.connect(MONGO_URI).catch((error) => {
    console.log(error);
  });
};

export default connectMongo;
