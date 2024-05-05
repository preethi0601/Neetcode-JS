/**
 * @param {number[]} nums
 * @return {void}
 */
class ArrayWrapper {
    constructor(nums) {
        this.nums = nums;
    }
    valueOf() {
        let sum = 0;
        for(let i=0;i<this.nums.length;i++) {
            sum+=this.nums[i];
        }
        console.log(sum);
        return sum;
    }
    toString() {
        return '[' + this.nums.toString() + ']'
    }
};



/**
 * @return {number}
 */
/**
 * @return {string}
 */
/**
 * const obj1 = new ArrayWrapper([1,2]);
 * const obj2 = new ArrayWrapper([3,4]);
 * obj1 + obj2; // 10
 * String(obj1); // "[1,2]"
 * String(obj2); // "[3,4]"
 */