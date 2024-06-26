/**
 * @param {Function} fn
 * @param {number} t
 * @return {Function}
 */
var timeLimit = function(fn, t) {
    
    return async function(...args) {
        return new Promise((resolve, reject) => {
            let timer  = setTimeout(() => reject("Time Limit Exceeded"), t); 
            fn(...args).then(resolve).catch(reject).finally(() => clearTimeout(timer));
        })
    }
};
// // new async function() {
//     new Promise((resolve, reject) => {

//     })
//}
/**
 * const limited = timeLimit((t) => new Promise(res => setTimeout(res, t)), 100);
 * limited(150).catch(console.log) // "Time Limit Exceeded" at t=100ms
 */