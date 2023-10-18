/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

// Варіант № 1

enum DayofWeek {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}
  // З перевіркою через case
  function isWeekend(day: DayofWeek): boolean {
    switch (day) {
      case DayofWeek.Saturday:
        return true;
        break;
      case DayofWeek.Sunday:
        return true;
        break;
      default:
        return false;
    }
  }



// Варіант № 2

let statusWeekend: boolean = false

enum DayofWeekend {
  Saturday,
  Sunday,
}
// через те що у нас в enum всього 2 записа, якщо передаваєме значення = значеню з enum буде повертатися true
// а десь буде state який будет мати в собі значення за замовченням false при збігі буде true
function isWeekend2(day: DayofWeekend): boolean {
  return true;
}

