import Vue from'vue';

document.addEventListener('DOMContentLoaded', ()=>{
  new Vue({
    el:"#app",

    data:{
      tasks:["Dishes","Mail Letter"],
      newTask:""
    },

    methods:{
      saveTask:function(){
        this.tasks.push(this.newTask);
        this.newTask = ""
      }

    }

  });

});
