const express = require('express')
    , app = express()
    , { DialogflowApp } = require('actions-on-google')
    , WelcomeIndent = 'input.welcome'
    , OpportunityEmailID = 'input.oppEmailId'
    , PORT = process.env.PORT || 4141;

app.post('/', (req, res) => {
  console.log('req -- > ', req.body);
  console.log('req rext - >', req.text);
  console.log('typeof -- > ', typeof(req.body), typeof(req.text), typeof(req));
  var dfApp = new DialogflowApp({request:req, response:res});
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
