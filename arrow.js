//ex 1
function double(arr) {
    return arr.map(function(val) {
      return val * 2;
    });
  }

  //using es2015

  const doubleFunc = (arr) => arr.map((val) => val * 2);


  //example 2

  function squareAndFindEvens(numbers){
    var squares = numbers.map(function(num){
      return num ** 2;
    });
    var evens = squares.filter(function(square){
      return square % 2 === 0;
    });
    return evens;
  }

  const squareThenFindEvens = num => num.map(val=> val**2).filter(square=> square % 2 === 0);
