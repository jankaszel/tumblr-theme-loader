const {parser} = require('tumblr-theme-parser');

module.exports = content => {
  const {data} = this.query;
  const compiledContent = parser.compile(content, data);

  return 'module.exports = ' + JSON.stringify(compiledContent);
};
