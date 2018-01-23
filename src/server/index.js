const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const axios = require('axios');
const querystring = require('querystring');
// const process = require('process');

const app = express();

// process.env.PORT lets the port be set by Heroku
const port = process.env.PORT || 3000;

// const tokenHeader = {
//   "Content-Type": "application/x-www-form-urlencoded",
//   Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJjbGllbnRfaWQiOiJkZjI5NjJlNWFhNmNlMjk3OWY3ZjY5MGRhYzQzMTMzYmNlYzFlZTBhY2YxOWY1OGNlOTk1Mzc3ZDUwNGY1Mzk3IiwiZXhwIjoxNTA5OTIyMjM4fQ.ulrjQXB9iVcvDnnoQYzcNTjl2zd8suY_DEptjQwlwOk"
// }
//
// const ANALYZE_URL = 'https://api.skillsengine.com/v2/competencies/analyze';
// const TEST_URL = 'https://api.skillsengine.com/api/test';
// const TOKEN_URL = 'https://api.skillsengine.com/api/token';

app.use('/public', express.static(path.join(__dirname, '../public/')))

app.use(bodyParser.json())

app.get('/*', (req, res, next) => {
  res.sendFile(path.join(__dirname, '../client/index.html'));
})


// app.post('/', (req, res, next) => {
//   return testToken(tokenHeader, req.body)
//   .then(response => {
//     console.log(response.data.result.competencies_analysis.skills);
//     res.send(response.data.result.competencies_analysis.skills);
//   })
//     .catch(err => console.log(err));
// })



// function analyzeText(data) {
//   console.log('data:', data);
//   return axios.post(ANALYZE_URL, querystring.stringify(data), {headers: tokenHeader});
// }
//
// function getNewAccessToken(credentials, data) {
//   return axios.post(TOKEN_URL, credentials)
//   .then((res) => {
//     tokenHeader.Authorization = "Bearer " + res.data.access_token;
//     console.log('New access token retrieved.');
//     return analyzeText(data);
//     }
//   )
//   .catch(err =>
//     console.log('Unable to retrieve new access token.')
//   )
// }
//
// function testToken(token, data) {
//   return axios.get(TEST_URL, {'headers': token})
//   .then(response =>{
//     console.log('TEST succeeded!');
//     return analyzeText(data);
//   })
//   .catch(err => {
//     console.log(process.env);
//     return getNewAccessToken({
//       grant_type: 'client_credentials',
//       client_id: process.env.client_id,
//       client_secret: process.env.client_secret
//     }, data);
//   });
// }


app.listen(port, function () {
  console.log('Listening on ' + port);
})
