<script>
	// import Header from '$lib/Header/index.svelte';
	import '../styles/tailwind-output.css';
</script>

<main
	class="bg-red-900 h-screen w-screen flex flex-col items-center from-yellow-400 bg-gradient-to-br to-red-700"
>
	<slot />
	<footer class="bottom-0 fixed m-2 opacity-70">&copy; 2021</footer>
</main>

<style windi:preflights:global windi:safelist:global>
</style>
