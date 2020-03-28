const fs = require('fs');
const readline = require('readline');
const {google} = require('googleapis');

const OAuth2 = google.auth.OAuth2;

const SCOPES = ['https://www.googleapis.com/auth/youtube.readonly'];
const TOKEN_DIR = '.credentials/';
const TOKEN_PATH = TOKEN_DIR + 'token.json';

fs.readFile('client_secret.json', function processClientSecrets(err, content) {
    if (err) {
        console.log('Error to load client secret file: ' + err);
        return;
    }

    authorize(JSON.parse(content), getChannel)
});

function authorize(credentials, callback) {
    const crend = credentials.installed;

    const clientSecret = crend.client_secret;
    const clientId = crend.client_id;
    const redirectUrl = crend.redirect_uris[0];

    const oauth2Client = new OAuth2(clientId, clientSecret, redirectUrl);

    fs.readFile(TOKEN_PATH, function(err, token) {
       if(err) {
           getNewToken(oauth2Client, callback);
       } else {
           oauth2Client.credentials = JSON.parse(token);
           callback(oauth2Client);
       }
    });
}

function getChannel(auth) {
    const service = google.youtube('v3');

    service.channels.list({
        auth: auth,
        part: 'snippet,contentDetails,statistics',
        forUsername: 'NeoNmaNDK'
    }, function(err, response) {
        if(err) {
            console.log('The API returned an error: ', err)
            return;
        }

        const channels = response.data.items;

        if(channels.length === 0) {
            console.log('No channel found.');
        } else {
            console.log('id:', channels[0].id);
            console.log('title:', channels[0].snippet.title);
            console.log('viewcount:', channels[0].statistics.viewCount);
        }
    })
}

function getNewToken(oauth2Client, callback) {
    const authUrl = oauth2Client.generateAuthUrl({
        access_type: 'offline',
        scope: SCOPES
    });

    const rl = readline.createInterface({
        input: process.stdin,
        output: process.stdout
    });

    console.log('Authorize this app by visiting this url: ', authUrl);


    rl.question('Enter the code from the page here: ', function(code) {
        rl.close();

        oauth2Client.getToken(code, function(err, token) {
            if(err) {
                console.log('Error while trying to retrieve access token', err)
                return;
            } else {
                oauth2Client.credentials = token;
                storeToken(token);
                callback(oauth2Client);
            }
        })
    })
}

function storeToken(token) {
    try {
        fs.mkdirSync(TOKEN_DIR);
    } catch (err) {
        if(err.code !== 'EEXIST') {
            throw err;
        }
    }

    fs.writeFile(TOKEN_PATH, JSON.stringify(token), (err) => {
        if(err) throw err;
        console.log('Token stored to ' + TOKEN_PATH)
    })
}