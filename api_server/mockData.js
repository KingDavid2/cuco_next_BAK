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
const user_ids = artists.map( artist => artist.id )

const artworks = [...Array(8)].map( (_,i) => {
  const user_id = sample(user_ids)
  const quantity = randNum(0,2)
  const can_sell = quantity > 0 ? randBool() : false

  return {
    id: uuidv4(),
    user_id: user_id,
    title: faker.lorem.words(3),
    description: faker.lorem.words(5),
    height: randNum(1, 20),
    depth: randNum(0, 2),
    width: randNum(1, 20),
    can_sell: can_sell,
    price: randNum(50, 100),
    quantity: quantity,
    images: [
      faker.image.image(),
      faker.image.image()
    ]
  }}
)

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  artists,
  artworks
};