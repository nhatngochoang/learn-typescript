interface State {
  order: Order;

  cancelOrder(): void;
  verifyPayment(): void;
  shipOrder(): void;
}

class Order {
  public cancelledOrderState: State;
  public paymentPendingState: State;
  public orderShippedState: State;
  public orderBeingPrepared: State;
  public currentState: State;

  constructor() {}

  public setState(state: State) {
    this.currentState = state;
  }

  public getState(): State {
    return this.currentState;
  }
}

class PaymentPendingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cancelling your unpaid order...");
    this.order.setState(new CancelledState(this.order));
  }

  verifyPayment() {
    console.log("Payment verified! Shipping soon...");
    this.order.setState(new ShippingState(this.order));
  }

  shipOrder() {
    console.log("Cannot ship the order when payment is pending!");
  }
}

class CancelledState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Your order is already cancelled!");
  }

  verifyPayment() {
    console.log("Your order is cancelled, you cannot verify payment!");
  }

  shipOrder() {
    console.log("Your order is cancelled, you cannot ship it!");
  }
}

class ShippingState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cannot cancel, already shipped!");
  }

  verifyPayment() {
    console.log("Payment already verified!");
  }

  shipOrder() {
    console.log("Shipping your order...");
    this.order.setState(new DeliveredState(this.order));
  }
}

class DeliveredState implements State {
  order: Order;

  constructor(order: Order) {
    this.order = order;
  }

  cancelOrder() {
    console.log("Cannot cancel, already delivered!");
  }

  verifyPayment() {
    console.log("Payment already verified!");
  }

  shipOrder() {
    console.log("Already shipped!");
  }
}
