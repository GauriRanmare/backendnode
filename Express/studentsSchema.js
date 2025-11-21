

// Schema structure (object)
const studentsSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    age: {
        type: Number,
        required: true
    },
    city: {
        type: String,
        default: "Unknown"
    },
    marks: {
        type: Number,
        required: false
    }
});

// Export model
module.exports = mongoose.model('Student', studentsSchema);
