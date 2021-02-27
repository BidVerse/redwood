export const schema = gql`
  type Job {
    id: String!
    fromId: String!
    from: User!
    name: String!
    description: String!
    photoUrl: String!
    minimumBid: Int!
    offers: [Offer]!
    active: Boolean!
  }

  type Query {
    jobs: [Job!]!
  }

  input CreateJobInput {
    fromId: String!
    name: String!
    description: String!
    photoUrl: String!
    minimumBid: Int!
    active: Boolean!
  }

  input UpdateJobInput {
    fromId: String
    name: String
    description: String
    photoUrl: String
    minimumBid: Int
    active: Boolean
  }
`
