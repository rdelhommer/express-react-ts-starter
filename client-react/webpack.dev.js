const merge = require('webpack-merge')
const WebpackShellPlugin = require('webpack-shell-plugin')
const common = require('./webpack.common.js')

module.exports = merge(common.config, {
  mode: 'development',
  devtool: 'eval-source-map',
  plugins: [
    new WebpackShellPlugin({
      onBuildExit: common.shellPluginOnBuildExitClean
        .concat([
          'echo "Copy index file to dist..."',
          'mkdir -p ./dist',
          'cp ./index-dev.html ./dist/index.html',
        ])
        .concat(common.shellPluginOnBuildExitCommon)
    })
  ]
})