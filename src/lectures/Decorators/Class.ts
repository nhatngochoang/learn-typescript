// class Component {
// uniqueId: number = Date.now()
//   render() {}
// }

function Component(constructor: Function) {
  constructor.prototype.uniqueId = Date.now();
  constructor.prototype.render = function () {
    return `<div>${this.uniqueId}</div>`;
  };
}

@Component
class MyComponent {}
