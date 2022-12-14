const { Schema, model} = require('mongoose');
const reactionSchema = require('./Reaction')

const thoughtSchema = new Schema({
    thoughtText: {
        type: String,
        required: true,
        minlength: 1,
        maxlength: 280
    },
    createdAt: {
        type: Date,
        default: Date.now,

    },
    username: { // this is the user that created the thought. 
        type: String,
        required: true
    },
    reactions: [reactionSchema],

},
    {
        toJSON: {
            virtuals: true,
        }
    }
);

thoughtSchema.virtual('reactionCount').get(function (){
    return this.reactions.length;
})

const Thought = model('Thought', thoughtSchema);

module.exports = Thought;