const Category = require('../../models/category.model');
const mongoose = require('mongoose');

module.exports = {
  Query: {
    category: (root, args) => {
      return Category.findOne(args)
    },
    categories: () => {
      return Category.find({})
    }
  },
  Mutation: {
    addCategory: (root, { name }) => {
      const newCategory = new Category({ 
        _id:  mongoose.Types.ObjectId(),
        name: name
      });

      return newCategory.save();
    },

    editCategory: (root, { _id, name }) => {
      return Category.findOneAndUpdate({ _id }, { $set: { name, } });
    },
    deleteCategory: (root, args) => {
      return Category.findOneAndRemove(args)
    }
  }
} 