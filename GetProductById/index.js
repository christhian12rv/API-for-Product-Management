const { ObjectID } = ("mongodb");
const createMongoClient = require("../shared/mongoClient");

module.exports = async function (context, req) {
    const { id } = req.params;
    const { client: MongoClient, closeConnectionFn } = await createMongoClient();
    const Products = MongoClient.collection('products');
    const res = await Products.findById(ObjectID(id));
    const body = res.toArray();

    closeConnectionFn();

    context.res = {
        status: 200,
        body
    }
}