module.exports = {
  webpack: {
    configure: (webpackConfig, { env, paths }) => {
      // Verificar si modo desarrollo
      if (env === 'development') {
        // Deshabilitar la minimización de los activos
        webpackConfig.optimization.minimize = false;
        // Habilitar la concatenación de los activos
        webpackConfig.optimization.concatenateModules = true;
      }
      return webpackConfig;
    },
  },
};
