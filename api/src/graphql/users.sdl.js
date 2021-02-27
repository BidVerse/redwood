export const schema = gql`
  type User {
    id: String!
    email: String!
    password: String!
    name: String
    bio: String
    profileImgUrl: String
    role: Role!
    offers: [Offer]!
    jobs: [Job]!
  }

  enum Role {
    Bidder
    Contractor
  }

  type Query {
    users: [User!]!
  }

  input CreateUserInput {
    email: String!
    password: String!
    name: String
    bio: String
    profileImgUrl: String
    role: Role!
  }

  input UpdateUserInput {
    email: String
    password: String
    name: String
    bio: String
    profileImgUrl: String
    role: Role
  }
`
