import PouchDB from 'pouchdb';

export default class DB {
    constructor(name) {
        this.db = new PouchDB(name);
    }

    async getAllPhotos() {
        let allPhotos = await this.db.allDocs({ include_docs: true });
        let photos = {};

        allPhotos.rows.forEach(n => photos[n.id] = n.doc);

        return photos;
    }

    async createPhoto(photo) {
        photo.createdAt = new Date();
        photo.updatedAt = new Date();

        const res = await this.db.post({ ...photo });

        return res;
    }
}