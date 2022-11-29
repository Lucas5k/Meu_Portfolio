const client = require('./database');

const findProject = {
  find: async () => {
    const database = client.db('projects');
    const news = database.collection('news');

    const result = await news.find({}, { projection: { _id: 0 } }).toArray();
    return result;
  },
};

module.exports = findProject;
