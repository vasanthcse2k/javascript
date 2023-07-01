const minTemp = 30;
const maxTemp = 40;
const incTemp = 0.02;
const incTempNight = incTemp / 2;
const decTemp = 0.01;
const time = 1000;

var temperature = minTemp;
var nightTime = false;

function tempControler() {
  setInterval(() => {
    if (!nightTime) {
      temperature =temperature + incTemp;
    } else {
      temperature =temperature + incTempNight;
    }
    if (temperature >= maxTemp) {
      temperature =temperature - decTemp;
    } else if (temperature <= minTemp) {
      temperature = minTemp;
    }
    console.log(`Current temperature: ${temperature.toFixed(2)} C`);
  }, time *60*1000);
}

function DayNightCycles() {
  setInterval(() => {
    nightTime = !nightTime;
    console.log(nightTime ? 'Night time' : 'Day time');
  },12*60*60*1000);
}

DayNightCycles();
tempControler();