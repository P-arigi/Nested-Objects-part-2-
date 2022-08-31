let nestedData = {
    innerData: {
      order: ["first", "second", "third"],
      snacks: ["chips", "fruit", "crackers"],
      numberData: {
          primeNumbers: [2,3,5,7,11],
          fibonnaci: [1,1,2,3,5,8,13]
      },
      addSnack: function(snack){
        //What this refers to 
         console.log("WHAT IS THIS?", this)
          this.snacks.push(snack);
          return this;
      }
    
    }
  }
  //We are adding a element to the list snacks.
  nestedData.innerData.addSnack("chocolate")  

  //We are just calling it
  console.log(nestedData.innerData.snacks)

  //We are just accesing the  second element in the  order array
  console.log(nestedData.innerData.order[1])

  //Displaying the primenumbers using for loop
  function displayPrimeNumbers(){
    let numbers=nestedData.innerData.numberData.primeNumbers;
    for(let i=0; i<numbers.length; i++){
        console.log(numbers[i]);
    }
  }
displayPrimeNumbers()

//Using a for loop, console.log all of the even Fibonnaci numbers.
function displayFibonnaciNumbers(){
    let number=nestedData.innerData.numberData.fibonnaci;
    for(let i=0; i<number.length; i++){
        if(number[i]%2==0){
            console.log(number[i]);
        }
    }
}
displayFibonnaciNumbers()