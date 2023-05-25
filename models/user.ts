import { Schema, model, models } from "mongoose";

export interface IUser {
  name: {
    first: string;
    last: string;
  };
  userName: string;
  email: string;
  passwordHash: string;
  discountPoints: number;
}

const userSchema = new Schema<IUser>({
  name: {
    first: { type: String, required: true },
    last: { type: String, required: true },
  },
  userName: { type: String, required: true, unique: true },
  email: { type: String, required: true, unique: true },
  passwordHash: { type: String, required: true },
  discountPoints: { type: Number, required: true },
});

const User = models.User || model<IUser>("User", userSchema);

export default User;
