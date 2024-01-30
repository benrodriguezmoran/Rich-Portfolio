const { User, Post, Project, Job} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('KEY');
const resolvers = {
    Query: {

      job: async (parent, { id }, context) => {
          try {
            // Fetch a single job by ID
            const job = await Job.findById(id);
            return job;
          } catch (error) {
            console.error(error);
            throw new Error('Error fetching job');
          }
      },
      jobs: async (parent, args, context) => {
          try {
            // Fetch all jobs
            const jobs = await Job.find();
            return jobs;
          } catch (error) {
            console.error(error);
            throw new Error('Error fetching jobs');
          }

      },
  
      Post: async (parent, args, context) => {
          const user = await User.findById(context.user.id).populate({
            path: 'Post',
            populate: 'Post.find',
          });
          return user;

      },

      Project: async (parent, args, context) => {
          const user = await User.findById(context.user.id).populate({
            path: 'Project',
            populate: 'Project.find',
          });
          return user;

      },
      
      user: async (parent, args, context) => {
              //I'm not sure what we should replace a lot of this stuff with since we don't have orders or products
            const user = await User.findById(context.user.id).populate({
              path: 'User',
              populate: 'User.find',
            });
            return user;
      },
      user: async (parent, { id }, context) => {
        //I'm not sure what we should replace a lot of this stuff with since we don't have orders or products
      const user = await User.findById(context.user.id).populate({
        path: 'User',
        populate: 'User.find',
      });
      return user;
},
    },
    Mutation: {
        addUser: async (parent, args) => {
            const user = await User.create(args);
            const token = signToken(user);
      
            return { token, user };
          },
          addJob: async (parent, args) => {
            const title = await Job.create(args);
            const start_date = signToken(user);
            const end_date = signToken(user);
            const location = signToken(user)
            return { title, start_date, end_date, location };
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