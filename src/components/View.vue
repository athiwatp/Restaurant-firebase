<template>
	<v-container fluid>
		<br>
		<h3>JSON STRUCTURE INSIDE FIREBASE</h3>
		<hr>
		<br>
  		<pre>{{ database }}</pre>
		
	</v-container>
	
</template>


<script>
	import firebase, {
		ref
	} from '../config/firebase'

	export default {
		data() {
			return {
				database: ''
			}
		},
		created() {
			var vm = this;
			ref.on('value', snap => {
				vm.database = snap.val()
			})
		}
	}

</script>


<style>


</style>
