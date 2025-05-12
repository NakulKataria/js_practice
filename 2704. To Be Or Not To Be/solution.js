/*Write a function expect that helps developers test their code. It should take in any value val and return an object with the following two functions.

toBe(val) accepts another value and returns true if the two values === each other. If they are not equal, it should throw an error "Not Equal".
notToBe(val) accepts another value and returns true if the two values !== each other. If they are equal, it should throw an error "Equal".*/

/**
 * @param {string} val
 * @return {Object}
 */
// class Check{
//     constructor(val){
//         this.val=val;
//     }
//     toBe(val){
//         if(val===this.val)return true;
//         else throw new Error("Not Equal");

//     }
//     notToBe(val){
//         if(val!==this.val)return true;
//         else throw new Error("Equal");
//     }

// }
var expect = function(val) {
   return {
        toBe: function(another) {
            if (val === another) return true;
            throw new Error("Not Equal");
        },
        notToBe: function(another) {
            if (val !== another) return true;
            throw new Error("Equal");
        }
    };
    // return new Check(val);
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */