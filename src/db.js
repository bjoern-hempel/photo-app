import PouchDB from 'pouchdb';

/**
 * DB class
 */
export default class DB {
    constructor(name) {
        this.db = new PouchDB(name);
    }

    async getAll() {
        let allDocs = await this.db.allDocs({ include_docs: true });
        let elements = {};

        allDocs.rows.forEach(n => elements[n.id] = n.doc);

        return elements;
    }

    async create(element) {
        element.createdAt = new Date();
        element.updatedAt = new Date();

        const res = await this.db.post({ ...element });

        // add id and rev to photo element
        element['_id'] = res.id;
        element['_rev'] = res.rev;

        return res;
    }

    async update(element) {
        element.updatedAt = new Date();

        const res = await this.db.put({ ...element });

        return res;
    }
}