import { APP_DATA } from "../../interfaces";

export const APP_DETAILS : APP_DATA = {
    APP_NAME: 'kerala2.com',
    APP_URL: 'https://main--funny-dusk-d87052.netlify.app/',
    APP_BASE: '/',
}

export const CLIENT_ID:string =  '696879352644-p5drt0mq2rqrs75s3v6kms8g79ud1d11.apps.googleusercontent.com';
export const CLIENT_SECRETE:string = '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'; 
export const SCOPES: Array<string> = ['https://www.googleapis.com/auth/userinfo.profile'];
export const REDIRECT_URI:string ='http://localhost:3000';

export const MIN_SWIPE_REQUIRED : number = 40;
