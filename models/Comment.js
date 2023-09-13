const { Schema, model } = require('mongoose');

const CommentSchema = Schema({
    title: {
        type: String,
    },
    desc: {
        type: String,
    },
    img: {
        type: String
    },
    name: {
        type: String
    },
    email: {
        type: String
    },
    phone: {
        type: String
    }
});

CommentSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
});

CommentSchema.pre('save', function( next ) {
    this.created = new Date();
    next();
});

module.exports = model('Comment',CommentSchema );