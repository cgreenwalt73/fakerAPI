const express = require("express");
const app = express();
const PORT = 8000;

const {faker} = require('@faker-js/faker');

const createUser = () => {
  return{
    password: faker.internet.password(),
    email: faker.internet.email(),
    phoneNumber: faker.phone.number(),
    lastName: faker.name.lastName(),
    firstName: faker.name.firstName(),
    _id: faker.datatype.uuid()
  }
}
const createCompany = () => {
  return{
    _id: faker.datatype.uuid(),
    name: faker.name.findName(),
    address: {
      street: faker.address.street(),
      city: faker.address.city(),
      state: faker.address.state(),
      zipCode: faker.address.zipCode(),
      country: faker.address.country()
  }}
}

// req is short for request
// res is short for response
app.get('/api/users/new', (req, res)=> {
  const user = createUser();
  res.json(user);
});

app.get('/api/companies/new', (req, res)=> {
  const company = createCompany();
  res.json(company);
});

app.get('/api/user/company', (req, res)=> {
  const user = createUser();
  const company = createCompany();
  const userAndCompany = { user, company}
  res.json(userAndCompany);
});

// this needs to be below the other code blocks
app.listen( PORT, () => console.log(`Listening on port: ${PORT}`) );