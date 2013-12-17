module.exports = {
  description: 'for interacting with the Github.com API',
  properties: {},
  methods: {
    activity: {
      description: 'gets event activity for a user or organization',
      input: {
        user: {type: 'string'},
        org: {type: 'string'},
      }
    },
  }
};
