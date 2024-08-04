//Q1
/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    let curr = 0
    return function(x){
      for(let i=functions.length-1;i>=0;i--){
        let func=functions[i]
        curr = func(x)
        p = curr
      }
      return x
    }
  };
  
  /**
   * const fn = compose([x => x + 1, x => 2 * x])
   * fn(4) // 9
   */

//Q2
/**
 * @param {Function} fn
 * @return {Function}
 */
var once = function(fn) {
    let ans = false;
    return function(...args){
        if(!ans){
            ans = true;
            return fn(...args);
        }
    }
};

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */