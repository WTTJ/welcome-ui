const path = require('path')
exports.onCreateWebpackConfig = args => {
  args.actions.setWebpackConfig({
    resolve: {
      alias: {
        // Note the '..' in the path because the docz gatsby project lives in the .docz directory
        'styled-components': path.resolve(__dirname, '../node_modules/styled-components'),
        'react-final-form': path.resolve(__dirname, '../node_modules/react-final-form')
      }
    }
  })
}
