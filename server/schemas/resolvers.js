const { User, Post, Project, Job} = require('../models');
const { signToken, AuthenticationError } = require('../utils/auth');
// const stripe = require('stripe')('KEY');

const resolvers = {
    Query: {

    },
    Mutation: {

    }
};
module.exports = resolvers;