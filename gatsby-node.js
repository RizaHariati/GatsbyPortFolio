// const data = require("./src/data/data1")

// console.log(data)
// exports.createPages = async ({ actions }) => {
//   const { createPage } = actions

//   result.data.allContentfulRecipe.nodes.forEach(recipes => {
//     recipes.content.tags.forEach(tag => {
//       createPage({
//         path: `/${tag}`,
//         component: require.resolve(`./src/templates/tag-template.js`),
//         context: {
//           tag: tag,
//         },
//       })
//     })
//   })
