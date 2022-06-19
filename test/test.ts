import DropboxAPI from "../API/DropboxAPI";
import { expect } from 'chai';
import 'mocha';


let dropboxAPI = new DropboxAPI();

describe("Upload file to DropBox", () => {
    it("Upload", async () => {
        const res = await dropboxAPI.uploadFile();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})

describe("Get metadata from DropBox", () => {
    it("Get", async () => {
        const res = await dropboxAPI.getMetadata();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})

describe("Delete file from DropBox", () => {
    it("Delete", async () => {
        const res = await dropboxAPI.deleteFile();
        expect(res.status).to.equal(200);
    }).timeout(10000);
})