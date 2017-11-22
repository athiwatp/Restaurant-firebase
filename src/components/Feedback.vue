<template>
	<v-container>
		<v-flex xs12 sm12 >
			<v-card>
				<v-card-title>
					<h3 class="primary--text">Feedback</h3>
				</v-card-title>
				<v-card-text>
				 	<p>Name: {{ firstName }} {{ lastName }}</p>
					<v-select
						:items="branches"
					  	v-model="branch"
					 	ref="branch"
						label="Branch"
						required>
					</v-select>
					<v-text-field
						v-model="comment"
						name="comment"
						label="Comment"
						type="text"
						multi-line
					></v-text-field>
					<v-layout row wrap>
						<v-subheader>Food Quality:</v-subheader>
						<v-flex xs12>
							<br>
							<v-radio-group v-model="foodQuality" row>
								<v-radio label="Excellent" value="4"></v-radio>
								<v-radio label="Good" value="3"  color="success"></v-radio>
	          				 	<v-radio label="Fair" value="2"  color="warning"></v-radio>
								<v-radio label="Poor" value="1"  color="error"></v-radio>
	           				 </v-radio-group>
						</v-flex>
						<v-flex xs12>
							<div>
								<v-subheader>Service:</v-subheader>
								<v-flex xs12>
									<br>
									<v-radio-group v-model="service" row >
										<v-radio label="Excellent" value="4"></v-radio>
										<v-radio label="Good" value="3"  color="success"></v-radio>
			          				 	<v-radio label="Fair" value="2"  color="warning"></v-radio>
										<v-radio label="Poor" value="1"  color="error"></v-radio>
			           				</v-radio-group>
								</v-flex>
							</div>
						</v-flex>
					</v-layout>
					<rating :items="stars" class="starability-grow" legend="Star rating:" :value="value" @change="update"></rating>
				</v-card-text>
				</v-card-text>
			<v-btn block primary light @click.native.prevent="submitFeedback" class="white--text">Submit</v-btn>
		</v-card>
		</v-flex>
	</v-container>
</template>


<script>
	import { ref, auth } from '../config/firebase'
	import Rating from 'vue-bulma-rating'

	export default{
		data(){
			return{
				branches: [],
				branch: '',
				uid: '',
				comment: '',
				foodQuality: '',
				service: '',
				firstName: '',
				lastName: '',
				isOrdered: false,
				stars: [
	        {
	          title: '5 Stars',
	          value: 5
	        },
	        {
	          title: '4 Stars',
	          value: 4
	        },
	        {
	          title: '3 Stars',
	          value: 3
	        },
	        {
	          title: '2 Stars',
	          value: 2
	        },
	        {
	          title: '1 Star',
	          value: 1
	        }
      	],
				value: 1
			}
		},
		created(){
			var self = this;
			ref.child('branches').once('value', snapshot =>{
				var snap = snapshot.val();
				var key = Object.keys(snap);
				self.branches = key;
			})

			auth.onAuthStateChanged(function(user) {
				if (user) {
					self.uid = user.uid;

					var vm = self;
					ref.child('users').child(user.uid).once('value', snapshot => {
						var snap = snapshot.val()
						vm.firstName = snap["firstName"]
						vm.lastName = snap["lastName"]
						vm.isOrdered = snap.isOrdered
					})
				} else {
					vm.$router.push({
						name: 'Register'
					});
				}
			});
		},
		methods: {
			submitFeedback(){
				if(this.isOrdered){
					var vm = this;
					ref.child('Feedback').child(this.branch).child(this.uid).set({
						branch: vm.branch,
						comment: vm.comment,
						foodQuality: vm.foodQuality,
						service: vm.service
					})
					alert('Successfully submitted feedback')
					this.$router.push({ name: 'View' })
				}
				else{
					alert('No purchased found, cannot submit the feedback')
				}
			},
			update(val) {
				this.value = val
			}
		},
		components:{
			Rating
		}
	}
</script>


<style>

</style>
