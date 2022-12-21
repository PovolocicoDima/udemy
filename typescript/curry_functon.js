for ( let i = 1; i <= 100; i += 1) {
  let f = i % 3 === 0;
  let b = i % 5 === 0;
   console.log( f ? ( b ? 'FizzBuzz' : 'Fizz') : b ? 'Buzz' : i)
}