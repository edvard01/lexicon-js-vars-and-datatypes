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
  console.log((name = "Mars"));
  //Fix this by using another keyword either let or var for name. Or Create another const called newName or name2.
}

function runExercises() {
  exercise1();
  exercise2();
  exercise3();
  exercise4();
}

runExercises();
