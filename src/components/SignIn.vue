<template>
	<v-container fluid>
		<br>
			<v-flex xs12 sm6 offset-sm3>
				<v-card>
					<v-card-title>
						<h4 class="primary--text">Sign In</h4>
					</v-card-title>
					<v-card-text>
						<v-text-field
							v-model="email"
							name="email"
							label="Email"
							type="email"
							required></v-text-field>
						<v-text-field
							v-model="password"
							name="password"
							label="Password"
							type="password"
							required></v-text-field>
						<v-btn block primary light class="white--text" @click.native.prevent="loginWithEmailLocal">Log In</v-btn>
						<v-btn block primary light class="white--text" @click.native.prevent="logOut">Sign Out</v-btn>
						<br><hr><br>
						<br><h4 class="primary--text">Have no account?</h4><br>
						<v-btn block primary light class="white--text" @click.native.prevent="registerRoute">Register</v-btn>
					</v-card-text>
				</v-card>
			</v-flex>
	</v-container>
</template>


<script>
	import {
		auth
	} from '../config/firebase'
	export default {
		data() {
			return {
				email: '',
				password: ''
			}
		},
		methods: {
			loginWithEmailLocal() {
				var vm = this;
				auth.signInWithEmailAndPassword(this.email, this.password)
					.then(function(value) {
						alert('Successfully sign in')
						console.log(value)
						vm.$router.push({
							name: 'HomePage'
						})
					})
					.catch(function(error) {
						// Handle Errors here.
						var errorCode = error.code;
						var errorMessage = error.message;
						alert(errorMessage)
					})
			},
			logOut() {
				auth.signOut().then(function() {
					alert('Signed Out');
				}, function(error) {
					alert('Sign Out Error', error);
				});
			},
			registerRoute() {
				this.$router.push({
					name: 'Register'
				})
			}
		}
	}

</script>


<style>


</style>
