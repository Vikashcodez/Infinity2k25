const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
    name: String,
    college: String,
    department: String,
    year: String,
    email: String,
    phone: String,
    teamSize: String,
    teamMembers: [String],
    image: String
});

// Creating 13 different collections
const Hack4good = mongoose.model('Hack4good', registrationSchema);
const Work1 = mongoose.model('Work1', registrationSchema);
const Work2 = mongoose.model('Work2', registrationSchema);
const InfyHunt = mongoose.model('InfyHunt', registrationSchema);
const TechTacToe = mongoose.model('TechTacToe', registrationSchema);
const TechnoThrone = mongoose.model('TechnoThrone', registrationSchema);
const TechTriathlon = mongoose.model('TechTriathlon', registrationSchema);
const PuzzleBit = mongoose.model('PuzzleBit', registrationSchema);
const Dsaflag = mongoose.model('Dsaflag', registrationSchema);
const Escaperoom = mongoose.model('Escaperoom', registrationSchema);
const Aipictonary = mongoose.model('Aipictonary', registrationSchema);
const Decryptorsassemble = mongoose.model('Decryptorsassemble', registrationSchema);
const Dramatec = mongoose.model('Dramatec', registrationSchema);


module.exports = {
    Hack4good,
    Work1,
    Work2,
    InfyHunt,
    TechTacToe,
    TechnoThrone,
    TechTriathlon,
    PuzzleBit,
    Dsaflag,
    Escaperoom,
    Aipictonary,
    Decryptorsassemble,
    Dramatec
};
