import database from "../database";

const Customer = database.collection("customers");
Customer.createIndex({ email: 1 }, { unique: true });
export default Customer;
