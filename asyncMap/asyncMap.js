'use strict';

/* Implement the function asyncMap:
 *
 * asyncMap has two parameters, an array of asynchronous functions (tasks) and a final-result callback.
 * Each of the tasks receives a task-specific callback that must be invoked when the task completes.
 * The final-result callback passed to asyncMap receives the results collected by the task-specfic callbacks.
 *
 * The order of these results should be the same as the order of the tasks.
 * It is important to note that this is not the order in which the tasks return,
 * but the order in which they are passed to asyncMap.
 *
 * Once all the callbacks of the tasks are returned, asyncMap should invoke the callback
 * on the results array.
 *
 *
 * Example:
 *
 * asyncMap([
 *  function(cb){
 *    setTimeout(function(){
 *      cb('one');
 *    }, 200);
 *  },
 *  function(cb){
 *    setTimeout(function(){
 *      cb('two');
 *    }, 100);
 *  }
 * ],
 *  function(results){
 *    // the results array will equal ['one','two'] even though
 *    // the second function had a shorter timeout.
 *    console.log(results); // ['one', 'two']
 * });
 *
 *
 */

 /*
 things to keep in mind: async function
 waits until all callbacks are returned before invoking a callback on results
 results are stored in an array

 I: any number of tasks/functions to execute
 O: returns the results of each of the callback functions in the order that they are executed, regardless of setTimeout
 C:
 E:


find a way to track the number of tasks asyncMap() is supposed to run
maybe keep a counter variable that increases with every task

create helper function that iterates through the results of the tasks and stores them in a final array

 */


var asyncMap = function(tasks, callback) {
  var finalResults = [];
  var numTasks = 0;
  var helper = function(result) {
    for (var i = 0; i < tasks.length; i++) {
      finalResults[i] = result;
    }
    numTasks = numTasks + 1;
    // unfinished, continue progress when free
  }

  helper(result);
};
