
const authClient = require('../config/google-auth.config');
const sheetId = process.env.SHEET_ID
const { google } = require('googleapis');
const sheets = google.sheets('v4');
exports.test_google_sheet = (req, ress, next) => {
    // res.send(sheetId)
    sheets.spreadsheets.values.get({
        auth: authClient,
        spreadsheetId: sheetId,
        range: 'Sheet1!A1:B2',
    }, (err, res) => {
        if (err) {
            console.error(err);
            return;
        }
        console.log(res.data.values);
        ress.json(res.data.values)
    });

}