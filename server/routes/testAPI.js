const express = require('express');
const router = express.Router();
const sql = require("mssql");
const excel = require('exceljs');

router.get('/rent', async (req, res) => {
    const result = await sql.query`select * from Rent`;
    res.send(result.recordset);
});

router.post('/rent', async (req, res) => {
    if (!req.body) { console.log('Invalid input rent') }
    data = req.body;
    await sql.query`INSERT INTO Rent(RentalID, OutletID, ContractID) values (${data.RentalID}, ${data.OutletID}, ${data.ContractID})`;

    res.send('ok');
});

router.put('/rent', async (req, res) => {
    if (!req.body) { console.log('Invalid input rent') }
    data = req.body;
    await sql.query`UPDATE Rent SET OutletID=${data.OutletID}, ContractID=${data.ContractID} WHERE RentalID=${data.RentalID}`;

    res.send('ok');
});

router.delete('/rent', async (req, res) => {
    if (!req.body) { console.log('Invalid input rent') }
    data = req.body;
    await sql.query`DELETE FROM Rent WHERE RentalID=${data.id}`;

    res.send('ok');
});

router.get('/contract', async (req, res) => {
    const result = await sql.query`select * from Contract`;
    res.send(result.recordset);
});

router.post('/contract', async (req, res) => {
    if (!req.body) { console.log('Invalid input contract') }
    data = req.body;
    await sql.query`INSERT INTO Contract(ClientID, BeginningDate, EndDate) values (${data.ClientID}, ${data.BeginningDate}, ${data.EndDate})`;

    res.send('ok');
});

router.put('/contract', async (req, res) => {
    if (!req.body) { console.log('Invalid input contract') }
    data = req.body;
    await sql.query`UPDATE Contract SET ClientID=${data.ClientID}, BeginningDate=${data.BeginningDate}, EndDate=${data.EndDate} WHERE ContractID=${data.ContractID}`;

    res.send('ok');
});

router.delete('/contract', async (req, res) => {
    if (!req.body) { console.log('Invalid input contract') }
    data = req.body;
    await sql.query`DELETE FROM Contract WHERE ContractID=${data.id}`;

    res.send('ok');
});

router.get('/client', async (req, res) => {
    const result = await sql.query`select * from Client`;
    res.send(result.recordset);
});

router.post('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input client') }
    data = req.body;
    await sql.query`INSERT INTO Client(Title, Requisites, Address, Telephone, ContactPerson) values (${data.Title}, ${data.Requisites}, ${data.Address}, ${data.Telephone}, ${data.ContactPerson})`;

    res.send('ok');
});

router.put('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input client') }
    data = req.body;
    await sql.query`UPDATE Client SET Title=${data.Title}, Requisites=${data.Requisites}, Address=${data.Address}, Telephone=${data.Telephone}, ContactPerson=${data.ContactPerson} WHERE ClientID=${data.ClientID}`;

    res.send('ok');
});

router.delete('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input client') }
    data = req.body;
    await sql.query`DELETE FROM Client WHERE ClientID=${data.id}`;

    res.send('ok');
});

router.get('/outlets', async (req, res) => {
    const result = await sql.query`select * from Outlets`;
    res.send(result.recordset);
});

router.post('/outlets', async (req, res) => {
    if (!req.body) { console.log('Invalid input outlets') }
    data = req.body;
    await sql.query`INSERT INTO Outlets(Floor, Area, WithConditioners, RentalPrice) 
    values (${data.Floor}, ${data.Area}, ${data.WithConditioners}, ${data.RentalPrice})`;

    res.send('ok');
});

router.put('/outlets', async (req, res) => {
    if (!req.body) { console.log('Invalid input outlets') }
    data = req.body;
    await sql.query`UPDATE Outlets SET Floor=${data.Floor},
    Area=${data.Area}, WithConditioners=${data.WithConditioners},
    RentalPrice=${data.RentalPrice}
    WHERE OutletID=${data.OutletID}`;

    res.send('ok');
});

router.delete('/outlets', async (req, res) => {
    if (!req.body) { console.log('Invalid input outlets') }
    data = req.body;
    await sql.query`DELETE FROM Outlets WHERE OutletID=${data.id}`;

    res.send('ok');
});

router.get('/payment', async (req, res) => {
    const result = await sql.query`select * from Payment`;
    res.send(result.recordset);
});

router.post('/payment', async (req, res) => {
    if (!req.body) { console.log('Invalid input payment') }
    data = req.body;
    await sql.query`INSERT INTO Payment(PaymentDate, SummPayment, ContractID) values (${data.PaymentDate}, ${data.SummPayment}, ${data.ContractID})`;

    res.send('ok');
});

router.put('/payment', async (req, res) => {
    if (!req.body) { console.log('Invalid input payment') }
    data = req.body;
    await sql.query`UPDATE Payment SET PaymentDate=${data.PaymentDate}, SummPayment=${data.SummPayment}, ContractID=${data.ContractID} WHERE PaymentID=${data.PaymentID}`;

    res.send('ok');
});

router.delete('/payment', async (req, res) => {
    if (!req.body) { console.log('Invalid input payment') }
    data = req.body;
    await sql.query`DELETE FROM Payment WHERE WorkID=${data.id}`;

    res.send('ok');
});

router.get('/exceltypeofwork', async (req, res) => {
    const result = await sql.query`select * from TypeOfWork`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('TypeOfWork');

    worksheet.columns = [
        { header: 'Id', key: 'WorkID', width: 10 },
        { header: 'Name', key: 'Name', width: 30 },
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'TypeOfWork.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/excelemployer', async (req, res) => {
    const result = await sql.query`select * from Employer`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Employer');
    worksheet.columns = [
        { header: 'Id', key: 'EmployerID', width: 10 },
        { header: 'Id', key: 'WorkID', width: 10 },
        { header: 'Name', key: 'Name', width: 30 },
        { header: 'Address', key: 'Address', width: 30},
        { header: 'PhoneNumber', key: 'PhoneNumber', width: 30},
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Employer.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/exceljobseeker', async (req, res) => {
    const result = await sql.query`select * from JobSeeker`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('JobSeeker');

    worksheet.columns = [
        { header: 'Id', key: 'SeekerID', width: 10 },
        { header: 'Second name', key: 'SecondName', width: 30 },
        { header: 'First name', key: 'FirstName', width: 30 },
        { header: 'Third name', key: 'ThirdName', width: 30},
        { header: 'Qualification', key: 'Qualification', width: 30 },
        { header: 'Assumed salary', key: 'AssumedSalary', width: 30},
        { header: 'Misc', key: 'Misc', width: 30},
        { header: 'Work ID', key: 'WorkID', width: 10 },
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'JobSeeker.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/exceloutlets', async (req, res) => {
    const result = await sql.query`select * from Outlets`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Outlets');

    worksheet.columns = [
        { header: 'Outlet ID', key: 'OutletID', width: 20 },
        { header: 'Floor', key: 'Floor', width: 20 },
        { header: 'Area', key: 'Area', width: 20 },
        { header: 'With Conditioners', key: 'WithConditioners', width: 20 },
        { header: 'Rental Price', key: 'RentalPrice', width: 20 },
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Outlets.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/excelpositions', async (req, res) => {
    const result = await sql.query`select * from Position`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Position');

    worksheet.columns = [
        { header: 'Id', key: 'PositionID', width: 10 },
        { header: 'Employer Id', key: 'EmployerID', width: 30 },
        { header: 'Position name', key: 'PositionName', width: 30 },
        { header: 'Salary', key: 'Salary', width: 30},
        { header: 'Open ?', key: 'IsOpen', width: 30},
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Position.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

module.exports = router;