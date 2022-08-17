const { Schema, model, VirtualType } = require('mongoose');

const reactionSchema = new Schema({
    reactionId: [{
        tyoe: Schema.Types.ObjectId,
        default: new ObjectId(),
    }],
    reactionBody: {
        type: String,
        required: true,
        maxlength: 280
    },
    username: {
        type: String,
        required: true
    },
    createdAt: {
        type: Date,
        default: Date.now,

    },
},
    {
        toJSON: {
            getter: true
        }
    }
);
