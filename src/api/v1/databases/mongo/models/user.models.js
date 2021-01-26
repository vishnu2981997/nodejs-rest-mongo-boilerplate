module.exports = function ({config, mongoose}) {
    const instance = {};

    const Schema = mongoose.Schema;

    const userSchema = new Schema({
        name: {
            type: String,
            required: true
        },
        email: {
            type: String,
            required: true
        },
        password: {
            type: String,
            required: true
        }
    }, {timestamps: true});

    instance.user = mongoose.model('User', userSchema);

    return instance;
}