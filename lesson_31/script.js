"use strict";

function altBind(func, ctx, ...args) {
  return function () {
    return func.apply(ctx, args.concat(Array.from(arguments)));
  };
}
