$(window).on("orientationchange", function(){
	var orientation = Math.abs(window.orientation) === 90 ? "" : "";
});

$(window).on("resize", function(){
  var orientation = $(document).width() > $(document).height() ? "" : "";
});


//
(function pollingRotateWindow(interval){
  function checkWindowSize(){
    var isLandscape = $(document).width() > $(document).height();
    if(isLandscape !== $(window).data("landscape")){
      $(window).data("landscape", isLandscape).trigger("totate");
    }
  }
  setInterval(checkWindowSize, interval);
}(500));

/*.css
 *
 @media only screen and (orientation : landscape){
   //
 }
 @media only screen and (orientation : portarit){
   //
 }
  * */

