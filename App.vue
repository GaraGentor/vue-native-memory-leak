<template>
  <view class="container">
	<button :on-press="insert" title="insert"></button>
	<button :on-press="clear" title="clear"></button>
	<ScrollView>
	    <ReactTestCompWithVueComponents
	      class="text-container"
	      v-for="(todo, index) in todos"
	      :key="'' + index"
	      :item="todo"
	    />
	</ScrollView>
  </view>
</template>
 
<script>
import React, { Component } from 'react';
import TodoItem from "./TodoItem";
import ReactComp from "./ReactTestComp";
import ReactTestCompWithVueComponents from "./ReactTestCompWithVueComponents";

export default {
  components: { 
    TodoItem,
    ReactComp,
    ReactTestCompWithVueComponents,
  },
  methods: {
  	insert() {
  		for (let i = 0; i <= 500; i++) {
  			this.todos.push({ id: i, text: "Learn JavaScriptttt" });
  		}
  	},
  	clear() {
  		this.todos = [];
  	},
  },
  data: function() {
    return {
      todos: [],
    };
  }
};
	
</script>

<style>
.container {
  background-color: white;
  align-items: center;
  justify-content: center;
  flex: 1;
}
.text-container {
  color: blue;
  padding: 2;
  font-size: 22;
}
.text-input-container {
  width: 300;
  height: 40;
  font-size: 22;
  border-color: gray;
}
</style>
