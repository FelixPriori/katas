
const monthToString = function(month) {
  switch (month) {
  case 1:
    return 'January';
  case 2:
    return 'February';
  case 3:
    return 'March';
  case 4:
    return 'April';
  case 5:
    return 'May';
  case 6:
    return 'June';
  case 7:
    return 'July';
  case 8:
    return 'August';
  case 9:
    return 'September';
  case 10:
    return 'October';
  case 11:
    return 'November';
  case 12:
    return 'December';
  }
};

const dayToString = function(day) {
  switch (day) {
  case 1:
    return day += 'st';
  case 2:
    return day += 'nd';
  case 3:
    return day += 'rd';
  case 21:
    return day += 'nd';
  case 22:
    return day += 'nd';
  case 23:
    return day += 'rd';
  case 31:
    return day += 'st';
  default:
    return day += 'th';
  }
};

const talkingCalendar = function(date) {
  
  let parsedDate = date.split('/');
  const year = parsedDate[0];

  // takes away the leading 0, then is passed to a helper function to get the day/month as a string in the correct format.
  const month = monthToString(parseInt(parsedDate[1], 10));
  const day = dayToString(parseInt(parsedDate[2], 10));
  
  return `${month} ${day}, ${year}`;

};

console.log(talkingCalendar("2017/12/02"));
console.log(talkingCalendar("2007/11/11"));
console.log(talkingCalendar("1987/08/24"));