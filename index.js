const express = require('express')
    , app = express()
    , { DialogflowApp } = require('actions-on-google')
    , WelcomeIndent = 'input.welcome'
    , OpportunityEmailID = 'input.oppEmailId'
    , PORT = process.env.PORT || 4141;

app.post('/', (req, res) => {
  var request = JSON.parse(req)
    , response = JSON.parse(res);
  console.log('req -- > ', request);
  console.log('res -- > ', response);
  var dfApp = new DialogflowApp({request:request, response:response});
  function welcome(app){
    dfApp.ask('I am glad that you are interested in creating opportunity! Are you sure you want to proceed with creating opportunity');
  }

  function oppEmailId(app){
    dfApp.tell('your email id is captured');
  }

  const actionMap = new Map();
  actionMap.set(WelcomeIndent, welcome);
  actionMap.set(OpportunityEmailID, oppEmailId);
});

app.listen(PORT, (err, res) => {
  if (err) {
    console.log('err in starting server - > ', err);
  } else {
    console.log('server started in ', PORT);
  }
});
