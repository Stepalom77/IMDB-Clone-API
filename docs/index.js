const basicInfo = require('./basicInfo');
const components = require('./components');
const tags = require('./tags');
const users = require('./users');

module.exports = {
    ...basicInfo,
    ...components,
    ...tags,
    ...users
};