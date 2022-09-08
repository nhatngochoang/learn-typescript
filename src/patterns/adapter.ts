interface Iphone {
  useLightning(): void;
}

class Iphone7 implements Iphone {
  useLightning() {
    console.log("Using lightning port..");
  }
}

interface Android {
  useMicroUSB(): void;
}

class GooglePixel implements Android {
  useMicroUSB() {
    console.log("Using micro USB..");
  }
}

class LightningToMicroUSBAdapter implements Android {
  private iphoneDevice: Iphone;

  constructor(iphone: Iphone) {
    this.iphoneDevice = iphone;
  }

  useMicroUSB() {
    console.log("Want to use micro USB, converting to Lightning");
    this.iphoneDevice.useLightning();
  }
}

let iphone = new Iphone7();
let chargeAdapter = new LightningToMicroUSBAdapter(iphone);

chargeAdapter.useMicroUSB();
