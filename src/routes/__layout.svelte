<script>
	// import Header from '$lib/Header/index.svelte';
	import '../styles/tailwind-output.css';
</script>

<main
	class="bg-red-900 h-screen w-screen flex flex-col justify-center items-center from-yellow-400 bg-gradient-to-br to-red-700"
>
<header class="flex flex-row justify-between space-x-4 bg-transparent shadow-lg text-indigo-700 py-6 px-6 fixed top-0 w-screen md:space-x-4">
    <!-- svelte-ignore a11y-invalid-attribute -->
	<a href="#">
	  <span class="sr-only">Werux</span>
	  <img src="/k_fav.png" alt="Themes.dev Logo" title="Werux" class="max-h-7">
	</a>
	<nav class="flex flex-row space-x-6 md:flex-row md:space-x-6 ">
	  <a href="/" class="hover:underline hover:text-indigo-500">Home</a>
	  <a href="/portfolio" class="hover:underline hover:text-indigo-500">Portfolio</a>
	</nav>
  </header>
	<slot />
	<footer class="bottom-0 fixed m-2 opacity-70">&copy; 2021</footer>
</main>

<style windi:preflights:global windi:safelist:global>
</style>
