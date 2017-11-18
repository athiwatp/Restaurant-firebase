<template>
	<v-container>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<br>
				<h4 class="primary--text">Reserve The Table</h4>
			</v-flex>
		</v-layout>
		<v-layout row>
			<v-flex xs12 sm6 offset-sm3>
				<div>
					<br>
					<h6>Name: {{ firstName }} {{ lastName }}</h6>
				</div>
				<v-select
					:items="branches"
				  	v-model="branch"
				 	ref="branch"
					label="Branch"
					required>
				</v-select>
				<v-text-field
					name="table"
					v-model="seats"
					label="Number of seats"
					type="number"
					required>
				</v-text-field>
			</v-flex>
		</v-layout>
		<br>
		<v-layout row wrap>
			<v-flex xs12 sm6 offset-sm3>
				<v-date-picker
					v-model="date"

					landscape
				 ></v-date-picker>
			</v-flex>
		</v-layout>
		<h4>{{ date }}</h4>
		<br>
		<v-layout row wrap>
			<v-flex xs12 sm6 offset-sm3>
				<v-time-picker
					v-model="time"
					landscape
				></v-time-picker>
			</v-flex>
		 </v-layout>
		 <h4>{{ time }}</h4>
		 <v-layout row>
		 	<v-flex xs12 sm6 offset-sm3>
		 		<v-btn block primary light class="white--text"  @click.native.prevent="submitReserve">Submit</v-btn>
		 	</v-flex>
		 </v-layout>

	</v-container>
</template>

<script>
	import { ref, auth } from '../config/firebase'

	export default{
		data(){
			return{
				date: null,
				time: null,
				branches: [],
				branch: '',
				firstName: '',
				lastName: '',
				uid: '',
				seats: 0,
				type: 4,
				phone: ''
			}
		},
		created(){
			var self = this;

			auth.onAuthStateChanged(function(user) {
				if (user) {
					self.uid = user.uid;
					console.log(user.uid)
					var vm = self;
					ref.child('users').child(user.uid).once('value', snapshot => {
						var snap = snapshot.val()
						console.log(snap)
						vm.firstName = snap["firstName"]
						vm.lastName = snap["lastName"]
						vm.phone = snap["phone"]
					})
				} else {
					self.$router.push({
						name: 'Register'
					});
				}
			});

			ref.child('branches').once('value', snapshot =>{
				var snap = snapshot.val();
				var key = Object.keys(snap);
				console.log(key)
				self.branches = key;
			})
		},
		methods: {
			submitReserve(){
				var self = this;

				ref.child('Tables').child('4').orderByChild('status').equalTo(true).once('value', snapshot => {
					var vm = self;
					var snap = snapshot.val()
					console.log(snap)
					if(snap !== null){
						ref.child('Reserves').child(this.uid).push({
						date: vm.date,
						time: vm.time,
						branch: vm.branch,
						seats: vm.seats,
						firstName: vm.firstName,
						lastName: vm.lastName,
						phone: vm.phone
						})
						alert('Successfully submitted Reserved')
					}else{
						alert('No seats available')
					}
				})
			}
		},
		computed:{

		}
	}
</script>


<style>

</style>
