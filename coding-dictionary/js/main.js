//Coding Dictionary exercise

console.log('Coding Dictionary');

const dictionary  = {

  definitions : {
    method : 'Function inside an object (i.e. a function which is the value of a key.',
    scope : 'The visibility or active lifetime of a variable within a program. A region in whiich a variable can be accessed.',
    'variadic function': 'A function that can take a number of arguments.',
    arity: 'the number of arguments a function acccepts.',
  },

  lookUpTerm : function ( term ) {
    term = term.toLowerCase();
    const  foundTerm = this.definitions[term];
    return (term in dictionary.definitions ? `${term} =  ${foundTerm}` : 'Sorry, word does not exist');
  },

  printAll : function () {
    termsCount  = 0;
    for (const key in this.definitions) {
      console.log(this.lookUpTerm(key));
      termsCount++
    }; 
    console.log(`Total entries in Dictionary: ${termsCount}`)

  }, //end printAllDefinitions

  addDefinition : function ( newTerm , newDefinition) {
    newTerm = newTerm.toLowerCase(); //turn into lower case
    if ( newTerm in this.definitions ) {
      console.log(`${newTerm} is already defined`);
    } else {
      this.definitions[newTerm] = newDefinition;
      console.log('Term Added'); 
    }
    console.log(this.lookUpTerm(newTerm));
  }, //end addDefinition
  

  //remove entry


  //search for terms -- is there any definition that use 'x'?; --substring search


  // TODO: sort entries into alpabetical order

  


 



} //end dicitonary

dictionary.printAll();
dictionary.addDefinition('class', 'a blueprint for creating Objects.')
dictionary.addDefinition('class', 'a blueprint for creating Objects.')

