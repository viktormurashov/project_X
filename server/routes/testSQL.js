const express = require('express');
const router = express.Router();
const sql = require("mssql");
const excel = require('exceljs');

router.get('/client', async (req, res) => {
    const result = await sql.query`select * from Client`;
    res.send(result.recordset);
});

router.post('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input client') }
    data = req.body;
    await sql.query`INSERT INTO Client(SecondName, FirstName,
        Patronymic, PasportData, Comments) values 
        (${data.SecondName}, ${data.FirstName},
        ${data.Patronymic}, ${data.PasportData},
        ${data.Comments})`;

    res.send('ok');
});

router.put('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input client') }
    data = req.body;
    await sql.query`UPDATE Client SET SecondName=${data.SecondName}, Patronymic=${data.Patronymic},
    FirstName=${data.FirstName}, PasportData=${data.PasportData}, Comments=${data.Comments}
    WHERE ClientID=${data.ClientID}`;

    res.send('ok');
});

router.delete('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input client') }
    data = req.body;
    await sql.query`DELETE FROM Client WHERE ClientID=${data.id}`;

    res.send('ok');
});

router.get('/discount', async (req, res) => {
    const result = await sql.query`select * from Discount`;
    res.send(result.recordset);
});

router.post('/discount', async (req, res) => {
    if (!req.body) { console.log('Invalid input discount') }
    data = req.body;
    await sql.query`INSERT INTO Discount(Name, AmountOfDiscount)
    values (${data.Name}, ${data.AmountOfDiscount})`;

    res.send('ok');
});

router.put('/discount', async (req, res) => {
    if (!req.body) { console.log('Invalid input discount') }
    data = req.body;
    await sql.query`UPDATE Discount SET Name=${data.Name}, AmountOfDiscount=${data.AmountOfDiscount}
    WHERE DiscountID=${data.DiscountID}`;

    res.send('ok');
});

router.delete('/discount', async (req, res) => {
    if (!req.body) { console.log('Invalid input discount') }
    data = req.body;
    await sql.query`DELETE FROM Discount WHERE DiscountID=${data.id}`;

    res.send('ok');
});

router.get('/discountsettling', async (req, res) => {
    const result = await sql.query`select * from Discount_Settling`;
    res.send(result.recordset);
});

router.post('/discountsettling', async (req, res) => {
    if (!req.body) { console.log('Invalid input discount settling') }
    data = req.body;
    await sql.query`INSERT INTO Discount_Settling(WorkID, Name)
    values (${data.WorkID}, ${data.Name})`;

    res.send('ok');
});

router.put('/discountsettling', async (req, res) => {
    if (!req.body) { console.log('Invalid input discount settling') }
    data = req.body;
    await sql.query`UPDATE Employer SET WorkID=${data.WorkID}, Name=${data.Name},
    WHERE EmployerID=${data.EmployerID}`;

    res.send('ok');
});

router.delete('/discountsettling', async (req, res) => {
    if (!req.body) { console.log('Invalid input discount settling') }
    data = req.body;
    await sql.query`DELETE FROM Employer WHERE EmployerID=${data.id}`;

    res.send('ok');
});

router.get('/room', async (req, res) => {
    const result = await sql.query`select * from Room`;
    res.send(result.recordset);
});

router.post('/room', async (req, res) => {
    if (!req.body) { console.log('Invalid input room') }
    data = req.body;
    await sql.query`INSERT INTO JobSeeker(WorkID, Qualification, Misc, AssumedSalary, FirstName, SecondName, ThirdName) 
    values (${data.WorkID}, ${data.Qualification}, ${data.Misc}, ${data.AssumedSalary}, ${data.FirstName}, ${data.SecondName}, ${data.ThirdName})`;

    res.send('ok');
});

router.put('/room', async (req, res) => {
    if (!req.body) { console.log('Invalid input room') }
    data = req.body;
    await sql.query`UPDATE Room SET Number=${data.Number}, Comfort=${data.Comfort},
    NumberOfPeople=${data.NumberOfPeople}, Price=${data.Price}
     WHERE RoomID=${data.RoomID}`;

    res.send('ok');
});

router.delete('/room', async (req, res) => {
    if (!req.body) { console.log('Invalid input room') }
    data = req.body;
    await sql.query`DELETE FROM Room WHERE RoomID=${data.id}`;

    res.send('ok');
});

router.get('/settling', async (req, res) => {
    const result = await sql.query`select * from Settling`;
    res.send(result.recordset);
});

router.post('/settling', async (req, res) => {
    if (!req.body) { console.log('Invalid input settling') }
    data = req.body;
    await sql.query`INSERT INTO typeofwork(ClientID, RoomID, SettlingDate,
    DepartureDate, Note, IsReservation)
    values (${data.ClientID},${data.RoomID},${data.SettlingDate},${data.DepartureDate}
    ${data.Note},${data.IsReservation})`;

    res.send('ok');
});

router.put('/settling', async (req, res) => {
    if (!req.body) { console.log('Invalid input settling') }
    data = req.body;
    await sql.query`UPDATE TypeOfWork SET ClientID=${data.ClientID},
    RoomID=${data.RoomID}, SettlingDate=${data.SettlingDate},
    DepartureDate=${data.DepartureDate}, Note=${data.Note},
    IsReservation=${data.IsReservation}, WHERE SettlingID=${data.SettlingID}`;

    res.send('ok');
});

router.delete('/settling', async (req, res) => {
    if (!req.body) { console.log('Invalid input settling') }
    data = req.body;
    await sql.query`DELETE FROM Settling WHERE Settling=${data.id}`;

    res.send('ok');
});

router.get('/excelsettling', async (req, res) => {
    const result = await sql.query`select * from Settling`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Settling');

    worksheet.columns = [
        { header: 'Id', key: 'SettlingID', width: 10 },
        { header: 'Client id', key: 'ClientID', width: 30 },
        { header: 'Room id', key: 'RoomID', width: 30 },
        { header: 'Settling date', key: 'MiddleName', width: 30 },
        { header: 'Departure date', key: 'DepartureDate', width: 30 },
        { header: 'Note', key: 'Note', width: 30 },
        { header: 'Is reservation', key: 'IsReservation', width: 30 },
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Settling.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/excelroom', async (req, res) => {
    const result = await sql.query`select * from Room`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Room');
    worksheet.columns = [
        { header: 'Id', key: 'RoomID', width: 10 },
        { header: 'Number', key: 'Number', width: 10 },
        { header: 'Number of people', key: 'NumberOfPeople', width: 30 },
        { header: 'Comfort', key: 'Comfort', width: 30},
        { header: 'Price', key: 'Price', width: 30},
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Room.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/excelclient', async (req, res) => {
    const result = await sql.query`select * from Client`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Client');

    worksheet.columns = [
        { header: 'Id', key: 'ClientID', width: 10 },
        { header: 'Second name', key: 'SecondName', width: 30 },
        { header: 'First name', key: 'FirstName', width: 30 },
        { header: 'Patronymic', key: 'Patronymic', width: 30},
        { header: 'Pasport data', key: 'PasportData', width: 30 },
        { header: 'Comments', key: 'Comments', width: 30},
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Client.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/exceldiscountsettling', async (req, res) => {
    const result = await sql.query`select * from Discount_Settling`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Discount_Settling');

    worksheet.columns = [
        { header: 'Settling id', key: 'SettlingID', width: 30 },
        { header: 'Discount id', key: 'DiscountID', width: 30 },
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Discount_Settling.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

router.get('/exceldiscount', async (req, res) => {
    const result = await sql.query`select * from Discount`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Discount');

    worksheet.columns = [
        { header: 'Id', key: 'DiscountID', width: 10 },
        { header: 'Name', key: 'Name', width: 30 },
        { header: 'Amount of discount', key: 'AmountOfDiscount', width: 50 },
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Discount.xlsx');

    return workbook.xlsx.write(res)
          .then(function() {
                res.status(200).end();
          });
});

module.exports = router;