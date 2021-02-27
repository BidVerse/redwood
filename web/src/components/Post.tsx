import type { Post } from '../types'
import ProfileSmall from './ProfileSmall'
import Graph from './Graph'

const PostComponent = (post: Post) => {
  function expandPost() {
    console.log('cool')
  }
  return (
    <>
      <div className="listing" onClick={expandPost}>
        <img src={post.image}></img>
        <div className="info">
          <h1>{post.name}</h1>
          <p>{post.description.substr(0, 150) + '...'}</p>
          {ProfileSmall(post.seller)}
          {/* {Graph()} */}
        </div>
      </div>
    </>
  )
}

export default PostComponent
