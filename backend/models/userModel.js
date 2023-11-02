const mongoose = require('mongoose');
const userSchema = mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'please add a name'],
    },
    email: {
      type: String,
      required: [true, 'please add a valid email'],
      unique: true,
    },
    password: {
      type: String,
      required: [true, 'please enter valid password'],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model('User', userSchema);

/*In context of mongoose, a Schema represents the 'blueprint' for the structure
of our data, we define Fields, Data Types, Validation rules, default rules
see that example */

// const blogPostSchema = new mongoose.Schema({
//   title: {
//     type: String,
//     required: true,
//   },
//   content: {
//     type: String,
//     required: true,
//   },
//   author: {
//     type: String,
//     required: true,
//   },
//   date: {
//     type: Date,
//     default: Date.now,
//   },
//   tags: [String],
// });

// const BlogPost = mongoose.model('BlogPost', blogPostSchema);

// module.exports = BlogPost;
