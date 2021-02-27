// @ts-ignore
import { Link, routes } from '@redwoodjs/router'

type Data = {
  name: string
  seller: {
    name: string
    id: string
  }
}

const Post = (data) => (
  <>
    <div className="listing">{data}</div>
  </>
)

const List = [1, 2, 3, 4].map((item) => Post(item))

const HomePage = () => {
  return <>{List}</>
}

export default HomePage
