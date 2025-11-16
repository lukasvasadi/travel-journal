<script lang="ts">
	import * as config from '$lib/config'
</script>

<header>
	<nav>
		<a href="/">{config.title}</a>
	</nav>
</header>

<style>
		header {
        /*position: sticky;*/
        top: 0;
        height: fit-content;
				width: 100%;
				margin-bottom: 2rem;
				padding-inline: 1rem;
				background-color: var(--background-color);
        border-bottom: 2px solid var(--border-color);
		}

	nav {
		padding-block: 2rem;
		display: flex;
		flex-direction: row;
		align-items: center;
		justify-content: space-between;
	}

	a {
		color: inherit;
		text-decoration: none;
		font-size: 22px;
	}
</style>
