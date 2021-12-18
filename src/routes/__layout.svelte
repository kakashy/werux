<script>
	import '../app.css';
</script>

<main>
	<slot />
	<footer>&copy; 2021</footer>
</main>

<style>
main {
	min-height: 100vh;
}
	footer {
		position: fixed;
		bottom: 0;
		left: 0;
		width: 100%;
		padding: 10px;
	}
</style>