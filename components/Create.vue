<template>
  <form @submit.prevent="handleSubmit">
    <label>
      Username:
      <input type="text" v-model="username" v-validate="'required'">
      <span v-show="errors.has('username')">{{ errors.first('username') }}</span>
    </label>
    <label>
      Password:
      <input type="password" v-model="password" v-validate="'required|min:8'">
      <span v-show="errors.has('password')">{{ errors.first('password') }}</span>
    </label>
    <button type="submit" :disabled="errors.any()">Submit</button>
  </form>
</template>

<script>
import { ValidationObserver, ValidationProvider, extend } from 'vee-validate'
import { required, min } from 'vee-validate/dist/rules'

extend('min', min)

export default {
  components: {
    ValidationObserver,
    ValidationProvider
  },
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    handleSubmit() {
      console.log('Username:', this.username)
      console.log('Password:', this.password)
    }
  }
}
</script>
