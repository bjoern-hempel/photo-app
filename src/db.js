import PouchDB from 'pouchdb';

/**
 * DB class
 */
export default class DB {
    constructor(name, type) {
        this.db = new PouchDB(name);
    }

    /**
     * Returns all documents.
     *
     * @see https://pouchdb.com/api.html#batch_fetch
     *
     * @param {*} doctype
     */
    async getAll(includeDocs, includeAttachments) {
        let allDocs = await this.db.allDocs({
            include_docs: includeDocs ? true : false,
            attachments: includeAttachments ? true : false
        });

        let docs = [];

        allDocs.rows.forEach(n => docs.push(n.doc));

        return docs;
    }

    /**
     * Gets all documents by view.
     *
     * @see https://pouchdb.com/guides/queries.html
     *
     * @param {string} doctype
     * @param {string} indexName
     * @param {boolean} includeDocs
     */
    async getAllByView(doctype, indexName, includeDocs) {
        let allDocs = await this.db.query(doctype + '/' + indexName, {
            include_docs: includeDocs ? true : false
        });
        let docs = [];

        allDocs.rows.forEach(n => docs.push(n.doc));

        return docs;
    }

    /**
     * Runs a mango query.
     *
     * @see https://pouchdb.com/guides/mango-queries.html
     */
    async runMangoQuery() {
        // TODO
    }

    /**
     * Get a couchdb document.
     *
     * @see https://pouchdb.com/api.html#fetch_document
     *
     * @param {string} id
     */
    async get(id) {
        let doc = await db.get(id);

        return doc;
    }

    /**
     * Creates a new couchdb document.
     *
     * @see https://pouchdb.com/api.html#create_document
     *
     * @param {object} doc
     * @param {string} doctype
     */
    async create(doc, doctype) {
        doc.createdAt = new Date();
        doc.updatedAt = new Date();

        // add doctype
        doc['$doctype'] = doctype;

        const res = await this.db.post({ ...doc });

        // add id and rev to photo document
        doc['_id'] = res.id;
        doc['_rev'] = res.rev;

        return res;
    }

    /**
     * Updates an already existing couchdb document.
     *
     * @see https://pouchdb.com/api.html#create_document
     *
     * @param {*} doc
     */
    async update(doc) {
        doc.updatedAt = new Date();

        const res = await this.db.put({ ...doc });

        return res;
    }

    /**
     * Deletes an already existing couchdb document.
     *
     * @see https://pouchdb.com/api.html#delete_document
     *
     * @param {*} doc
     */
    async delete(doc) {
        const res = await this.db.remove({ ...doc });

        return res;
    }
}