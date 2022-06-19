import {AxiosRequestConfig} from 'axios';
import Constants from './Constants';

class Config{

    private uploadConfig: AxiosRequestConfig;
    private getMetaDataConfig: AxiosRequestConfig;
    private deleteConfig: AxiosRequestConfig;

    constructor(){
        const constants = new Constants();

        this.uploadConfig = {
            method: 'post',
            url: constants.uploadUrl,
            headers: {
                'Content-Type': 'application/octet-stream',
                'Authorization': 'Bearer ' + constants.token,
                'Dropbox-API-Arg': `{"mode":"add","path":"${constants.picture}","mute":false,"autorename":true}`
            },
            data: {
                binary: "../Picture/example.jpg"
            }
        }

        this.getMetaDataConfig = {
            method: 'post',
            url: constants.metadataUrl,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': 'Bearer ' + constants.token
            },
            data: {
                "path": constants.picture
            }
        }

        

        this.deleteConfig = {
            method: 'post',
            url: constants.deleteUrl,
            headers: {
                'Authorization': 'Bearer ' + constants.token,
                'Content-Type': 'application/json'
            },
            data: {
                "path": constants.picture
            }
        }

    }

    getMetadataConfig(){
        return this.getMetaDataConfig;
    }

    getUploadConfig(){
        return this.uploadConfig;
    }

    getDeleteConfig(){
        return this.deleteConfig;
    }

}
export default Config;