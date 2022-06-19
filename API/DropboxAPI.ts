import axios, {AxiosResponse} from "axios";
import Config from "./Config";

class DropboxAPI{
    private config: Config;

    constructor(){
        this.config = new Config();
    }

    uploadFile(): Promise<AxiosResponse>{
        return axios(this.config.getUploadConfig());
    }
    
    getMetadata(): Promise<AxiosResponse>{
        return axios(this.config.getMetadataConfig());
    }

    deleteFile(): Promise<AxiosResponse>{
        return axios(this.config.getDeleteConfig());
    }
}

export default DropboxAPI;