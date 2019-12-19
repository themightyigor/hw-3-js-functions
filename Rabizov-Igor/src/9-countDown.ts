function countDown(counter: number): void {
  var timer = setInterval(function() {
    if (counter < 0) clearInterval(timer);
    else {
      console.log(counter);
      counter--;
    }
  }, 1000);
}
