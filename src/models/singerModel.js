import mongoose from "mongoose";

const singerSchema = new mongoose.Schema({
  name: {
    type: String,
    lowercase: true,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
  place: {
    type: String,
    required: true,
  },
  episodeCount: {
    type: String,
    required: true,
  },
  startedEpisode: {
    type: String,
    required: true,
  },
});

const Singer = mongoose.model("Singer", singerSchema);

export default Singer;
