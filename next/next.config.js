// module.exports = withPlugins(
//   [
//     [
//       withCSS,
//       {
//         cssLoaderOptions: {
//           localIdentName: '[name]_[local]_[hash:6]',
//         },
//         cssModules: true,
//       },
//     ],
//   ],
//   nextConfig
// );


const nextEnv = require('next-env');
const dotenvLoad = require('dotenv-load');

dotenvLoad();

const withNextEnv = nextEnv();

module.exports = withNextEnv({
    // Your Next.js config.
});

const withImages = require('next-images')
module.exports = withImages()