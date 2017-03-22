const loaderUtils = require('loader-utils');
const parser = require('tumblr-theme-parser');

module.exports = function(content) {
  const query = loaderUtils.getOptions(this) || {};
  const data = query.data || {};

  const contentBuffer = content.toString();
  const compiledContent = parser.compile(contentBuffer, data);

  return 'module.exports = ' + JSON.stringify(compiledContent);
};
