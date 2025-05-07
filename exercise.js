import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';

const today = dayjs();
const todayAdd = today.add(1,'month');
const dateString = todayAdd.format('MMMM, dddd, YYYY');
const dateSubtract = today.subtract(1, 'month');
const subtractFormat = dateSubtract.format('MMMM, D, YYYY')
console.log(dateString);
console.log(subtractFormat);

function isWeekendDate(date) {
  const dayOfWeek = date.format('dddd');
  if(dayOfWeek === 'Saturday' || dayOfWeek === 'Sunday') {
    return dayOfWeek
  } else {
    return 'You have to work NOW!'
  }
}

let date = dayjs();

console.log(isWeekendDate(date));

date = date.add(3, 'days');
console.log(date)
console.log(isWeekendDate(date))
