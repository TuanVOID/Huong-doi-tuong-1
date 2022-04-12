class Battery {
    constructor(energy) {
        this.energy = energy;
    }

    getEnergy() {
        return this.energy;
    }

    decreaseEnergy() {
        if (this.battery > 0) {
            this.energy--;
        }
    }
}

class FlashLamp {
    constructor(battery) {
        this.battery = battery;
    }
    getBatteryInfo () {
        return this.battery.getEnergy();
    }
    light() {
        if (this.status) {
            alert("lighting");
        } else {alert("not lighting")}
    }
    turnOn() {
        this.status=true;
    }
    turnOff() {
        this.status=false;
    }
}
let battery = new Battery(50);
// console.log(battery);
let flashlamp = new FlashLamp(battery);
// document.write("Battery info:" + flashlamp.getBatteryInfo() + "<br/>");
// flashlamp.light();
// document.write("Turn on </br>")
// flashlamp.turnOn();
// flashlamp.light();
document.write("Battery info " + flashlamp.getBatteryInfo()+"</br>");
document.write("turn off </br>");
flashlamp.turnOff();
flashlamp.light();

