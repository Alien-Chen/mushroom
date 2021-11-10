// vue.config.js
module.exports = {
  css: {
    loaderOptions: {
      scss: {
        prependData: `
          @import "@/styles/settings/var.scss";
          @import "@/styles/tools/_sassMagic.scss";
        `
      },
      postcss: {
				plugins: [
					require('postcss-plugin-px2rem')({
						rootValue: 37.5,
						exclude: /(node_module)/,
						minPixelValue: 3
					})
				]
			}
    }
  },
}