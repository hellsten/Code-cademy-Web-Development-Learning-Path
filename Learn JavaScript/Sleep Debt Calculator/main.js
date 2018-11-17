const getSleepHours = day => {
  if (day === 'Monday'){
    return 8;
  } else if(day === 'Tuesday'){
    return 3;
  } else if(day === 'Wednesday'){
    return 5;
  } else if(day === 'Thursday'){
    return 8;
  } else if(day === 'Friday'){
    return 9;
  } else if(day === 'Saturday'){
    return 5;
  } else if (day === 'Sunday'){
    return 8;
  }
}
console.log(getSleepHours('Tuesday'));
const getActualSleepHours = () => {
  return getSleepHours('Monday') +getSleepHours('Tuesday') +getSleepHours('Wednesday')+getSleepHours('Thursday')+getSleepHours('Friday')+getSleepHours('Saturday') +getSleepHours('Sunday');
}
const getIdealSleepHours = idealHours => {
  return idealHours*7;
}
console.log(getActualSleepHours());
console.log(getIdealSleepHours(10));
const calculateSleepDebt = () => {
  actualSleepHours = getActualSleepHours();
  idealSleepHours = getIdealSleepHours(8);
  if (actualSleepHours === idealSleepHours)
    console.log('Perfect Amount');
  else if (actualSleepHours > idealSleepHours)
    console.log(`More Sleep than Needed by ${actualSleepHours-idealSleepHours}.`);
  else
    console.log(`Get More Rest by ${idealSleepHours - actualSleepHours}`);
}
calculateSleepDebt();
