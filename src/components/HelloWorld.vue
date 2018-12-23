<template>
  <div>
    <div>{{title}}</div>
    <button @click='init_load'>Click Me</button>
    <div>
        <h1> I am a simple component </h1>
        <!-- 使用 Button 组件 -->
        <el-button>默认按钮</el-button>
        <el-button type="primary">主要按钮</el-button>
        <el-button type="success">成功按钮</el-button>
        <el-button type="info">信息按钮</el-button>
        <el-button type="warning">警告按钮</el-button>
        <el-button type="danger">危险按钮</el-button>
    </div>
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
