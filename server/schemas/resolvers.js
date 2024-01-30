const { User, Post, Project, Job} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('KEY');
//QueryAll every Job that's stored //mutation addJobs
const resolvers = {
    Query: {
      job: async (parent, { id }, context) => {
        if (context.user) {
          try {
            // Fetch a single job by ID
            const job = await Job.findById(id);
            return job;
          } catch (error) {
            console.error(error);
            throw new Error('Error fetching job');
          }
        }
  
        throw new AuthenticationError('Unauthorized');
      },
      jobs: async (parent, args, context) => {
        if (context.user) {
          try {
            // Fetch all jobs
            const jobs = await Job.find();
            return jobs;
          } catch (error) {
            console.error(error);
            throw new Error('Error fetching jobs');
          }
        }
  
        throw new AuthenticationError('Unauthorized');
      },
  

      Post: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user.id).populate({
            path: 'Post',
            populate: 'Post.find',
          });
          return user;
        }
  
        throw AuthenticationError;
      },

      Project: async (parent, args, context) => {
        if (context.user) {
          const user = await User.findById(context.user.id).populate({
            path: 'Project',
            populate: 'Project.find',
          });
          return user;
        }
  
        throw AuthenticationError;
      },
      
        user: async (parent, args, context) => {
            if (context.user) {
                //I'm not sure what we should replace a lot of this stuff with since we don't have orders or products
              const user = await User.findById(context.user.id).populate({
                path: 'User',
                populate: 'User.find',
              });
              return user;
            }
            throw AuthenticationError;
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