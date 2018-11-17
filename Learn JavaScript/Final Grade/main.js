// Write your function here:
const finalGrade = (num1, num2, num3) => {
  if (num1 < 0 || num1 > 100 ||num2 < 0 || num2 > 100 ||num3 < 0 || num3 > 100)
    return 'You have entered an invalid grade.';
  const average = (num1+num2+num3)/3;
  if (0 <= average && average <= 59)
    return 'F';
  else if (60 <= average && average <= 69)
    return 'D';
  else if (70 <= average && average <= 79)
    return 'C';
  else if (80 <= average && average <= 89)
    return 'B';
  else if (90 <= average && average <= 100)
    return 'A';

}





// Uncomment the line below when you're ready to try out your function
// console.log(finalGrade(99, 92, 95)) // Should print 'A'

// We encourage you to add more function calls of your own to test your code!
