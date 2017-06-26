import { Schema } from "mongoose";

export var heroSchema: Schema = new Schema({
  createdAt: { type: Date, default: Date.now },
  name: String
});