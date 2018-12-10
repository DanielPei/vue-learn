<template>
	<div class="todo-list-wrapper">
		<div><h1>{{title}}</h1></div>
		<span>Add todo:</span><input v-model="new_item" v-on:keyup.enter="addNew">
		<ul>
			<li v-for="item in todo_list" :class="{finished: item.isFinished}" v-on:click="toggleFinish(item)">{{item.label}}</li>
		</ul>
	</div>
</template>

<script>
import Store from '../storage/store'

export default{
	name: 'TodoList',
	data() {
		return {
			title : "My todo list!",
			new_item : "",			
			// todo_list:[{'label':'eat','isFinished':false}]
			todo_list : Store.fetch()	// e.g: [{'label':'eat','isFinished':false}]
		}
	},
	methods:{
		addNew () {
			this.todo_list.push({label:this.new_item, isFinished:false})
			this.new_item = ""
		},
		toggleFinish(item) {
			item.isFinished = !item.isFinished
		}
	},
	watch : {
		todo_list : {
			handler (todo_list) {
				Store.save(todo_list)
			},
			deep: true
		}
	}
}
</script>

<style>
.title{
	font-size: 24px;
	font-weight: bold;
}
.finished{
	text-decoration: underline;
	color: green;
	font-weight: bold;
}
html{
	height: 100%;
}
body{
	display: flex;
	/*align-items: center;*/
	justify-content: center;
	height: 100%;
}
</style>