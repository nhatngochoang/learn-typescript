class BlurayPlayer {
  on() {
    console.log("Bluray Player turning on...");
  }
  turnOff() {
    console.log("Bluray Player turning off...");
  }
  play() {
    console.log("Playing Bluray Disc...");
  }
}

class Amplifier {
  on() {
    console.log("Amplifier turning on...");
  }
  turnOff() {
    console.log("Amplifier turning off...");
  }
  setSource(source: string) {
    console.log("Setting source to " + source);
  }
  setVolume(volumeLevel: number) {
    console.log("Setting volume to " + volumeLevel);
  }
}

class Lights {
  dim() {
    console.log("Lights are dimming...");
  }
}

class TV {
  turnOn() {
    console.log("TV turning on...");
  }
  turnOff() {
    console.log("TV turning off...");
  }
}

class PopcornMaker {
  turnOn() {
    console.log("Popcorn Maker turning on...");
  }
  turnOff() {
    console.log("Popcorn Maker turning off...");
  }
  pop() {
    console.log("Popping corn!");
  }
}

class HomeTheaterFacade {
  private bluray: BlurayPlayer;
  private amp: Amplifier;
  private lights: Lights;
  private tv: TV;
  private popcorn: PopcornMaker;

  constructor(
    amp: Amplifier,
    bluray: BlurayPlayer,
    lights: Lights,
    tv: TV,
    popcorn: PopcornMaker
  ) {
    this.amp = amp;
    this.bluray = bluray;
    this.lights = lights;
    this.tv = tv;
    this.popcorn = popcorn;
  }

  public watchMovie() {
    console.log("Starting to watch a movie...");
    this.popcorn.turnOn();
    this.popcorn.pop();
    this.lights.dim();
    this.tv.turnOn();
    this.amp.on();
    this.amp.setSource("bluray");
    this.amp.setVolume(11);
    this.bluray.on();
    this.bluray.play();
    console.log("Starting to watch a movie...");
  }

  public endMovie() {
    console.log("Shutting movie theater down...");
    this.popcorn.turnOff();
    this.amp.turnOff();
    this.bluray.turnOff();
    this.tv.turnOff();
    console.log("Shutting movie theater down...");
  }
}

let bluray = new BlurayPlayer();
let amp = new Amplifier();
let lights = new Lights();
let tv = new TV();
let popcorn = new PopcornMaker();

let homeTheater = new HomeTheaterFacade(amp, bluray, lights, tv, popcorn);
homeTheater.watchMovie();

homeTheater.endMovie();
