const mongoose = require('mongoose');

const Food = mongoose.model("Food",{
    story: Array,
    upvote: Number,
    like: Boolean
})

module.exports = Food;