// @ts-ignore
import { Link, routes } from '@redwoodjs/router'

// type User = {
//     id: string,
//     email: string,
//     password: string,
//     name: string,
//     bio: string,
//     profileImgUrl: string,
//     role: string,
//     offers: string,
//     jobs: string,
//   }

type Post = {
  name: string
  image: string
  minimumBid: number
  description: string
  seller: {
    name: string
    id: string
    image: string
  }
}

const Hero = () => (
  <div className="hero">
    <h1>Name Here</h1>
    <h2>Bid on Contractors Time</h2>
  </div>
)

const TopBar = () => (
  <div className="topBar">
    <input className="searchBar" placeholder="Search For Contractors"></input>
  </div>
)

const ProfileSmall = (seller: any) => (
  <div className="profileSmall">
    <img src={seller.image}></img>
    <div className="info">
      <h3>{seller.name}</h3>
    </div>
  </div>
)

const Post = (post: Post) => (
  <>
    <div className="listing">
      <img src={post.image}></img>
      <div className="info">
        <h1>{post.name}</h1>
        <p>{post.description.substr(0, 150) + '...'}</p>
        {ProfileSmall(post.seller)}
      </div>
    </div>
  </>
)

const List = new Array(10)
  .fill({
    name: 'Parametric Logo Design',
    image:
      'https://d3e1m60ptf1oym.cloudfront.net/231da4b2-91a7-11e2-b6c4-adfbe45c3dd4/LA-Skyline_uxga.jpg',
    minimumBid: 15.0,
    description:
      'Nulla do cupidatat non duis officia sit esse sit qui duis voluptate cupidatat ex magna. Proident aute proident minim quis ipsum duis ex nisi. Ea proident cupidatat duis consequat ullamco cupidatat in dolor quis id veniam reprehenderit duis. Proident elit culpa dolor enim esse et do non irure ad nisi velit excepteur. Non culpa mollit consectetur aliquip duis nostrud qui est magna id.',
    seller: {
      name: 'Jacob Zwang',
      id: '9q38f5yu3948',
      image: 'http://www.apimages.com/Images/Ap_Creative_Stock_Header.jpg',
    },
  })
  .map((item) => Post(item))

const HomePage = () => {
  return (
    <>
      {Hero()}
      {TopBar()}
      <div className="heroExtender"></div>
      <div className="list">{List}</div>
    </>
  )
}

export default HomePage
