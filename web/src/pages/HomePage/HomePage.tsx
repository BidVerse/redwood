import { useQuery } from '@redwoodjs/web'

import Hero from '../../components/Hero'
import TopBar from '../../components/TopBar'
import List from '../../components/List'

const HomePage = () => {
  const get = gql`
    query getProjects {
      jobs {
        name
      }
    }
  `
  console.log(useQuery(get).data)

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
