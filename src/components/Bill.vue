<template>
	<v-container fluid>
		<v-card style="overflow: hidden;">
      <v-navigation-drawer
        permanent
        absolute
        style="z-index: 1"
      >
        <v-list>
          <v-list-tile ripple v-for="i in snap.slice().reverse()" @click.prevent="listTransaction(i)">
						<v-list-tile-action>
                <v-icon left color="green">check_circle</v-icon>
              </v-list-tile-action>
            <v-list-tile-title>{{ i.date }}, {{ i.time }}</v-list-tile-title>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
			<v-container fluid>
				<v-layout row wrap>
					<v-flex xs12 sm6 offset-sm4 >
							<v-layout row wrap>
								<div v-if="clickedSnap.length !== 0">
									<v-card offset-sm3>
										<v-card-title>
											<div>
												<h3 class="primary--text">Bills</h3>
												<p>Date: {{ clickedSnap.date }}</p>
												<p>Time: {{ clickedSnap.time }}</p>
												<p>Total: {{ clickedSnap.totalPrice }} Baht</p>
												<p>Use Coupon: {{ clickedSnap.discount }}</p>
											</div>
										</v-card-title>

										<app-bill-item :item="clickedSnap" ></app-bill-item>
									</v-card>
								</div>
								<div v-else>
									<v-card>
										<v-card-title>
											<div>
												<h3 class="primary--text">Bills</h3>
												<p>Date: {{ latestTransaction.date }}</p>
												<p>Time: {{ latestTransaction.time }}</p>
												<p>Total: {{ latestTransaction.totalPrice }} Baht</p>
												<p>Use Coupon: {{ latestTransaction.discount }}</p>
											</div>
										</v-card-title>
										<app-bill-item :item="latestTransaction" ></app-bill-item>
									</v-card>
								</div>
							</v-layout>
						</v-flex>
					</v-layout>
				</v-container>
	  </v-card>
	</v-container>
</template>


<script>
	import { ref, auth } from '../config/firebase'
	import BillItem from './BillItem.vue'

	export default{
		data(){
			return{
				uid: '',
				snap: [],
				pushKey: '',
				clickedSnap: []
			}
		},
		components: {
			appBillItem: BillItem
		},
		created(){
			var vm = this;
			auth.onAuthStateChanged(function(user) {
				if (user) {
					ref.child('Transactions').child(user.uid).on('child_added', snapshot => {
						var snapValue = snapshot.val()
						vm.snap.push(snapValue)
					})
				}
			})

			console.log(this.clickedSnap)

		},
		computed: {
			latestTransaction(){
				return this.snap[this.snap.length-1]
			}
		},
		methods: {
			listTransaction(list){
				this.clickedSnap = list
			}
		}
	}
</script>


<style>

</style>
