<template>
	<div class="article">
		<h2 class="article-title">
			<router-link :to="article.path">
				{{ page.title || article.title }}
			</router-link>
		</h2>
		<div class="article-date" v-if="page.date">
			{{ page.date | date }}
		</div>
		<div class="article-desc"
			v-if="article.excerpt || page.description">
			{{ article.excerpt || page.description }}
		</div>
	</div>
</template>

<script>
export default {
	props: {
		article: { type: Object, required: true }
	},

	computed: {
		page() { return this.article.frontmatter }
	}
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.article
	padding 1rem 0 2rem
	border-bottom 1px solid $borderColor

	&:last-child
		border-bottom none

	.article-title
		font-weight bolder
		
		a:hover
			border-bottom 2px solid $accentColor

	.article-date
		color #7f8c8d
		margin 1.2rem 0
		font-size 0.8rem
</style>