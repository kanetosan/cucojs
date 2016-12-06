function myTimer() {
    if (cet == 99) {
      seg++;
      cet = 0;
    } else if (seg == 59) {
      min++;
      seg = 0;
    } else {
      cet++;
    }
    
    document.getElementById("seg").innerHTML = seg;
    document.getElementById("min").innerHTML = min;
    document.getElementById("cet").innerHTML = cet;
}

class Chrono {

  constructor() {
    this.second = 0;
    this.minute = 0;
    this.hundredths = "00";
  }

  start() {
    this.cron = setInterval(this.increment.bind(this), 10);

    setInterval(this.increment, 1000);
  }

  stop() {
    clearInterval(this.cron);
  }

  increment() {
    this.hundredths++;
  }

}