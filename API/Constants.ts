class Constants{
    uploadFileUrl: string;
    metaDatafileUrl: string;
    deleteFileUrl: string;
    tokenCopy: string;
    picturePath: string;

    constructor(){
        this.uploadFileUrl = "https://content.dropboxapi.com/2/files/upload";
        this.metaDatafileUrl = "https://api.dropboxapi.com/2/files/get_metadata";
        this.deleteFileUrl = "https://api.dropboxapi.com/2/files/delete_v2";
        this.tokenCopy = "sl.BJ2m7N6nIL2zdYeSabyCGepWINd44Kibp-djcOxDXJvLKC0vixWxTqaQz_p8bsOwaNY9R_lZrF_IpqqXUaJLIUiGEwrtO9yOuEtRk-rkJrgm1K5EENFnumEqeCHeTlYj998bc4X8";
        this.picturePath = "/example.jpg";
    }

    get uploadUrl():string{
        return this.uploadFileUrl;
    }

    get metadataUrl():string{
        return this.metaDatafileUrl;
    }

    get deleteUrl():string{
        return this.deleteFileUrl;
    }

    get token():string{
        return this.tokenCopy;
    }

    get picture():string{
        return this.picturePath;
    }

}
export default Constants;