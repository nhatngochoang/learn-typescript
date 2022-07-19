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

function Pipe(constructor: Function) {
  constructor.prototype.pipe = true;
}

@Component({ selector: "#my-element" })
@Pipe
// f(g(x))
class MyComponent {}
