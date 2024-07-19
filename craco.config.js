const CracoAlias = require('craco-alias')

module.exports = {
  Plugins: [
    {
      plugin: CracoAlias,
      options: {
        source: 'tsconfig',
        tsConfigpath: 'tsconfig.paths.json',
      },
    },
  ],
}
