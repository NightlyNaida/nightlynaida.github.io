function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
      'total': t,
      'days': days,
      'hours': hours,
      'minutes': minutes,
      'seconds': seconds
    }
}
  
function initializeClock(id, endtime, callback) {
    var clock = document.getElementById(id);  
    function updateClock() {
      var t = getTimeRemaining(endtime); 
      clock.innerText = `${('0' + t.minutes).slice(-2)}:${('0' + t.seconds).slice(-2)}`
      if (t.total <= 0) {
        callback();
        clearInterval(timeinterval);
      }
    }
    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
    return timeinterval;
}

export default initializeClock;