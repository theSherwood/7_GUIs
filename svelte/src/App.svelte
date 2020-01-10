<script>
	import Counter from './tasks/counter.svelte'
	import TempConverter from './tasks/tempConverter.svelte'
	import FlightBooker from './tasks/flightBooker.svelte'
	import Timer from './tasks/timer.svelte'
	import Crud from './tasks/crud.svelte'
	import CircDrawer from './tasks/circDrawer.svelte'
	import Cells from './tasks/cells/cells.svelte'
</script>

<main>
	<a href="../../index.html">Home</a>

	<!-- <Counter />
	<TempConverter />
	<FlightBooker />
	<Timer />
	<Crud />
	<CircDrawer /> -->
	<Cells />
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
	}
</style>