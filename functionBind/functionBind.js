/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){
 *    return a + b
 * };
 *
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

/*
things to keep in mind: write bind's function definition

bind takes in a function and a context in which the function parameter will be operating in
able to use call() or apply()?
bind is a function wrapper for both of the above

return function using apply() with arguments

*/

var bind = function(func, context) {
  // TODO: Your code here
  var arg = Array.prototype.slice.call(arguments, 2);

  return function() {
    var totalArgs = Array.prototype.slice.call(arguments);
    totalArgs = arg.concat(totalArgs);
    return func.apply(context, totalArgs);
  };
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
 */

Function.prototype.bind = function(context) {
  // declared variable arguments for context
  // TODO: Your code here
  // declare a function
  // declare a variable arguments for context
  // apply function to arguments

  var func = this; // this was given
  var arg = Array.prototype.slice.call(arguments, 1);
  // var [context, arguments] = arguments; // originally commented

  return function() {
    var totalArgs = Array.prototype.slice.call(arguments);
    totalArgs = arg.concat(totalArgs);
    return func.apply(context, totalArgs);
  };
};
