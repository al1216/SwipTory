const mongoose = require('mongoose');

const Health = mongoose.model("Health",{
    story: Array,
    upvote: Number,
    like: Boolean,
    book: Boolean
})

module.exports = Health;