<template>
	<v-container>
		<table id="cart" class="table table-hover table-condensed">
			<thead>
				<tr>
					<th style="width:65%">Product</th>
					<th style="width:10%">Price</th>
					<th style="width:10%">
						<span class="hidden-sm-and-down">Quantity</span>
						<span class="hidden-md-and-up">Quan.</span>
					</th>
					<th style="width:10%">
						<span class="hidden-sm-and-down">Subtotal</span>
						<span class="hidden-md-and-up">Sub.</span>
					</th>
					<th style="width:5%"></th>
				</tr>
			</thead>
			<div v-for="(item, key) in list" tag="tbody">
				<v-layout row >
					<app-cart-item :item="item" :eachKey="key" :uid="uid"></app-cart-item>
				</v-layout>
			</div>


			<v-layout row wrap>
				<v-flex xs6 offset-sm6>
					<v-text-field
						v-model="discount"
						name="discount"
						label="Coupon"
						type="text"
					></v-text-field>
				</v-flex>
				<v-flex xs6 offset-sm6>
						<p>Total: {{ totalPrice }}</p>
				</v-flex>

				<v-flex v-if="isDiscount" xs6 offset-sm6>
					<v-chip label outline color="green" >
						<v-icon left>monetization_on</v-icon>
						Discount: {{ discountValue }}
					</v-chip>
				</v-flex>

				<v-btn @click.prevent="submitCart">Submit</v-btn>
			</v-layout>

		</table>
	</v-container>
</template>

<script>
	import { ref, auth } from '../config/firebase'
	import CartItem from './CartItem.vue'

	export default {
		data(){
			return{
				uid: '',
				list: [],
				discount: '',
				coupon: [],
				isDiscount: false,
				isMember: false
			}
		},
		components: {
			appCartItem: CartItem
		},
		created(){
			var self = this;
			auth.onAuthStateChanged(function(user) {
				if (user) {
					var vm = self;
					self.uid = user.uid

					ref.child('users').child(user.uid).on('value', snapshot => {
						var snap = snapshot.val()
						vm.isMember = snap.isMember
					})

					ref.child('Carts').child(user.uid).on('value', snapshot => {
						vm.list = snapshot.val()
					})
				}else{
					alert('Please Sign in')
					self.$router.push({
						name: 'SignIn'
					})
				}
			})

			ref.child('Discounts').once('value', snapshot => {
				var snap = snapshot.val()
				self.coupon = snap
			})
		},
		computed: {

			totalPrice(){
				let total = 0
				for(var key in this.list){
					total = parseFloat(this.list[key].price) * this.list[key].quantity + total
				}

				for(var key in this.coupon){
					if(this.discount === key ){
						total = total - this.coupon[key].discount
						this.isDiscount = true
					}else{
						this.isDiscount = false
					}
				}

				if(total < 0){
					total = 0
				}

				return total
			},
			discountValue(){
				var discount = 0
				for(var key in this.coupon){
					discount = this.coupon[key].discount
					console.log(discount)
				}
				return discount
			}
		},
		methods: {
			deleteItem(key){
				ref.child('Carts').child(this.uid).child(key).remove()
			},
			submitCart(){
				if(this.isMember){

					ref.child('Carts').child(this.uid).once('value', snap => {
						var newKey = ref.child('Transactions').child(this.uid).push().key
	//					var updates = {}
	//					updates['/Transactions/' + this.uid + newKey] = snap.val()
						ref.child('Transactions').child(this.uid).child(newKey).set(snap.val(), error => {
							if(!error){
								var date = new Date()
								ref.child('Transactions').child(this.uid).child(newKey).update({date: date.toLocaleDateString(), time: date.toLocaleTimeString(), totalPrice: this.totalPrice, discount: this.isDiscount})
								ref.child('Carts').child(this.uid).remove()
							}else{
								alert(error)
							}
						})
					})
					ref.child('users').child(this.uid).update({
						isOrdered: true
					})
				}else{
					alert('You must be a member, in order to make an order')
				}
			}
		}
	}


//					ref.child('Transactions').child(this.uid).push(snap.val(), error => {
//						if(!error) {
//							var date = new Date()
//							ref.child('Transactions').child(this.uid).update({date: date.toLocaleDateString(), time: date.toLocaleTimeString(), totalPrice: this.totalPrice, discount: this.isDiscount})
//							ref.child('Carts').child(this.uid).remove()
//						}else {
//							alert(error)
//						}
//					})

</script>

<style>

</style>
