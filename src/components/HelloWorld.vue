<template>
  <div>
    <div>{{title}}</div>
    <button @click='init_load'>Click Me</button>
  </div>
</template>

<script>
import {base_api} from '../api/api'
// import axios from 'axios'
export default {
  name: 'HelloWorld',
  data () {
    return {
      title: 'None',
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods:{
    init_load(){
      // axios.get('api/user/').then(res => {
      //   // this.title = res
      //   console.log(res)
      // }).catch(err => {
      //   console.log(err)
      // })

      base_api().then(data=>{
        this.title=data['data']['message']
        console.log(data)
      })
    }
  }
}
</script>
