<template>
  <v-container fluid>
        <div class="ma-3" v-for="(i, key) in item">
          <div v-if="key !== 'date' && key !== 'time' && key !== 'discount' && key !== 'totalPrice'">
            <v-card color="blue base" class="white--text" >
              <v-container>
                <v-layout xs7>
                  <div>
                    <div class="headline">{{key}}</div>
                    <div>{{ i.description }}</div>
                  </div>
                </v-layout>
                <v-flex xs5>
                  <v-card-media
                    :src="i.imgSrc"
                    height="100px"
                    contain
                  ></v-card-media>
                  <div>
                    <p>Price: {{ i.price }}</p>
                    <p>Quantity: {{ i.quantity}}</p>
                    <p>subTotal: {{subTotal(i.quantity, i.price)}}</p>
                  </div>
                 </v-flex>
              </v-container>
            </v-card>
          </div>
        </div>
  </v-container>
</template>

<script>
export default {
  props: ['item'],
  methods: {
    subTotal(quantity, price){
      return quantity*price
    }
  }
}
</script>

<style >
</style>
