//
$("#gesture_area")
.on("touchstart", displayTouchesInfo).on("touchmove", displayTouchesInfo)
.on("touchend", displayTouchesInfo).on("touchcancel", displayTouchesInfo)
.on("gesturestart", displayGestureInfo)
.on("gesturechange", displayGestureInfo).on("gestureend", displayGestureInfo);

function displayTouchesInfo(ev){
	var logMsgs = [];
	logMsgs.push("&lt;" + ev.type + "&gt; t.len = [" + ev.touches.length + "]");
	logMsgs.push(", ct = [" + ev.changeTouches.length + "]");
	logMsgs.push(", tt = [" + ev.targetTouches.length + "]<br/>");
	$.each(ev.touches, function(ev){
	  logMessages.push(
	    "t[" + this.identifier + "](" + this.clientX + "," + this.clientY + ")(" +
	    this.pageX + "," + this.pageY + ")(" + this.screenX + "," + this.screenY + ")");
	});
	$.each(ev.targetTouches, function(idx){
	  logMsgs.push(
	    "ct[" + this.identifier + "](" + this.clientX + "," + this.clientY + ")(" +
	    this.pageX + "," + this.pageY + ")(" + this.screenX + "," + this.screenY +
	  ")");
	});
	$.each(ev.targetTouches, functon(idx){
	  logMsgs.push(
	    "tt[" + this.identifier + "](" + this.clientX + "," + this.clientY + ")(" +
	    this.pageX + "," + this.pageY + ")(" + this.screenX + "," + this.screenY +
	  ")");
	});
	log(logMsgs.join(""));
}

function displayGestureInfo(ev){
  log("&lt" + ev.type + "%gt; scale = ["+ev.scale+"], rotate = ["+ev.rotation+"]");
}


