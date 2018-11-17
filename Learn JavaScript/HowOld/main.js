// Write your function here:
const howOld = (age, year) => {
  if (year > 2018)
    return 'You will be '+(age+(year-2018))+' in the year '+year;
  else if (year < (2018-age))
    return 'The year '+year+' was '+(2018-age-year)+' years before you were born';
  else if (year > (2018-age))
    return 'You were '+(age-(2018-year))+' in the year '+year;
}
console.log(howOld(26, 1990));


// Once your function is written, write function calls to test your code!
