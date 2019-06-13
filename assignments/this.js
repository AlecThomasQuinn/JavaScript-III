/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: The "Window" is the global object that "this" will refer to if you use this on the topmost level, the largest scope of your code

* 2. Implicit Binding: The obejct that "this" is in is what "this" refers to. If the object is 'banana' and has a function 'getPeeled', banana.getPeeled refers to 'banana' as "this" 
     Implicit Binding references the object to the left of the dot      banana<---DOT.function(), this === banana

* 3. New Binding: New Binding is the implicit "this" binding in any object created using the 'new' keyword  


* 4. Explicit Binding: The object that "this" refers to is the arguments passed into the function's call, apply, or bind method. 
     We are EXPLICITLY stating in the code what "this" is, via the (arguments) in function.call('this')
*
* write out a code example of each explanation above
*/

// Principle 1
// code example for Window Binding

console.log(this)

// Principle 2
// code example for Implicit Binding
const unripeBanana = {
    // I also learned that arrow functions do not hold context for .this, so it has to be just a regular, normal, conformative, bland, plain ol vanilla function() (jokes)
    status: 'green and unripened',
    makePeeled: function(){
        console.log(`Look at what you've done. This ${this.status} banana is now peeled. Enjoy your ${this.status} banana you savage.`)
    }
}

unripeBanana.makePeeled()

// Principle 3
// code example for New Binding

const Banana = function(status){
    this.status = status
}

const perfectBanana = new Banana('perfect')

console.log(`This banana is ${perfectBanana.status}.`)

// Principle 4
// code example for Explicit Binding
const overripeBanana = {
    status: 'brown, soft and disgusting'
}

const peelAnyBanana = function(){
    console.log(`You peeled this ${this.status} banana. Congrats. Was it worth it? Are you satisfied??`)
}

peelAnyBanana.call(overripeBanana)

peelAnyBanana.call(unripeBanana)
