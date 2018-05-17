<template>
	<div class="articles-list">
		<template v-for="article in articles">
			<Article :article="article" />
		</template>
	</div>
</template>

<script>
import Article from './Article.vue'

export default {
	components: { Article },

	props: {
		articles: { type: Array, default: () => [] }
	}
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.articles-list
	padding 0 2rem
</style>