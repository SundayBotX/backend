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
        agent.add(`Hallo, aku Sunday, siap membantu keseharian Anda di rumah!`);
    }
 
    function fallback(agent) {
        agent.add(`Wah, aku kurang ngerti nih.`);
        agent.add(`Maaf, boleh diulang?`);
    }
   
   // To learn more about Dialogflow's Fulfillment, read the official documentation
   // https://dialogflow.com/docs/fulfillment
   
    function lampControl(agent) {
        const lampId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Lampu ke-' + lampId + ' udah berhasil di' + action + ' nih!';
        agent.add(strResponse);
        
        if (action === 'nyalakan') {
            
        } else if (action === 'matikan') {
            
        } else {
            
        }
    }
    
    function alarmControl(agent) {
        const alarmId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Alarm ke-' + alarmId + ' udah berhasil di' + action + ' nih!';
        agent.add(strResponse);
        
        if (action === 'nyalakan') {
            
        } else if (action === 'matikan') {
            
        } else {
            
        }
    }
    
    function setAlarmControl(agent) {
        // Followup for alarm if user wants to set alarm
        const action = agent.parameters.command;
        const date = agent.parameters.date;
        const time = agent.parameters.time;
        // const dateTimeStart = new Date(Date.parse(agent.parameters.date.split('T')[0] + 'T' + agent.parameters.time.split('T')[1].split('-')[0] + timeZoneOffset));
        var strResponse = 'Alarm berhasil ditambahkan di tanggal ' + date + ' jam ' + time + '.';
        agent.add(strResponse);
        
        if (action === 'set') {
            
        } else {
        
        }
    }
    
    function acControl(agent) {
        const acId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Hi from acControl function, action: ' + action + ' ac id: ' + acId;
        agent.add(strResponse);
        
        if (action === ' nyalakan') {
            
        } else if (action === 'matikan') {
            
        } else {
            
        }
    }

    function setAcControl(agent) {
        const acId = agent.parameters.number;
        const action = agent.parameters.command;
        const temperature = agent.parameters.temperature;
        var strResponse = 'Hi from setAcControl function, action: ' + action + 'ac id: ' + acId + 'temperature: ' + temperature;
        agent.add(strResponse);

        if (action === 'set') {

        } else {
            
        }
    }
    
    function windowControl(agent) {
        const windowId = agent.parameters.number;
        const action = agent.parameters.command;
        var strResponse = 'Jendela ' + windowId + ' udah di' + action + ' loh.';
        agent.add(strResponse);
        
        if (action === 'buka') {
            
        } else if (action === 'tutup') {
            
        } else {
            
        }
    }

    function garageDoorControl(agent) {
        const garageDoorId = agent.parameters.number;
        const action = agent.parameters.command;
        let strResponse = '';
        
        if (action === 'buka') {
            strResponse = 'Pintu garasi ke-' + garageDoorId + 'sudah di' + action + '. Enjoy your fresh air!';
        } else if (action === 'tutup') {
            strResponse = 'Pintu garasi ke-' + garageDoorId + 'sudah di' + action + '.';
        } else if (action === 'status') {
            strResponse = 'Pintu garasi ke-' + garageDoorId + 'lagi ke' + action + '.';
        } else {
            strResponse = 'Jangan lupa tutup pintu garasi setelah dibuka ya. Stay safe!';
        }
        agent.add(strResponse);
    }
    
    function frontDoorControl(agent) {
        // const frontDoorId = agent.parameters.number;
        const action = agent.parameters.command;
        let strResponse = '';
        
        if (action === 'bikin password') {
            strResponse = 'Berhasil ' + action + ' buat pintu depan nih.';
        } else if (action === 'status') {
            strResponse = 'Pintu depan lagi ke' + action + '.';
        } else if (action === 'kunci') {
            strResponse = 'Siap, ' + action + ' pintu depan.';
        } else if (action === 'buka') {
            strResponse = 'Siap, ' + action + ' kunci pintu depan.';
        } else {
            // if action ==
            strResponse = 'Kalau keluar rumah, jangan lupa kunci pintu.';
        }
        agent.add(strResponse);
    }
    
    // Run the proper function handler based on the matched Dialogflow intent name
    let intentMap = new Map();
    intentMap.set('Default Welcome Intent', welcome);
    intentMap.set('Default Fallback Intent', fallback);
    intentMap.set('Lamp', lampControl);
    intentMap.set('AC', acControl);
    intentMap.set('Set AC', setAcControl);
    intentMap.set('Alarm', alarmControl);
    intentMap.set('Set Alarm', setAlarmControl);
    intentMap.set('Front Door', frontDoorControl);
    intentMap.set('Garage Door', garageDoorControl);
    intentMap.set('Window', windowControl);

    agent.handleRequest(intentMap);
});