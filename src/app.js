require('./db/mongoose');

const Data = require('./Utils/initialData')
const Player = require('./models/player')
const Team = require('./models/team')

const express = require('express')
const cors = require('cors');

const app = express();
const port = process.env.port || 9000

app.use(express.json())
app.use(cors())

app.get('/getTeamDetails', (req, res)=>{
    Team.find({})
    .then(data=>{
        return res.send(data)
    })
})

app.get('/getTeamById', (req, res)=>{
    console.log(req.query)
    if(!req.query.id){
        return res.send({
            error: "Please Give An ID"
        })
    }
    Team.findById(req.query.id)
    .then(data=>{
        return res.send(data)
    })
    .catch(err=>{
        return res.send({
            error: err
        })
    })
})

app.get('/getPlayersForTeam', (req, res)=>{
    console.log(req.query)
    if(!req.query.id){
        return res.send({
            error: "Please Give An ID"
        })
    }
    Player.find({teamId : req.query.id})
    .then(data=>{
        return res.send(data)
    })
    .catch(err=>{
        return res.send({
            error: err
        })
    })
})

app.get('/getPlayerById', (req, res)=>{
    console.log(req.query)
    if(!req.query.id){
        return res.send({
            error: "Please Provide An ID"
        })
    }
    Player.find({_id : req.query.id})
    .then(data=>{
        return res.send(data)
    })
    .catch(err=>{
        return res.send({
            error: err
        })
    })
})


app.post('/addPlayerDetails', (req, res)=>{
    let player = new Player(req.body)
    player.save().then((response)=>{
        console.log(response)
        res.status(201).send(response)
    }).catch(e=>{
        res.status(400).send({error: 'It is an invalid url'})
    })
})


app.listen(port, ()=>{
    console.log("Server is listening at port" + port)
    // let data = Data[0].playersData;
    // for(let i=0; i<data.length; i++){
    //     let newPlayer = new Player(data[i])
    //     newPlayer.save().then((res)=>{
    //         console.log(res)
    //     }).catch(e=>{
    //         console.log(e)
    //     })
    // }

    // let teamData = Data[0].allTeamCards;
    // for(let i=0; i<teamData.length; i++){
    //     let team = new Team(teamData[i])
    //     team.save().then((res)=>{
    //         console.log(res)
    //     }).catch(e=>{
    //         console.log("errr")
    //     })
    // }
    
})