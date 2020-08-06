import * as admin from 'firebase-admin';
import * as functions from 'firebase-functions';

const cors = require('cors')({origin: true});
const request = require('request')


admin.initializeApp(functions.config().firebase);
// above codes only needed if you use firebase admin

export * from './defaultFunctions';

export const getSerialKeyValid = functions.https.onRequest(async (req, response) => {
    try {
        await cors(req, response, async () => {
            if (req.method === 'GET') {
                console.log('VERIFY SERIAL' + req.query.serial);
                request.post('https://api.gumroad.com/v2/licenses/verify', {
                    json: {
                        product_permalink: 'hKOkO',
                        license_key: req.query.serial,
                        increment_uses_count: false
                    }
                }, (error:any, res:any, body:any) => {
                    if (error) {
                        console.error(error)
                        return
                    }
                    response.status(200).json({success: body.success});
                })
            } else {
                console.log('Not allowed');
                response.status(500).json({message: 'Not allowed'});
            }
        });
    } catch (error) {
        console.log(error);
        response.status(500).send(error);
    }
});

