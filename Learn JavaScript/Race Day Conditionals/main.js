let raceNumber = Math.floor(Math.random() * 1000);
const earlyRegister = false;
const age = 18;
if (age > 18 && earlyRegister){
  raceNumber += 1000;
}
if (age > 18 && earlyRegister){
  console.log(`Race starts at 9:30 am. Your race number is ${raceNumber}.`);
}
else if (age > 18 && !earlyRegister){
  console.log(`Race starts at 11:00 am. Your race number is ${raceNumber}.`);
}
else if (age < 18)
  {
   console.log(`Race starts at 12:30 pm. Your race number is ${raceNumber}.`);
  }
else{
  console.log('Please see the registration desk.');
}
