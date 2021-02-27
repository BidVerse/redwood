export const schema = gql`
  type Offer {
    id: String!
    fromId: String!
    from: User!
    jobId: String!
    onJob: Job!
    name: String
    description: String
    amount: Int!
    accepted: Boolean
    public: Boolean!
  }

  type Query {
    offers: [Offer!]!
  }

  input CreateOfferInput {
    fromId: String!
    jobId: String!
    name: String
    description: String
    amount: Int!
    accepted: Boolean
    public: Boolean!
  }

  input UpdateOfferInput {
    fromId: String
    jobId: String
    name: String
    description: String
    amount: Int
    accepted: Boolean
    public: Boolean
  }
`
