<script>
	import Counter from './tasks/counter.svelte'
	import TempConverter from './tasks/tempConverter.svelte'
	import FlightBooker from './tasks/flightBooker.svelte'
</script>

<main>
	<a href="../../index.html">Home</a>

	<Counter />
	<TempConverter />
	<FlightBooker />
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
	}
</style>