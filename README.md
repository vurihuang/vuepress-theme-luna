# VuePress Theme Luna

A simple blog theme for [VuePress](https://github.com/vuejs/vuepress).

# Theme Configuration

Here is some options for this theme configuration.

```
module.exports = {
  title: `This is title`,
  description: 'This is description',
  base: '/',
  configureWebpack: {
		resolve: {
	  	alias: {
			'@alias': './public'
		  }
		}
  },
  markdown: {
		anchor: { permalink: false },
		toc: { includeLevel: [1, 2, 3] },
		lineNumbers: true
  },
  themeConfig: {
		nav: [
			{ text: 'Home', link: '/' },
		]
  },
	evergreen: true
};
```


    




