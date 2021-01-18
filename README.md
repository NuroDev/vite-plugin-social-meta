# 📱 vite-plugin-social-meta

Dynamically generate meta tags for social networks

Inspired by [Aleksey Pleshkov's](https://github.com/AlekseyPleshkov/) [Nuxt module](https://github.com/AlekseyPleshkov/nuxt-social-meta)

[![License](https://img.shields.io/badge/-MIT-f56565.svg?longCache=true&style=for-the-badge)](https://github.com/nurodev/vite-plugin-social-meta/blob/main/LICENSE)
[![Vite](https://img.shields.io/badge/-vite%202.x-3eaf7c.svg?longCache=true&style=for-the-badge)](https://vitejs.dev)
[![Version](https://img.shields.io/npm/v/vite-plugin-social-meta?label=%20&style=for-the-badge)](https://www.npmjs.com/package/vite-plugin-social-meta)
[![Downloads](https://img.shields.io/npm/dm/vite-plugin-social-meta?label=%20&logo=Docusign&logoColor=white&style=for-the-badge)](https://www.npmjs.com/package/vite-plugin-social-meta)

## 🦄 Usage

Install the dependency
```bash
npm install --save-dev vite-plugin-social-meta # yarn add -D vite-plugin-social-meta
```

Add it to your Vite config
```typescript
// vite.config.js
import { ViteSocialMeta } from 'vite-plugin-social-meta';

export default {
	plugins: [
		ViteSocialMeta(),
	]
}
```

## 🔧 Configuration

```typescript
export default {
	plugins: [
		ViteSocialMeta({
			description: 'Site description',
			img: 'Link to image in static folder',
			locale: 'en_US',
			site_name: 'Site name',
			themeColor: '#theme-color',
			title: 'Title',
			twitter_card: 'summary_large_image',
			twitter: '@user',
			url: 'Site url',
		}),
	]
}
```

## ⚠️ Requirements

Currently this plugin only supports Vite 2.x
