/**
 * @param {Function} fn
 * @return {Function}
 */
function memoize(fn) {
    const ans = {};
    return function(...args) {
        let key_value = String(args);

        if(key_value in cache){
            return ans[key_value];
        }
        
        return ans[key_value] = fn(...args);
    }
}


/** 
 * let callCount = 0;
 * const memoizedFn = memoize(function (a, b) {
 *	 callCount += 1;
 *   return a + b;
 * })
 * memoizedFn(2, 3) // 5
 * memoizedFn(2, 3) // 5
 * console.log(callCount) // 1 
 */