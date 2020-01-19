Function.prototype.bind = function(context: any) {
  var fn = this;
  var args = [].slice.call(arguments, 1);
  return function() {
    return fn.apply(context, args.concat([].slice.call(arguments)));
  };
};
