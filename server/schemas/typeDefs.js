const typeDefs = `
type User {
    username: String
    email: String!
    password: String!
}
type Post {
  _id: ID!
  content: String!
  author: String!
  Date: String!
}

type Job {
  _id: ID!
  title: String!
  description: String!
  start_date: String!
  end_date: String!
  location: String!
}

type Project {
  _id: ID!
  title: String!
  description: String!
  teamMembers: String!
  date: String
}

type Auth {
  token: ID
  user: User
}
type Category {
  _id: ID
  name: String
  # Add other fields as needed
}
type Query {
  categories: [Category]
  products(category: ID, name: String): [ID]
  product(_id: ID!): ID
  user: User
  job(id: ID!): Job
    jobs: [Job]
  Post(id: ID!): Post
  Project(id: ID!): Project
    projects: [Project]
}
type Mutation {
  addUser(username: String!, password: String!, email: String!): Auth
  addJob(title: String!, start_date: String!, end_date: String!, location: String!): Job
  updateUser(username: String, password: String): User
  login(username: String!, password: String!): Auth
}`


module.exports = typeDefs;