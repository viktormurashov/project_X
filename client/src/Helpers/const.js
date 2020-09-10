export const clientColumns = [
    { title: 'Second name', field: 'SecondName'},
    { title: 'First name', field: 'FirstName' },
    { title: 'Patronymic', field: 'Patronymic'},
    { title: 'Pasport data', field: 'PasportData'},
    { title: 'Comments', field: 'Comments'},
];

export const discountColumns = [
    { title: 'Name', field: 'Name'},
    { title: 'Amount of discount', field: 'AmountOfDiscount' },
];

export const roomColumns = [
    { title: 'Number', field: 'Number' },
    { title: 'Number of people', field: 'NumberOfPeople' },
    { title: 'Comfort', field: 'Comfort' },
    { title: 'Price', field: 'Price' },
];

export const settlingColumns = [
    { title: 'Settling date', field: 'SettlingDate' },
    { title: 'Departure date', field: 'DepartureDate' },
    { title: 'Note', field: 'Note' },
    { title: 'Is reservation?', field: 'IsReservation' },
    { title: 'Client id', field: 'ClientID'},
    { title: 'Room id', field: 'RoomID'},
];

export const discountsettlingColumns = [
    { title: 'Settling id', field: 'SettlingID' },
    { title: 'Discount id', field: 'DiscountID'},
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
