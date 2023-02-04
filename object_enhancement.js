function createInstructor(firstName, lastName){
    return {
      firstName: firstName,
      lastName: lastName
    }
  }
  //write es2015 version

  const createInstructor1 = (first,last) => ({
    first, 
    last})




var favoriteNumber = 42;

var instructor = {
  firstName: "Colt"
}

instructor[favoriteNumber] = "That is my favorite!"

//es2015 version below
const instructor1 = {
    firstName: 'Colt',
    [favoriteNumber]: "that is my favorite!"
}


var instructor2 = {
    firstName: "Colt",
    sayHi: function(){
      return "Hi!";
    },
    sayBye: function(){
      return this.firstName + " says bye!";
    }
  }

  //es2015 version

  const instructor3 = {
    firstName: 'colt',
    sayHi(){
        return 'Hi!'
    },
    sayBye(){
        return this.firstName + "says bye!"
    }
  }


  //create animal function

  const createAnimal = (species, verb, noise) => {
    return{
        species,
        [verb](){
            return noise;
        }
    }
  }
