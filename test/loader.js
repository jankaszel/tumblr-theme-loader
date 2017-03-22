/* eslint-env mocha */
const loader = require('../lib');
const blogFixture = require('./fixtures/blog.json');

const assert = require('assert');
const fs = require('fs');

const blogTemplate = fs.readFileSync(`${__dirname}/fixtures/blog.html`);

const query = {
  data: blogFixture
};

describe('loader', () => {
  it('should parse the fixture', () => {
    Object.assign(loader, {query});

    const ret = loader.call(
      {
        query
      },
      blogTemplate
    );

    assert.fail('huehuehue');
  });
});
