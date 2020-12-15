export const documentColumns = [
    { title: 'Document Id', field: 'DocumentId'},
    {title: 'Categories Products Id', field: 'CategoriesProductsId'},
    {title: 'Client Id', field: 'ClientId'},
    {title: 'Product Description', field: 'ProductDescription'},
    { title: 'Sum', field: 'Sum'},
    { title: 'Commission', field: 'Commission'},
    { title: 'Beggining Date', field: 'BegginingDate'},
    { title: 'End Date', field: 'EndDate'},
];

export const clientColumns = [
    { title: 'Client ID', field: 'ClientId'},
    { title: 'Second Name', field: 'SecondName'},
    { title: 'First Name', field: 'FirstName'},
    { title: 'Patronymic', field: 'Patronymic'},
    { title: 'Pasport Number', field: 'PasportNumber'},
    { title: 'Pasport Series', field: 'PasportSeries'},
    { title: 'Passport Issue Date', field: 'PassportIssueDate'},
];

export const categoriesproductsColumns = [
    { title: 'Categories Products Id', field: 'CategoriesProductsId'},
    { title: 'Name', field: 'Name'},
    { title: 'Description', field: 'Description'},
];

export const historyColumns = [
    { title: 'Document Id', field: 'DocumentId'},
    { title: 'Pricing Date', field: 'PricingDate'},
    { title: 'Price', field: 'Price'},
    { title: 'Sold Out', field: 'SoldOut'},
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
