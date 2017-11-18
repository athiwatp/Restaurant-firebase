<template>
	<v-container>
		<v-flex xs12 sm6 offset-sm3>
			<br>
			<h4 class="primary--text text-xs-center">Reserve List</h4>

			<div class="ma-3" v-for="(item, key) in reserveList">
				<v-card color="cyan darken-1" class="white--text">
					<v-container>
						<p>Name: {{ item.firstName }} {{ item.lastName}}</p>
						<p>Phone: {{ item.phone }}</p>
						<p>Date: {{ item.date }}</p>
						<p>Time: {{ item.time }}</p>
						<p>Branch: {{ item.branch }}</p>
						<p>Seats: {{ item.seats }}</p>
					</v-container>
					<div>
						<v-btn @click.prevent="cancelReserve(key)">Cancel</v-btn>
					</div>
				</v-card>
			</div>
		</v-flex>
	</v-container>
</template>


<script>
	import { ref, auth } from '../config/firebase'

	export default{
		data(){
			return{
				uid: '',
				reserveList: []
			}
		},
		created(){
			var vm = this;
			auth.onAuthStateChanged(function(user) {
				if (user) {
					vm.uid = user.uid
					ref.child('Reserves').child(user.uid).on('value', snapshot => {
						vm.reserveList = snapshot.val()
					})

				}
			})
			console.log
		},
		methods: {
			cancelReserve(key){
				ref.child('Reserves').child(this.uid).child(key).remove()
			}
		}
	}
</script>


<style>

</style>
