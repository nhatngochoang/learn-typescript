// class Component {
// uniqueId: number = Date.now()
//   render() {}
// }

type ComponentOptions = {
  selector: string;
};

//!Decorator factory
function Component(options: ComponentOptions) {
  return (constructor: Function) => {
    constructor.prototype.options = options;
    constructor.prototype.uniqueId = Date.now();
    constructor.prototype.render = function () {
      return `<div>${this.uniqueId}</div>`;
    };
  };
}

@Component({ selector: "#my-element" })
class MyComponent {}
