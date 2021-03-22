const mongoose = require('mongoose');

// {
// "id":7,
// "name": "Punjab Kings",
// "short":"KIXP",
// "image":"https://sportstar.thehindu.com/cricket/article33860703.ece/ALTERNATES/LANDSCAPE_1200/17-Kingsjpg",
// "founded":2008,
// "founder":"Preity Zinta",
// "topBatsman": "Virat Kohli",
// "topBowlor": "Jasprit Bumrah"
// }

const Team = mongoose.model('TeamNames', {
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        trim: true,
        required: true
    },
    short: {
        type: String,
        trim: true,
        required: true
    },
    image: {
        type: String,
        trim: true,
        required: true
    },
    founded: {
        type: Number,
        required: true
    },
    founder: {
        type: String,
        trim: true,
        required: true
    },
    topBatsman: {
        type: String,
        trim: true,
        required: true
    },
    topBowler: {
        type: String,
        trim: true,
        required: true
    }

})

module.exports = Team