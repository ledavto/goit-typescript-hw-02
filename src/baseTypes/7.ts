/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/
enum Days {
  SUNDAY = "Day off",
  MONDAY = "Work day",
  TUESDAY = "Work day",
  WEDNESDAY = "Work day",
  THURSDAY = "Work day",
  FRIDAY = "Work day",
  SATURDAYS = "Day off",
}
function isWeekend(whatDay: string) {
  console.log(whatDay);
}

isWeekend(Days.MONDAY);
