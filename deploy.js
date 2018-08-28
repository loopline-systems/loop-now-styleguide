const ghpages = require('../node_modules/gh-pages');

ghpages.publish('styleguide', {
  repo: 'git@github.com:loopline-systems/loop-now-styleguide.git',
}, () => {
  console.log('published succefully');
});
