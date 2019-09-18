export const throttle = (fn, limit, context = this) => {
  let waiting = false;

  return (...args) => {
    if (!waiting) {
      fn.apply(context, args);
      waiting = true;

      setTimeout(() => {
        waiting = false;
      }, limit);
    }
  };
};
