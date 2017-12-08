<template>
	<v-container>
		<v-layout row wrap>
			<v-flex class="text-xs-center">
				<br>
				<h4 class="primary--text">Reserve The Table</h4>
			</v-flex>
		</v-layout>
		<div v-if="user">
			<v-layout row wrap>
				<v-flex xs12 sm6 offset-sm3>
					<div>
						<br>
						<h6>Name: {{ firstName }} {{ lastName }}</h6>
					</div>
					<v-select :items="branches" v-model="branch" ref="branch" label="Branch" required>
					</v-select>
					<v-text-field name="table" v-model="seats" label="Number of seats" type="number" required>
					</v-text-field>
				</v-flex>
			</v-layout>
			<br>
			<v-layout row wrap>
				<v-flex xs12 sm6 offset-sm3>
					<v-date-picker class="hidden-sm-and-down" v-model="date" landscape></v-date-picker>
				</v-flex>
				<v-flex xs12 sm6 offset-xs2 offset-sm3 offset-md3>
					<v-date-picker class="hidden-md-and-up" v-model="date"></v-date-picker>
				</v-flex>
			</v-layout>
			<h4>{{ date }}</h4>
			<br>
			<v-layout row wrap>
				<v-flex xs12 sm6 offset-sm3>
					<v-time-picker class="hidden-sm-and-down" v-model="time" landscape></v-time-picker>
				</v-flex>
				<v-flex xs12 sm6 offset-xs2 offset-sm3 offset-md3>
					<v-time-picker class="hidden-md-and-up" v-model="time"></v-time-picker>
				</v-flex>
			</v-layout>
			<h4>{{ time }}</h4>
			<v-layout row>
				<v-flex xs12 sm6 offset-sm3>
					<v-btn block primary light class="white--text" @click.native.prevent="submitReserve">Submit</v-btn>
				</v-flex>
			</v-layout>
		</div>
		<div v-else>
			<v-layout>
				<v-layout row wrap align-center>
					<v-flex class="text-xs-center">
						<h3>No data</h3>
					</v-flex>
				</v-layout>
			</v-layout>
		</div>
	
	</v-container>
</template>

<script>
	import {
		ref,
		auth
	} from '../config/firebase'
	import Rating from 'vue-bulma-rating'
	
	export default {
		data() {
			return {
				date: null,
				time: null,
				branches: [],
				branch: '',
				firstName: '',
				lastName: '',
				uid: '',
				seats: 0,
				type: 4,
				phone: '',
				exist: false
			}
		},
		created() {
			var vm = this;
	
			// auth.onAuthStateChanged(function(user) {
			// 	if (user) {
			// 		self.uid = user.uid;
			// 		console.log(user.uid)
			// 		var vm = self;
			// 		ref.child('users').child(user.uid).once('value', snapshot => {
			// 			var snap = snapshot.val()
			// 			console.log(snap)
			// 			vm.firstName = snap["firstName"]
			// 			vm.lastName = snap["lastName"]
			// 			vm.phone = snap["phone"]
			// 			vm.exist = true
			// 		})
			// 	} else {
			// 		// alert('Please sign in')
			// 		self.$router.push({
			// 			name: 'SignIn'
			// 		});
			// 	}
			// });
			if (this.user !== null) {
				ref.child('users').child(this.user).once('value', snapshot => {
					var snap = snapshot.val()
					vm.firstName = snap["firstName"]
					vm.lastName = snap["lastName"]
					vm.phone = snap["phone"]
				})
	
				ref.child('branches').once('value', snapshot => {
					var snap = snapshot.val();
					var key = Object.keys(snap);
					console.log(key)
					vm.branches = key;
				})
			}
		},
		methods: {
			submitReserve() {
				var vm = this;
	
				ref.child('Reserves').child(this.user).push({
					date: vm.date,
					time: vm.time,
					branch: vm.branch,
					seats: vm.seats,
					firstName: vm.firstName,
					lastName: vm.lastName,
					phone: vm.phone
				}).then(() => {
					alert('Successfully submitted Reserved')
				})
	
			}
		},
		computed: {
			user() {
				return this.$store.getters.user
			}
		},
		computed:{

		}
	}
</script>


<style>
	
</style>
