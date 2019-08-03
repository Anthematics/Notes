#Object Function Notes

##Table Of Contents

## 1. General Information
  1.
  2.
  
## 2. Object Methods
  1. Bind()
  2. Call()
  3. Apply()


### .bind()

### .bind() use cases

### .bind() example

// A define the person
let aboutJason = {name: "Jason",age: 30, location: 'Toronto'}

//B define the function and invoke this

let greetingBind = function(a,b,c) {
  return `Welcome ${this.name} you are ${this.age} and live in ${this.location} `
}

//C connect the invocation of this to the object
const context = greetingBind.bind(aboutJason)


//D log the object
console.log(context())

### .call()

### .call() use cases

## .call() example: 

```let aboutQT = {name:'QT'}

const greetingCall = function(a,b,c){
  return `Welcome ${this.name} to ${a} ${b}`
};

// C: First param in call is what we are setting 'this' too
console.log(greetingCall.call(aboutQT,'Kathmandu', 'we have great food'))
``` 
### apply()

### .apply() use cases

## .apply() example:


```this is the first argument to the apply function - the object
const bear = {
  name: 'Oscar'
}

// the second is an array of arguements
greetingArgs = ['Calcutta','ROAAR']

const greetingApply = function(a,b,c){
  return `Welcome ${this.name} to ${a} please dont ${b}`
};

//First arguement to the ap
console.log(greetingApply.apply(bear,greetingArgs))
```






