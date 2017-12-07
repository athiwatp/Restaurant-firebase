<template>
	<v-container fluid>
		<br>
		<v-flex xs12 sm6 offset-sm3>
			<v-card>
				<v-card-title>
					<h4 class="text-center">Registration</h4>
				</v-card-title>
				<v-card-text>
					<v-text-field v-model="email" name="email" label="Email" type="email" required></v-text-field>
					<v-text-field v-model="password" name="password" label="Password" type="password" required></v-text-field>
					<v-text-field v-model="firstName" name="firstName" label="firstName:" type="text" required></v-text-field>
					<v-text-field v-model="lastName" name="lastName" label="lastName:" type="text" required></v-text-field>
					<v-text-field v-model="phone" name="phone" label="Phone" type="number"></v-text-field>
					<v-btn block primary light class="white--text" @click.native.prevent="loginWithEmailLocal">Sign Up</v-btn>
				</v-card-text>
			</v-card>
		</v-flex>
		<v-flex xs12 sm6 offset-sm3>
			<div class="bind">
				<br>
				<h4>Binding</h4>
				<hr>
				<p>Email: {{ email }}</p>
				<p>Password: {{ password }}</p>
				<p>FirstName: {{ firstName }} </p>
				<p>LastName: {{ lastName }}</p>
				<p>Phone: {{ phone }}</p>
				<p>{{user}}</p>
			</div>
		</v-flex>
	</v-container>
</template>


<script>
	import {
		auth,
		ref,
		firebase
	} from '../config/firebase'
	
	export default {
		data() {
			return {
				email: '',
				password: '',
				firstName: '',
				lastName: '',
				phone: '',
				isMember: false,
				isOrdered: false
			}
		},
		computed: {
			user() {
				return this.$store.getters.user;
			}
		},
		methods: {
			loginWithEmailLocal() {
				// if (this.firstName && this.lastName && this.phone != '') {
				// 	var self = this;
				// 	 auth.createUserWithEmailAndPassword(this.email, this.password)
				// 	.then(function(value) {
				// 		console.log('Success')
				// 		var vm = self;
				// 		auth.onAuthStateChanged(function(user) {
				// 			if (user) {
				// 				console.log('uid: ' + user.uid)
				// 				ref.child('users').child(user.uid).set({
				// 					firstName: vm.firstName,
				// 					lastName: vm.lastName,
				// 					phone: vm.phone,
				// 					isMember: vm.isMember,
				// 					isOrdered: vm.isOrdered
				// 				})
				// 				vm.$router.push({
				// 					name: 'View'
				// 				});
				// 			} else {
				// 				console.log('no user')
				// 			}
				// 		});
				// 	})
				// 	.catch(function(error) {
				// 		var errorCode = error.code;
				// 		var errorMessage = error.message;
				// 		console.log(errorCode)
				// 		console.log(errorMessage)
				// 		alert(errorCode)
				// 	})
				// } else {
				// 	alert('Please fullfil the fields')
				// }
				var vm = this;
				if (this.firstName && this.lastName && this.phone !== '') {
					this.$store.dispatch('signUp', {
							email: this.email,
							password: this.email
						})
						.then(() => {
							ref.child('users').child(this.user).set({
								firstName: vm.firstName,
								lastName: vm.lastName,
								phone: vm.phone,
								isMember: vm.isMember,
								isOrdered: vm.isOrdered
							})
							alert('Successfuly register')
							vm.$router.push({
								name: 'HomePage'
							})
						}).catch(error => {
							alert(error)
						})
				}else{
					alert('Please fulfil')
				}
			}
		}
	}
</script>


<style>
	
</style>
