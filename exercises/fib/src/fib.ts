
/**
 * Implement a generator function that can be used
 * to generate numbers in the Fibonacci Sequence
 */
function* getFibSequence() {
  let twoAgo = 1;
  let oneAgo = 0;

  while(true){
    let nextValue = twoAgo + oneAgo; 
    yield nextValue;
    twoAgo = oneAgo;
    oneAgo = nextValue;
  }
}


for (let c of getFibSequence()) {
  console.log(c);
}
