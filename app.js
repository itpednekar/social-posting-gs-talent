const http = require('http');
var request = require('request');
var express = require('express');
var app = express();

const hostname = 'localhost';
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.setHeader("Access-Control-Allow-Credentials", "true");
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE,PATCH,OPTIONS,HEAD");
    res.header("Access-Control-Allow-Headers", "Access-Control-Allow-Headers, Authorization, Origin,Accept, X-Requested-With, Content-Type, Access-Control-Request-Method, Access-Control-Request-Headers");
    next();
});

app.post('/post-fb' ,(req, res) =>{
    const {jobTitle,projectName,posOpenDate,jd,shortSummary, experienceRequired} = req.body;
    let msg = `New Vacancy is created in GS Lab! 
Vacancy Details => Position : ${jobTitle}, 
Position Open Date : ${posOpenDate}
Project : ${projectName}, 
Technology : ${jd}, 
Experience : ${experienceRequired}, 
Summary : ${shortSummary}
Submit your resume at https://applicationform-007.web.app/home`

    const id = '109699864193378'  //facebook demo page id
    const access_token = 'EAAI4ccOkMVcBADKg9EDWOJ1ZBrNicHhSQGtfSZCCcxX5u1OcI3a9tUOVUUf5cPxS9cGEGeZCHt3jIIeAZCfODh227bK5fVyRLPKNsKoNr6f6ncrbQDb3SplJLeJKloAEM0lO02ahYfgkKDncDh8cH8ZCUaEqGZBkmvc9eKZCZBcCgTQVZBxy2kK7W';
    const postTextOptions = {
      method: 'POST',
      uri: `https://graph.facebook.com/${id}/feed`,
      qs: {
        access_token: access_token,
        message: `${msg}`
      }
    };
    request(postTextOptions);
    res.send('Posted')
})



// app.listen(PORT, hostname, () => {
//     console.log(`Server running at http://${hostname}:${PORT}/`);
// });

app.listen(PORT, function() {
  console.log('Chat server running');
});