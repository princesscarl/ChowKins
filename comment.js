$(document).ready(function(){ 
  
    $(".primaryContained").on('click', function(){
    $(".comment").addClass("commentClicked");
  });
  $("textarea").on('keyup.enter', function(){
    $(".comment").addClass("commentClicked");
  });
  });

new Vue({
    el: ".comms",
    data:{
       title: 'Add a comment',
      newItem: '',
      item: [],
    },
    methods:{
      addItem  (){
      this.item.push(this.newItem);
        this.newItem = "";
      }
  }

  });
