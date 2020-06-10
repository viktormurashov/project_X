export const employeeColumns = [
    { title: 'Surname', field: 'Surname'},
    { title: 'Name', field: 'Name' },
    { title: 'Middle name', field: 'MiddleName'},
    { title: 'Salary', field: 'Salary'},
];

export const finalsalaryColumns = [
    { title: 'Day of payment', field: 'Pay_day'},
    { title: 'Payment', field: 'Payment_for_work' },
    { title: 'Total', field: 'Itog'},
];

export const employeeworkColumns = [
    { title: 'Employee code', field: 'Employee_code' },
    { title: 'Work code', field: 'Work_code' },
    { title: 'Type work code', field: 'Code_type_work' },
];

export const workColumns = [
    { title: 'Start date', field: 'Date_start'},
    { title: 'End date', field: 'Date_end' },
    { title: 'Deadline', field: 'Deadline'},
    { title: 'Need employee', field: 'Need_Employee'},
];

export const typeofworkColumns = [
    { title: 'Definition', field: 'Definition' },
    { title: 'Payment for work', field: 'Payment_for_work'},
];

export const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
];

export const arr = [
    0,0,0,0,0,0,0,0,0,0,0,0
];

export const GetFormattedDate = (date) => {
    const formatedDate = date;
    let month = formatedDate.getMonth() + 1;
    let day = formatedDate.getDate();
    let monthNumber = month-1;
    const year = formatedDate.getFullYear().toString();

    if (month < 10) {
        month = `0${month}`
    }
    if (day < 10) {
        day = `0${day}`
    }

    const newDate = year + "." + month + "." + day;

    return {newDate, year, month, monthNumber};
}
