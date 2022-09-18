import { ObjectId } from "mongodb";
import Customer from "../entities/customer";

async function addCustomer(customer) {
  try {
    return await Customer.insertOne(customer);
  } catch (error) {
    throw error;
  }
}
async function findByEmail(email) {
  try {
    return await Customer.findOne({ email });
  } catch (error) {
    throw error;
  }
}
async function editCustomer(customer) {
  try {
    return await Customer.updateOne({ _id: ObjectId(customer.id) }, { $set: customer });
  } catch (error) {
    throw error;
  }
}

const customerRepository = Object.freeze({ addCustomer, findByEmail, editCustomer });

export default customerRepository;
