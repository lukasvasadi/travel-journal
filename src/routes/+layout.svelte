<script>
	import Header from './header.svelte'
	import Footer from './footer.svelte'
	let { children } = $props()
</script>

<div class="layout">
	<Header />

	<main>
		{@render children()}
	</main>

	<Footer />
</div>

<style>
	.layout {
		height: 100%;
		display: grid;
		grid-template-rows: auto 1fr auto;
		gap: 2rem;
	}
</style>
