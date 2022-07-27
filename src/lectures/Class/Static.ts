class Ride {
   private static _activeRides: number = 0

   plus() {
      Ride._activeRides++
   }
   minus() {
      Ride._activeRides--
   }

   static get activeRides() {
      return Ride._activeRides
   }

   static set activeRides(newValue: number) {
      Ride._activeRides = newValue
   }
}

let rideObj1 = new Ride()
rideObj1.plus()

let rideObj2 = new Ride()
rideObj2.plus()

console.log(Ride.activeRides)
Ride.activeRides = 3
console.log(Ride.activeRides)
