import Vue from'vue';

document.addEventListener('DOMContentLoaded', ()=>{
  new Vue({
    el:"#app",
    data:{
      tasks:["Dishes","Mail Letter"],
      newTask:""
    }
  });
});
