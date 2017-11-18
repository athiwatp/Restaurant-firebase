<template>
	<v-container>
		<v-flex xs12 sm6 offset-sm3>
			<br>
				<h3 class="primary--text text-xs-center">Bills</h3>
				<v-card>
					<v-card-title>
						<div>
							<p>Date: {{ latestTransaction.date }}</p>
							<p>Time: {{ latestTransaction.time }}</p>
							<p>Total: {{ latestTransaction.totalPrice }} Baht</p>
							<p>Use Coupon: {{ latestTransaction.discount }}</p>
						</div>
					</v-card-title>
					<v-layout row wrap>
						<div class="ma-3" v-for="(item, key) in latestTransaction">
							<div v-if="key !== 'date' && key !== 'time' && key !== 'discount' && key !== 'totalPrice'">
								<v-card color="blue base" class="white--text" >
									<v-container>
										<v-layout xs7>
											<div>
												<div class="headline">{{key}}</div>
												<div>{{ item.description }}</div>
												<div>Quantity: {{ item.quantity}}</div>
											</div>
										</v-layout>
										<v-flex xs5>
											<v-card-media
											  :src="item.imgSrc"
											  height="100px"
											  contain
											></v-card-media>
											<div>{{ item.price }}</div>
										 </v-flex>
									</v-container>
								</v-card>
							</div>
						</div>
					</v-layout>
				</v-card>
		</v-flex>
	</v-container>
</template>


<script>
	import { ref, auth } from '../config/firebase'

	export default{
		data(){
			return{
				uid: '',
				snap: [],
				pushKey: ''
			}
		},
		created(){
			var vm = this;
			auth.onAuthStateChanged(function(user) {
				if (user) {
					ref.child('Transactions').child(user.uid).on('child_added', snapshot => {
						var snap = snapshot.val()
						vm.snap.push(snap)
						console.log(snap)
					})


				}
			})
		},
		computed: {
			latestTransaction(){
				return this.snap[this.snap.length-1]
			}
		}
	}
</script>


<style>

</style>
