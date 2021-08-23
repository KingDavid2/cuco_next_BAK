const { v4: uuidv4 } = require('uuid');
const faker = require('faker');
const sample = require('lodash.sample');

const randNum = (min, max) => {
  return Math.round(Math.random() * (max - min)) + min;
}

const randBool = () => {
  return randNum(0,1) ? true : false
}

const artists = [...Array(8)].map( (_,i) => {
  return {
    id: uuidv4(),
    name: faker.name.firstName(),
    lastName: faker.name.lastName(),
    link: faker.internet.url,
    subheader: faker.lorem.words(2),
    description: faker.lorem.words(5),
    image: faker.internet.avatar()
  }}
)

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  artists
};
