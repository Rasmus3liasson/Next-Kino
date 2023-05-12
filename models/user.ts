import { Schema, model, models } from "mongoose";

export interface IUser {
  name: {
    first: string;
    last: string;
  };
  email: string;
  password: string;
}

const userSchema = new Schema<IUser>({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  email: { type: String, required: true },
  password: { type: String, required: true },
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
