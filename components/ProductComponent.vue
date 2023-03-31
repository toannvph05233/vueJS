<template>
  <div>
    <h1>Product List</h1>
    <table>
      <thead>
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Actions</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>
          <nuxt-link :to="{ name: 'edit', params: { id: product.id }}">Edit</nuxt-link>
          <button @click="deleteProduct(product.id)">Delete</button>
        </td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'ProductComponent',
  data() {
    return {
      products: [],
    };
  },

  async mounted() {
    // const response = await axios.get('/api/products');
    this.products = [{name:"oto", price:200, id:1},
                      {name:"oto2", price:200, id:2}];
  },

  methods: {
    async deleteProduct(id) {
      // await axios.delete(`/api/products/${id}`);
      this.products = this.products.filter((product) => product.id !== id);
    },
  },
};
</script>
