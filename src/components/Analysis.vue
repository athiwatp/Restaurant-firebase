<template>
  <v-container>
      <v-layout>
          <v-flex>
              
          </v-flex>
      </v-layout>
  </v-container>
</template>

<script>
    import { ref } from '../config/firebase'

    export default{
        data(){
            return{
                
            }
        },
        firebase: {
            trans: ref.child('Transactions')
        },
        computed: {
            // topOrderedFood(){
            //     var item = []
            //     for( (tran, key) in trans){
            //         console.log(tran)
            //     }
            // }
        }
    }
</script>

<style>

</style>
