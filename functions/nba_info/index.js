"use strict";
const APP_ID = undefined; // TODO replace with your app ID (OPTIONAL).


const Alexa = require("alexa-sdk");
const https = require('https');


const URL_BASE = 'https://www.fantasybasketballnerd.com/service/';



const TEAM_CODE = {
    "Atlanta Hawks":"ATL",
    "Brooklyn Nets":"BKN",
    "Boston Celtics":"BOS",
    "Charlotte Hornets":"CHA",
    "Chicago Bulls":"CHI",
    "Cleveland Cavaliers":"CLE",
    "Dallas Mavericks":"DAL",
    "Denver Nuggets":"DEN",
    "Detroit Pistons":"DET",
    "Golden State Warriors":"GSW",
    "Houston Rockets":"HOU",
    "Indiana Pacers":"IND",
    "Los Angeles Clippers":"LAC",
    "Los Angeles Lakers":"LAL",
    "Memphis Grizzlies":"MEM",
    "Miami Heat":"MIA",
    "Milwaukee Bucks":"MIL",
    "Minnesota Timberwolves":"MIN",
    "New Orleans Pelicans":"NOP",
    "New York Knicks":"NYK",
    "Oklahoma City Thunder":"OKC",
    "Orlando Magic":"ORL",
    "Philadelphia 76ers":"PHI",
    "Phoenix Suns":"PHX",
    "Portland Trail Blazers":"POR",
    "Sacramento Kings":"SAC",
    "San Antonio Spurs":"SAS",
    "Toronto Raptors":"TOR",
    "Utah Jazz":"UTA",
    "Washington Wizards":"WAS"
}





exports.handler = function(event, context, callback) {
    console.log('Received event:', JSON.stringify(event));

    var alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    alexa.registerHandlers(handlers);



    alexa.execute();
};


const handlers = {
    'LaunchRequest': function() {
        this.emit('GetInjuries');
    },
    'GetTeamInjuries': function() {
        this.emit('GetInjuries');
    },
    'GetInjuries': function() {
        const team = this.event.request.intent.slots.team.value

        console.log('The given team is: ' + team);
        getTeamInjuries(team);

        const randomFact = "The team is " + team;

        // Create speech output
        const speechOutput = "Here's your fact: " + randomFact;
        this.emit(':tellWithCard', speechOutput, "American Space Facts", randomFact)
    }
};

function getTeamCode(teamName) {
    const teamCode = TEAM_CODE[teamName]
    return teamCode;
}


function getSchedule(teamName, date) {

}

function getTeamInjuries(teamName) {
    console.log('teamAbbreviation is: ' + getTeamCode(teamName));


    // var url = urlPrefix + day + '_' + date;

    // https.get(url, function(res) {
    //     var body = '';

    //     res.on('data', function (chunk) {
    //         body += chunk;
    //     });

    //     res.on('end', function () {
    //         var stringResult = parseJson(body);
    //         eventCallback(stringResult);
    //     });
    // }).on('error', function (e) {
    //     console.log("Got error: ", e);
    // });
}

function getTeamDepthChart(teamName) {

}