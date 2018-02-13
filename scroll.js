var div5 = document.getElementById("div5");
$("#scroll").on("click", function(){
  window.scrollTo(0, 100);
});

$("#scroll2").on("click", function(){
  window.scrollBy(0, 40);
});

$("#scroll3").on("click", function(){
  div5.scrollIntoView(true);
});

$("#scroll4").on("click", function(){
  div5.scrollIntoView(false);
});


