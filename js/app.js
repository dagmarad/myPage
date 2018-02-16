$(function(){
//bellow code is for parallax function
window.addEventListener("scroll", (function(event){
addActiveMenu();
}))

//below code is for highlight menu which can be active, when
//offsetTop is the pixel when we change color of menu


function addActiveMenu(){
  let  currentScroll = this.document.documentElement.scrollTop;//to jest to samo co $(this).scrollTop();
   let position =this.scrollY

  
  let container = [...document.querySelectorAll('.container')];
  
  container.forEach(function(){
    if(this.position == currentScroll){
    var id = $position.attr('id');
    console.log(id);
    $('a').removeClass('active');
    $("[href=#"+id+"]").addClass('active');
  }

})

}

});
