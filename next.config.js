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

const withImages = require('next-images')
module.exports = withImages()