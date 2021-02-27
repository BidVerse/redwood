//@ts-ignore
import { Link, routes } from '@redwoodjs/router'

const post = {
  name: 'Parametric Logo Design',
  image:
    'https://d3e1m60ptf1oym.cloudfront.net/231da4b2-91a7-11e2-b6c4-adfbe45c3dd4/LA-Skyline_uxga.jpg',
  minimumBid: 1355.0,
  id: 'postID',
  description: `Nulla do cupidatat non duis officia sit esse sit qui duis voluptate cupidatat ex magna. Proident aute proident minim quis ipsum duis ex nisi. Ea proident cupidatat duis consequat ullamco cupidatat in dolor quis id veniam reprehenderit duis. Proident elit culpa dolor enim esse et do non irure ad nisi velit excepteur. Non culpa mollit consectetur aliquip duis nostrud qui est magna id.

Ad nisi proident qui incididunt mollit incididunt proident veniam commodo nostrud mollit deserunt. Non culpa irure ea ad adipisicing est proident. Sunt veniam enim dolor nisi aute commodo tempor do deserunt esse aute exercitation consequat.Ullamco dolor ullamco nostrud nulla id proident sit irure. Excepteur sit laboris nostrud aute non nisi magna laboris tempor adipisicing. Amet et dolore sint in ipsum culpa adipisicing in nostrud consectetur minim.`,
  seller: {
    name: 'Jacob Zwang',
    id: 'sellerID',
    image:
      'https://avatars.githubusercontent.com/u/59858341?s=460&u=617857b342627e0166e09414c580bcb31ce251d7&v=4',
    description: `Tempor sint proident mollit enim incididunt ex. Aliquip duis in ullamco eu consequat. Officia deserunt incididunt sit esse labore est id ex. Eu excepteur excepteur non duis veniam et.

In minim dolor enim in ad reprehenderit ad irure sit eu sint id ex adipisicing. `,
  },
  offers: new Array(12).fill({
    id: 'offerID',
    from: 'Ben Swerdlow',
    amount: 124.6546,
    accepted: false,
  }),
}

const Offers = (offers) =>
  offers.map((offer) => (
    <tr>
      <td>${offer.amount}</td>
      <td>{offer.from}</td>
      <td>{offer.id}</td>
    </tr>
  ))

const PlaceOffer = () => {
  return (<div className="place-offer">
          <input placeholder={"$"+post.minimumBid + " +"} type="number" />
          <button>Place Bid</button>
          </div>
  )
}

const PostPage = () => {
  return (
    <div className="post-page">
      <img src={post.image}></img>
      <div className="content">
        <div className="info">
          <h1>{post.name}</h1>
          <pre>{post.description}</pre>
        {PlaceOffer()}
          {/* {Graph()} */}
        </div>
        <div className="profile-large">
          <img src={post.seller.image}></img>
          <div className="info">
            <h1>{post.seller.name}</h1>
            <pre>{post.seller.description}</pre>
          </div>
        </div>
      </div>
      <div className="offers">
        <table>{Offers(post.offers)}</table>
      </div>
    </div>
  )
}

export default PostPage
