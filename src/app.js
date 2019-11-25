import Vue from'vue';

document.addEventListener('DOMContentLoaded', ()=>{
  new Vue({
    el:"#app",

    data:{
      tasks:[
        {name:"Dishes",priority:false},
        {name:"Mail Letter",priority:true}
      ],
      newTask:""
    },

    methods:{
      saveTask:function(){
        this.tasks.push({name:this.newTask,priority:false});
        this.newTask = ""
      }
      //
      // changePriority:function(newP,index){
      //   this.tasks[index].priority= newP;
      // }
    }

  });

});
