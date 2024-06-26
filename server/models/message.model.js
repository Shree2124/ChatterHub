import mongoose, { Schema, model, models } from "mongoose";

const messageSchema = new Schema(
  {
    content: {
      type: String
    },
    attachment: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    sender: {
      type: Types.ObjectId,
      ref: "User",
      required: true
    },
    chat: {
      type: Types.ObjectId,
      ref: "Chat",
      required: true
    },
  },
  { timestamps: true }
);

export const Message = models.Message || model("Message", messageSchema);
