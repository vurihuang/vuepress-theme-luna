<template>
  <div class="articles-wrapper">
		<Articles :articles="articles"/>
	</div>
</template>

<script>
import Articles from './Articles.vue'

export default {
	props: {
		articles: { type: Array, default: () => [] }
	},

	components: { Articles }
}
</script>

<style lang="stylus">
@import './styles/config.styl'

.articles-wrapper
	padding-top $navbarHeight
	width 60%
	margin 0 auto

@media ( max-width: ($MQMobile) )
	.articles-wrapper
		width 100%
		text-align center
</style>