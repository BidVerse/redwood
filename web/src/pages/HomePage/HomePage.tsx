// @ts-ignore
import { Link, routes } from '@redwoodjs/router'

import Hero from '../../components/Hero'
import TopBar from '../../components/TopBar'
import List from '../../components/List'

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
