<template>
	<v-container>
		<v-flex xs12 sm6 offset-sm3>
			<br>
			<h4 class="primary--text text-xs-center">Reserve List</h4>
	
			<div v-if="exist">
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
			</div>
			<div v-else>
				<v-layout row wrap align-center>
					<v-flex class="text-xs-center">
						<v-icon large color="blue darken-2">error outline</v-icon>
						<h4>No reservation</h4>
					</v-flex>
				</v-layout>
			</div>
		</v-flex>
	</v-container>
</template>


<script>
	import {
		ref,
		auth
	} from '../config/firebase'
	
	export default {
		data() {
			return {
				uid: '',
				reserveList: [],
				exist: false
			}
		},
		computed: {
			user() {
				return this.$store.getters.user
			}
		},
		created() {
			var vm = this;
			// auth.onAuthStateChanged(function(user) {
			// 	if (user) {
			// 		vm.uid = user.uid
			// 		ref.child('Reserves').child(user.uid).on('value', snapshot => {
			// 			if (snapshot.exists()) {
			// 				vm.reserveList = snapshot.val()
			// 				vm.exist = true
			// 			} else {
			// 				vm.exist = false
			// 			}
			// 		})
			// 	}
			// })
			console.log('user: ' + this.user)
			if (this.user !== null) {
				ref.child('Reserves').child(this.user).on('value', snapshot => {
					if (snapshot.exists()) {
						var snap = snapshot.val()
						vm.reserveList = snap;
						vm.exist = true
					} else {
						vm.exist = false
					}
				})
				console.log(this.reserveList)
			}else{
				vm.exist = false
			}
		},
		methods: {
			cancelReserve(key) {
				ref.child('Reserves').child(this.user).child(key).remove()
			}
		}
	}
</script>


<style>
	
</style>
