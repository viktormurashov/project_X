export const dealColumns = [
    { title: 'Deal ID', field: 'DealID'},
    { title: 'Date of deal', field: 'DateOfDeal'},
    { title: 'Seeker ID', field: 'SeekerID' },
    { title: 'Position ID', field: 'PositionID'},
    { title: 'Commission', field: 'Commission'},
];

export const employerColumns = [
    { title: 'Employer ID', field: 'EmployerID'},
    { title: 'Work ID', field: 'WorkID' },
    { title: 'Name', field: 'Name'},
    { title: 'Address', field: 'Address'},
    { title: 'Phone number', field: 'PhoneNumber'},
];

export const seekerColumns = [
    { title: 'Seeker ID', field: 'SeekerID' },
    { title: 'Work ID', field: 'WorkID' },
    { title: 'Second name', field: 'SecondName' },
    { title: 'First name', field: 'FirstName'  },
    { title: 'Third name', field: 'ThirdName' },
    { title: 'Qualification', field: 'Qualification' },
    { title: 'Assumed salary', field: 'AssumedSalary' },
];

export const positionsColumns = [
    { title: 'Position ID', field: 'PositionID'},
    { title: 'Employer ID', field: 'EmployerID' },
    { title: 'Position name', field: 'PositionName'},
    { title: 'Salary', field: 'Salary'},
    { title: 'Open?', field: 'IsOpen'}
];

export const typeofwork = [
    { title: 'Work ID', field: 'WorkID' },
    { title: 'Name', field: 'Name'},
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

export const rentColumns = [
    { title: 'Rental ID', field: 'RentalID'},
    { title: 'Outlet ID', field: 'OutletID'},
    { title: 'Contract ID', field: 'ContractID' },
];

export const contractColumns = [
    { title: 'Contract ID', field: 'ContractID'},
    { title: 'Client ID', field: 'ClientID'},
    { title: 'Beginning Date', field: 'BeginningDate' },
    { title: 'End Date', field: 'EndDate'},
];

export const clientColumns = [
    { title: 'Client ID', field: 'ClientID'},
    { title: 'Title', field: 'Title'},
    { title: 'Requisites', field: 'Requisites' },
    { title: 'Address', field: 'Address'},
    { title: 'Telephone', field: 'Telephone' },
    { title: 'ContactPerson', field: 'ContactPerson' },
];

export const outletsColumns = [
    { title: 'Outlet ID', field: 'OutletID'},
    { title: 'Floor', field: 'Floor'},
    { title: 'Area', field: 'Area' },
    { title: 'With Conditioners', field: 'WithConditioners'},
    { title: 'Rental Price', field: 'RentalPrice' },
];

export const paymentColumns = [
    { title: 'Payment ID', field: 'PaymentID'},
    { title: 'Payment Date', field: 'PaymentDate'},
    { title: 'Summ Payment', field: 'SummPayment'},
    { title: 'Contract ID', field: 'ContractID'},
];
