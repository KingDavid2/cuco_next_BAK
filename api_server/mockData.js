const uuid = require("uuid");

const artists = [
  {
    id: uuid.v1(),
    name: 'Pablo',
    lastName: 'Picasso',
    link: '/',
    subheader: 'Some description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lectus ac leo maximus, eu pulvinar magna luctus. Vestibulum eget nisi et nulla tristique pellentesque non vitae diam. Donec sem enim, semper sed efficitur sit amet, commodo in quam. Vestibulum molestie leo gravida lectus convallis imperdiet.',
    image: 'https://pablo-picasso.space/wp-content/uploads/2019/07/pablo-picasso-facts-thumbnail-2.jpg'
  },
  {
    id: uuid.v1(),
    name: 'Pablo',
    lastName: 'Picasso',
    link: '/',
    subheader: 'Some description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lectus ac leo maximus, eu pulvinar magna luctus. Vestibulum eget nisi et nulla tristique pellentesque non vitae diam. Donec sem enim, semper sed efficitur sit amet, commodo in quam. Vestibulum molestie leo gravida lectus convallis imperdiet.',
    image: 'https://pablo-picasso.space/wp-content/uploads/2019/07/pablo-picasso-facts-thumbnail-2.jpg'
  },
  {
    id: uuid.v1(),
    name: 'Pablo',
    lastName: 'Picasso',
    link: '/',
    subheader: 'Some description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lectus ac leo maximus, eu pulvinar magna luctus. Vestibulum eget nisi et nulla tristique pellentesque non vitae diam. Donec sem enim, semper sed efficitur sit amet, commodo in quam. Vestibulum molestie leo gravida lectus convallis imperdiet.',
    image: 'https://pablo-picasso.space/wp-content/uploads/2019/07/pablo-picasso-facts-thumbnail-2.jpg'
  },
  {
    id: uuid.v1(),
    name: 'Pablo', lastName: 'Picasso',
    link: '/',
    subheader: 'Some description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lectus ac leo maximus, eu pulvinar magna luctus. Vestibulum eget nisi et nulla tristique pellentesque non vitae diam. Donec sem enim, semper sed efficitur sit amet, commodo in quam. Vestibulum molestie leo gravida lectus convallis imperdiet.',
    image: 'https://pablo-picasso.space/wp-content/uploads/2019/07/pablo-picasso-facts-thumbnail-2.jpg'
  },
  {
    id: uuid.v1(),
    name: 'Pablo',
    lastName: 'Picasso',
    link: '/',
    subheader: 'Some description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lectus ac leo maximus, eu pulvinar magna luctus. Vestibulum eget nisi et nulla tristique pellentesque non vitae diam. Donec sem enim, semper sed efficitur sit amet, commodo in quam. Vestibulum molestie leo gravida lectus convallis imperdiet.',
    image: 'https://pablo-picasso.space/wp-content/uploads/2019/07/pablo-picasso-facts-thumbnail-2.jpg'
  },
  {
    id: uuid.v1(),
    name: 'Pablo',
    lastName: 'Picasso',
    link: '/',
    subheader: 'Some description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lectus ac leo maximus, eu pulvinar magna luctus. Vestibulum eget nisi et nulla tristique pellentesque non vitae diam. Donec sem enim, semper sed efficitur sit amet, commodo in quam. Vestibulum molestie leo gravida lectus convallis imperdiet.',
    image: 'https://pablo-picasso.space/wp-content/uploads/2019/07/pablo-picasso-facts-thumbnail-2.jpg'
  },
  {
    id: uuid.v1(),
    name: 'Pablo',
    lastName: 'Picasso',
    link: '/',
    subheader: 'Some description',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque tempor lectus ac leo maximus, eu pulvinar magna luctus. Vestibulum eget nisi et nulla tristique pellentesque non vitae diam. Donec sem enim, semper sed efficitur sit amet, commodo in quam. Vestibulum molestie leo gravida lectus convallis imperdiet.',
    image: 'https://pablo-picasso.space/wp-content/uploads/2019/07/pablo-picasso-facts-thumbnail-2.jpg'
  }
]

// Using CommonJS style export so we can consume via Node (without using Babel-node)
module.exports = {
  artists
};