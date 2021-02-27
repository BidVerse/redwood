import ProfileSmall from './ProfileSmall'
import Graph from './Graph'

export type Post = {
  name: string
  image: string
  minimumBid: number
  description: string
  id: string
  seller: {
    name: string
    id: string
    image: string
  }
}

//@ts-ignore
import { Link, routes } from '@redwoodjs/router'

const PostComponent = (post: Post) => {
  function expandPost() {
    console.log('cool')
  }
  return (
    <>
      <Link to={routes.post({ id: post.id })}>
        <div className="listing" onClick={expandPost}>
          <img src={post.image}></img>
          <div className="info">
            <h1>{post.name}</h1>
            <p>{post.description.substr(0, 150) + '...'}</p>
            {ProfileSmall(post.seller)}
            {/* {Graph()} */}
          </div>
        </div>
      </Link>
    </>
  )
}

export default PostComponent
