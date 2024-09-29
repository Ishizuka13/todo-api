import mongoose from "mongoose";

const TaskSchema = new mongoose.Schema(
  {
    id: {
      type: mongoose.Schema.Types.ObjectId,
    },
    checked: {
      type: Boolean,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },
  { versionKey: false }
);

const task = mongoose.model("tasks", TaskSchema);

export { task, TaskSchema };
