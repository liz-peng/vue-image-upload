import qs from 'qs';
import axios from 'axios';

const CLIENT_ID = '26c12aac76a9059';
const ROOT_URL = 'https://api.imgur.com';

export default {
	login() {
		/*
		send:
		https://api.imgur.com/oauth2/authorize?
		client_id=YOUR_CLIENT_ID
		&response_type=REQUESTED_RESPONSE_TYPE
		&state=APPLICATION_STATE

		get:
		http://localhost:8080/oauth2/callback#
		access_token=0900b44c0bc0adb874b22978b51ee5553ddddbf2
		&expires_in=315360000&token_type=bearer
		&refresh_token=e0cb0e92d369b7ed7fc0772ead26f2a2745504b2 // use refresh token after token expired
		&account_username=littlebambiben
		&account_id=28138829
		*/
		const queryString = {
			client_id: CLIENT_ID,
			response_type: 'token'
		};

		// use qs to turn queryString object into real query string
		window.location = `${ROOT_URL}/oauth2/authorize?${qs.stringify(queryString)}`;
	},

	fetchImages(token) {
		// get account images: https://api.imgur.com/3/account/me/images
		/*
		HEADERS
		Authorization: Bearer {{accessToken}}
		*/
		return axios.get(`${ ROOT_URL }/3/account/me/images`, {
			headers: {
				Authorization: `Bearer ${ token }`
			}
		});
	}
}