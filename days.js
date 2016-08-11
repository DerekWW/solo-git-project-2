
function daysInMonth(month){
  var days = 0;

  if (month === 'January' || month === 'March' || month === 'May' || month === 'July' || month === 'August' || month === 'October' || month === 'December') {
    days = 31
  }else if (month === 'February') {
    days = 28
  }else if (month === 'April' || month === 'June' || month === 'September' || month === 'November' ) {
    days = 30
  }

  for (var i = 1; i === days.length; i++) {
    console.log(month + ' ' + i );
  }

}

daysInMonth('March');
