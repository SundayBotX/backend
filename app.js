// See https://github.com/dialogflow/dialogflow-fulfillment-nodejs
// for Dialogflow fulfillment library docs, samples, and to report issues
'use strict';
 
const functions = require('firebase-functions');
const {WebhookClient} = require('dialogflow-fulfillment');
const {Card, Suggestion} = require('dialogflow-fulfillment');

const timeZone = 'Indonesia/Jakarta';
const timeZoneOffset = '+07:00';
 
process.env.DEBUG = 'dialogflow:debug'; // enables lib debugging statements
 
exports.dialogflowFirebaseFulfillment = functions.https.onRequest((request, response) => {
    const agent = new WebhookClient({ request, response });
    console.log('Dialogflow Request headers: ' + JSON.stringify(request.headers));
    console.log('Dialogflow Request body: ' + JSON.stringify(request.body));
 
    function welcome(agent) {
        agent.add(`Welcome to my agent!`);
    }
 
    function fallback(agent) {
        agent.add(`I didn't understand`);
        agent.add(`I'm sorry, can you try again?`);
    }
   
   
   // To learn more about Dialogflow's Fulfillment, read the official documentation
   // https://dialogflow.com/docs/fulfillment
   
    function lampControl(agent) {
        const lampId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Hi from turnOnLamp function, action: ' + action + ' lamp id: ' + lampId;
        agent.add(strResponse);
        
        if (action === 'nyalakan') {
            
        }
        else if (action === 'matikan') {
            
        }
        else {
            
        }
    }
    
    function alarmControl(agent) {
        const alarmId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Hi from alarmControl function, action: ' + action + ' alarm id: ' + alarmId;
        agent.add(strResponse);
        
        if (action === 'nyalakan') {
            
        }
        else if (action === 'matikan') {
            
        }
        else {
            
        }
    }
    
    function setAlarmControl(agent) {
        // Followup for alarm if user wants to set alarm
        const action = agent.parameters.command;
        const date = agent.parameters.date;
        const time = agent.parameters.time;
        // const dateTimeStart = new Date(Date.parse(agent.parameters.date.split('T')[0] + 'T' + agent.parameters.time.split('T')[1].split('-')[0] + timeZoneOffset));
        var strResponse = 'Hi from setAlarmControl function, date: ' + date + ' time: ' + time;
        agent.add(strResponse);
        
        if (action === 'set') {
            
        }
        else {
        
        }
    }
    
    function acControl(agent) {
        const acId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Hi from acControl function, action: ' + action + ' ac id: ' + acId;
        agent.add(strResponse);
        
        if (action === ' nyalakan') {
            
        }
        else if (action === 'matikan') {
            
        }
        else if (action === 'set') {
            
        }
        else {
            
        }
    }

    function setAcControl(agent) {
        const acId = agent.parameters.number;
        const action = agent.parameters.command;
        const temperature = agent.parameters.temperature;
        var strResponse = 'Hi from setAcControl function, action: ' + action + 'ac id: ' + acId + 'temperature: ' + temperature;
        agent.add(strResponse);

        if (action === 'set') {

        }
        else {
            
        }
    }
    
    function windowControl(agent) {
        const windowId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Hi from windowControl function, action: ' + action + 'window id: ' + windowId;
        agent.add(strResponse);
        
        if (action === 'buka') {
            
        }
        else if (action === 'tutup') {
            
        }
        else {
            
        }
    }

    function garageDoorControl(agent) {
        const garageDoorId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Hi from garageDoorControl function, action: ' + action + ' garageDoorId: ' + garageDoorId;
        agent.add(strResponse);
        
        if (action === 'buka') {
            
        }
        else if (action === 'tutup') {
            
        }
        else if (action === 'status') {
            
        }
        else {
            
        }
    }
    
    function frontDoorControl(agent) {
        // const frontDoorId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Hi from frontDoorControl function, action: ' + action;
        agent.add(strResponse);
        
        if (action === 'bikin password') {
            
        }
        else if (action === 'status') {
            
        }
        else if (action == 'kunci') {
            
        }
        else if (action == 'buka') {
            
        }
        else if (action == 'tutup') {
            
        }
        else {
            
        }
    }
