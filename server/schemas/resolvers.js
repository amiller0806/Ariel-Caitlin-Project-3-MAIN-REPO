const {
    User
} = require("../models");
const {
    AuthenticationError
} = require("apollo-server-express");
const {
    signToken
} = require("../utils/auth");


const resolvers = {

    Query: {

        me: async (parent, args, context) => {
            if (context.user) {
                const user = await User.findOne({
                    _id: context.user._id
                }).select(
                    "-__v -password"
                );
                return user;
            }
            throw new AuthenticationError("User not logged in!");
        },

        products: async () => {
            return Product.find().sort();
        },

        productByCategory: async (parent, {
            category
        }) => {
            return Product.find({
                category
            });
        },

        user: async (parent, {
            username
        }) => {
            return User.findOne({
                    username
                })
                .select(' -__v -password')
                .populate('favProducts');
        }
    },

    Mutation: {

        addUser: async (parent, args) => {
            try {
                console.log(args);
                const user = await User.create(args);
                const token = signToken(user);
                return {
                    token,
                    user
                };
            } catch (error) {
                throw new AuthenticationError(error);
            }
        },

        login: async (parent, args) => {
            const user = await User.findOne({
                email: args.email
            });
            if (!user) {
                throw new AuthenticationError("Incorrect email!");
            }
            const correctPw = await user.isCorrectPassword(args.password);

            if (!correctPw) {
                throw new AuthenticationError("Incorrect credentials");
            }
            const token = signToken(user);
            console.log(user)
            return {
                token,
                user
            };

        },

        saveProduct: async (parent, {
            productData
        }, context) => {
            console.log('productData', productData)
            console.log(context.user)

            // check if the user is authenticated to be allowed to save products
            if (context.user) {

                // find product by its title
                const updatedUser = await User.findOneAndUpdate({
                    _id: context.user._id
                }, {
                    $push: {
                        favoriteProducts: productData
                    }
                }, {
                    new: true
                });
                console.log(updatedUser);
                return updatedUser;
            }

            throw new AuthenticationError('You need to be logged in to save products!')
        },

        removeProduct: async (parent, {
            productId
        }, context) => {
            if (context.user) {
                const updatedUser = await User.findOneAndUpdate({
                    _id: context.user._id
                }, {
                    $pull: {
                        savedProducts: {
                            productId
                        }
                    }
                }, {
                    new: true
                });
                return updatedUser;
            }
            throw new AuthenticationError("You need to be logged in!");
        },
    },
};

module.exports = resolvers;
