function exercise1() {
  let age = 22;
  console.log(`this is my age: ${age}`);
}

function exercise2() {
  var varEx =
    "Var has function scope and is hoisted while being initialized with a default value. When Var doesn't get initialized its default value is set to 'undefined'. Var can also be both updated and redeclared.";

  let letEx =
    "Let has block scope and is hoisted without being initialized. Let variables cannot be accessed without being initalized first. Let can only be updated but not redeclared.";
  const constEx =
    "Const is very similar to Let, except it cannot be declared without being initialized, therefore it cannot be accesed without initalization.";
  console.log(varEx);
  console.log(letEx);
  console.log(constEx);
}

function exercise3() {
  let var1 = "string";
  let var2 = true;
  let var3 = 22;

  console.log(var1);
  console.log(var2);
  console.log(var3);
}

function exercise4() {
  const name = "Twix";
  console.log(name);
  //console.log((name = "Mars"));
  //Fix this by using another keyword either let or var for name. Or Create another const called newName or name2.
}

function exercise5() {
  //For example adding security to a webpage, bool can be used to store whether user is logged in or not.
}

function exercise6() {
  let changeable = true;
  //We should declare is at let, so we don't have to redeclare another variable later which would take up more memory than nessesary.
}

function exercise7() {
  let number1 = 100;
  let number2 = 200;

  let result = number1 + number2;

  console.log(result);
}

function exercise8() {
  let number1 = 20;
  let number2 = 5;

  let result1 = number1 - number2;
  let result2 = number1 * number2;
  let result3 = number1 / number2;

  console.log(`results in order: ${result1}, ${result2}, ${result3}`);
}

function runExercises() {
  exercise1();
  exercise2();
  exercise3();
  exercise4();
  exercise7();
  exercise8();
}

runExercises();
