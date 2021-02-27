import Post from './Post'

export const List = new Array(10)
  .fill({
    name: 'Parametric Logo Design',
    image:
      'https://d3e1m60ptf1oym.cloudfront.net/231da4b2-91a7-11e2-b6c4-adfbe45c3dd4/LA-Skyline_uxga.jpg',
    minimumBid: 15.0,
    id: 'postID',
    description:
      'Nulla do cupidatat non duis officia sit esse sit qui duis voluptate cupidatat ex magna. Proident aute proident minim quis ipsum duis ex nisi. Ea proident cupidatat duis consequat ullamco cupidatat in dolor quis id veniam reprehenderit duis. Proident elit culpa dolor enim esse et do non irure ad nisi velit excepteur. Non culpa mollit consectetur aliquip duis nostrud qui est magna id.',
    seller: {
      name: 'Jacob Zwang',
      id: 'sellerID',
      image: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',
    },
  })
  .map((item) => Post(item))

export default List
