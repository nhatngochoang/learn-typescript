type WatchedParameter = {
  methodName: string;
  paramIndex: number;
};

const watchedParameters: WatchedParameter[] = [];

function Watch(target: any, methodName: string, paramIndex: number) {
  watchedParameters.push({
    methodName,
    paramIndex,
  });
}

class Vehicle {
  move(@Watch speed: number) {}
}

console.log(watchedParameters);
