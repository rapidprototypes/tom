const express = require('express')
    , app = express()
    , http = require('http')
    , server = http.createServer(app)
    // , { DialogflowApp } = require('actions-on-google')
    // , WelcomeIndent = 'input.welcome'
    // , OpportunityEmailID = 'input.oppEmailId'
    , PORT = process.env.PORT || 4141;

app.post('/', (req, res) => {
  console.log('req -- > ', req.body);
  console.log('req rext - >', req.query);
  console.log('typeof -- > ', typeof(req.body), typeof(req.text), typeof(req));
//   var dfApp = new DialogflowApp({request:req, response:res});
//   function welcome(app){
//     dfApp.ask('I am glad that you are interested in creating opportunity! Are you sure you want to proceed with creating opportunity');
//   }
//
//   function oppEmailId(app){
//     dfApp.tell('your email id is captured');
//   }
//
//   const actionMap = new Map();
//   actionMap.set(WelcomeIndent, welcome);
//   actionMap.set(OpportunityEmailID, oppEmailId);
    var speech = 'from webhook';
    res.json({
        speech : speech,
        displayText : speech,
        source : 'webhook-asda-assistant'
    });
});

server.listen(PORT, (err, res) => {
  if (err) {
    console.log('err in starting server - > ', err);
  } else {
    console.log('server started in ', PORT);
  }
});
