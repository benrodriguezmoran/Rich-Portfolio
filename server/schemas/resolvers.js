const { User, Post, Project, Job} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('KEY');
//add query for project post and job
const resolvers = {
    Query: {
        user: async (parent, { userID }) => {
            User.find();
          },
        
    },

    
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
        login: async (parent, { username, password }) => {
            const user = await User.findOne({ username });
      
            if (!user) {
              throw AuthenticationError;
            }
      
            const correctPw = await user.isCorrectPassword(password);
      
            if (!correctPw) {
              throw AuthenticationError;
            }
      
            const token = signToken(user);
      
            return { token, user };
          },
        },
      };

module.exports = resolvers;