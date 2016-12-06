class Chrono {

  constructor() {
    this.second = 0;
    this.minute = 0;
    this.hundredths = 0;
  }

  start() {
    this.cron = setInterval(this.increment.bind(this), 10);
  }

  stop() {
    clearInterval(this.cron);
  }

  increment() {
    if (this.hundredths == 99) {
      this.second++;
      this.hundredths = 0;
    } else if (this.second == 59) {
      this.minute++;
      this.second = 0;
    } else {
      this.hundredths++;
    }
    console.log(this.getMinute() +":"+this.getSecond()+":"+this.getHundredths());
  }

  getSecond() {
    return this.putMask(this.second);
  }
  getMinute() {
    return this.putMask(this.minute);
  }
  getHundredths() {
    return this.putMask(this.hundredths);
  }

  putMask(number) {
    if (number < 10) {
      number = "0"+number.toString();
    }
    return number;
  }
}