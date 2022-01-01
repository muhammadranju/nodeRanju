//title, body, author, tags, thumbnail, readTime, likes, comments

const { Schema, model } = require("mongoose");

// const User = require("./User");
// const Comment = require("./Comment");

const postSchema = new Schema(
   {
      title: {
         type: String,
         trim: true,
         required: true,
         maxlength: 100,
      },
      body: {
         type: String,
         required: true,
         maxlength: 500,
      },
      author: {
         type: Schema.Types.ObjectId,
         ref: "User",
         required: true,
      },
      tags: {
         type: [String],
         required: true,
      },
      thumbnail: String,
      readTime: String,
      likes: [
         {
            type: Schema.Types.ObjectId,
            ref: "User",
         },
      ],
      dislike: [
         {
            type: Schema.Types.ObjectId,
            ref: "User",
         },
      ],
      comments: {
         type: Schema.Types.ObjectId,
         ref: "Comment",
      },
   },
   {
      timestamps: true,
   }
);

const Post = model("Post", postSchema);
module.exports = Post;
