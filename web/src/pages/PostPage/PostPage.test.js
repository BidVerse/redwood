import { render } from '@redwoodjs/testing'

import PostPage from './PostPage.tsx'

describe('PostPage', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<PostPage />)
    }).not.toThrow()
  })
})
