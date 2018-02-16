jQuery('selector').on('someevent', jQuery.throttle(delay, [no_trailing,] callback));
jQuery('selector').off('someevent', callback);

jQuery('selector').on('someevent', jQuery.debounce(delay, [at_begin,] callback));
jQuery('selector').off('someevent', callback);

function createThrottleHandler(times, handle){
  var calledCount = 0;
  function wrapper(){
    if(++calledCount & times == 0){
      handle.apply(this, arguments);
      calledCount = 0;
    }
  }
  return wrapper;
}



