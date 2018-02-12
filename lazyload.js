var clientHeight = (window.innerHeight || document.documentElement.clientHeight);
var scrollTop = (document.body.scrollTop || document.documentElement.scrollTop);

//
$(window).bind("scroll", function(){
  var clientHeight = (window.innerHeight || document.documentElement.clientHeight);
  var scrollTop = (documnet.body.scrollTop || document.documentElement.scrollTop);

  var form = scrollTop = (clientHeihgt/2);
  var to = scrollTop + clientHeihgtl

  $(".image").each(fucntion(){
    var $dom = $(this);
    if(this.offsetTop >= from && this.offsetTop < to){
      var cache = new Image();
      cache.onload = function(){
        var $image = $("<img>")
	      .attr("src", url)
	      .attr("alt", $dom.attr("alt"))
	      .css({
	        width: $dom.widht(),
		height: $dom.height()
	      }).addClass("image");
	$(dom).replaceWith($image);
      };
      cache.src = url;
    }
  });
});

//
$(window).bind("scroll", function(){
  $().each (function(){
    var img = this;
    if(this.offsetTop >= from && this.offsetTop < to){
     //...
    }else{
      if(dom.nodeName === "IMG"){
        var $spacer = $("<div>")
	      .attr("src", dom.src)
	      .attr("alt", dom.src)
	      .css({
	        width: dom.width,
		height: dom.height,
		display: "inline-block"
	      }).addClass("image");
	$(dom).replace($spacer);
      }
    }
  });
});

