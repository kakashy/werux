<script context="module">
	/**
	 * @returns {object}
	 * @param status
	 */
	export function load({ status }) {
		return {
			props: { status }
		};
	}
</script>

<script>
	export let status;
</script>

<svelte:head>
	<title>{status} / Werux</title>
</svelte:head>

<section>
	<div class="stat">Error {status}</div>

	<div>
		{#if status === 404}
			<p>This page doesn't exist. Sorry.</p>
		{:else if status === 500}
			<p>😪This one is on us. Try reloading this page or try another time.</p>
		{:else}
			<p>😬This shouldn't happen. <a sveltekit:prefetch href="/">Go back home?</a></p>
		{/if}
	</div>
</section>

<style>
	section {
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-items: center;
		margin: 10px auto;
		padding: 10px;
	}
	.stat {
		color: #13ff13;
		background-color: black;
		font-size: 2rem;
		padding: 10px;
		border-radius: 4px;
		font-weight: bolder;
	}
</style>
