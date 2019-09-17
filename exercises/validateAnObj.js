// First-Class Functions in JavaScript
// How to validate an Obj in JS using a functional approach.

const checkUserName = (obj) => {
  return obj.name.length >= 4;
};

const checkPasswordConfirmation = (obj) => {
   obj.password === obj.confirmPassword;
};


const validateObj = (obj, ...funcs) => {
  for (let i = 0; i < funcs.length; i++) {
    if (funcs[i](obj) === (false || undefined) ) {
      return false;
    }
  }
  return true;
};


const obj = {
  name: "luca",
  password: "test",
  confirmationPassword: "testtest"
}

let objIsValid = validateObj(obj, checkUserName, checkPasswordConfirmation);

console.log(objIsValid);

console.log(checkPasswordConfirmation(obj));