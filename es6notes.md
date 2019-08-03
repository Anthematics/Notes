# Jason's Es6 Notes

1. Let & Const vs var

2. Arrow functions and default arguements

3. Template strings & string improvements

4. Destructuring

5. Interables & Loops

6. Array Improvements

7. Spread & Rest

8. Promises

9. JS modules & NPM

10. Object Orientated JS

## Let & Const vs Var


### Scope

```Javascript

var dogYears = age * 7;

```

#### Scope w/Var

Looking at the above var what do you see ?
you see a variable you can call anywhwere which can cause problems when you want to just call something once or are using a temporary variable.

It is best to put vars inside a function (since you are controlling it's scope)but they must be WITHIN the function for it to play well.

### Scope w/ Let & Const

```Javascript

const dogYears1 = age * 7;

```

The const declaration creates a read-only variable - this does not mean the value is immutable (it isn't unless we use object.freeze) what it DOES mean is that the variable cannot be reassigned so its parameters can be altered but what it is itself cannot be changed (i.e we cannot change the variables name to catLives but we can change it to be 9)

LET AND CONST ARE BLOCK SCOPED

