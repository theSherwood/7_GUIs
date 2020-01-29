<script>
	import Counter from './tasks/counter.svelte'
	import TemperatureConverter from './tasks/TemperatureConverter.svelte'
	import FlightBooker from './tasks/flightBooker.svelte'
	import Timer from './tasks/timer.svelte'
	import Crud from './tasks/crud.svelte'
	import CircleDrawer from './tasks/circleDrawer.svelte'
	import Cells from './tasks/cells/cells.svelte'
</script>

<main>
	<a href="../../index.html">Home</a>

	<Counter />
	<TemperatureConverter />
	<FlightBooker />
	<Timer />
	<Crud />
	<CircleDrawer />
	<Cells />
</main>

<style>
	main {
		max-width: 800px;
		margin: auto;
	}
</style>