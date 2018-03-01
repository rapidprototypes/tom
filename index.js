const { DialogflowApp } = require('actions-on-google')
    , dfApp = new DialogflowApp({request:request, response:response})
    , WelcomeIndent = 'input.welcome'
    , OpportunityEmailID = 'input.oppEmailId';

function welcome(app){
  app.ask('I am glad that you are interested in creating opportunity! Are you sure you want to proceed with creating opportunity');
}

function oppEmailId(app){
  app.tell('your email id is captured');
}

const actionMap = new Map();
actionMap.set(WelcomeIndent, welcome);
actionMap.set(OpportunityEmailID, oppEmailId);
