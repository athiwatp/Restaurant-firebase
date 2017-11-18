<template>
	<v-container>
		<v-layout row >
			<v-flex xs4 offset-sm2>
				<img :src="item.imgSrc" alt="" height="150px">
			</v-flex>
			{{ item.name }}
			{{ item.price }}
			<v-flex xs3 offset-sm2>
				<v-text-field
					v-model="item.quantity"
					name="quantity"
					label="Quantity"
					type="number"
				></v-text-field>
			</v-flex>
			<v-flex xs3 offset-sm1>
				<p>Subtotal: {{ subTotal(item.quantity, item.price) }} baht</p>
			</v-flex>
			<v-flex xs2 offset-sm2>
				<v-btn @click="deleteItem(eachKey)">Delete</v-btn>
			</v-flex>
		</v-layout>
	</v-container>
</template>


<script>
	import { ref } from '../config/firebase'

	export default{
		props: ['item', 'eachKey', 'uid'],
		methods: {
			deleteItem(key){
				ref.child('Carts').child(this.uid).child(key).remove()
			},
			subTotal(quantity, price){
				return quantity * price
			}
		}
	}
</script>


<style>

</style>
