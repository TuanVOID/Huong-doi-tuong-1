class Mobile {
    constructor(name) {
        this.name = name;
        this.pin = 100;
        this.inbox = [];
        this.outbox = [];
        this.message = "";
        this.status = false;
    }

    writeMessage(text) {
        if (this.status === true) {
            this.message = text;
            this.pin--;
        } else {
            console.log("bat dien thoai")
        }
    }

    turnon() {
        this.status = true;
        this.pin--
    }

    turnoff() {
        this.status = false;
        this.pin--;
    }

    sendMessage(Phone) {
        this.outbox.push(this.message);
        Phone.inbox.push(this.message);
        this.pin--;

    }

}


let iphone = new Mobile("Iphone");
let samsung = new Mobile("Samsung");
samsung.turnon();
iphone.turnon();

iphone.writeMessage("Hello");
iphone.sendMessage(samsung);
console.log(samsung.inbox);
console.log(iphone.outbox);

samsung.writeMessage("hi,  how are you?")
samsung.sendMessage(iphone);
console.log(iphone.inbox);

samsung.turnon();
iphone.turnon();