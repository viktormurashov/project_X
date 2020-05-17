const express = require('express');
const router = express.Router();
const sql = require("mssql");
const excel = require('exceljs');

router.get('/positions', async (req, res) => {
    const result = await sql.query`select * from Position`;
    res.send(result.recordset);
});

router.post('/positions', async (req, res) => {
    if (!req.body) { console.log('Invalid input positions') }
    data = req.body;
    await sql.query`INSERT INTO Position(EmployerID, PositionName, Salary, IsOpen) values (${data.EmployerID}, ${data.PositionName}, ${data.Salary}, ${data.IsOpen})`;

    res.send('ok');
});

router.put('/positions', async (req, res) => {
    if (!req.body) { console.log('Invalid input positions') }
    data = req.body;
    await sql.query`UPDATE Position SET EmployerID=${data.EmployerID}, PositionName=${data.PositionName}, Salary=${data.Salary}, IsOpen=${data.IsOpen} WHERE PositionID=${data.PositionID}`;

    res.send('ok');
});

router.delete('/positions', async (req, res) => {
    if (!req.body) { console.log('Invalid input positions') }
    data = req.body;
    await sql.query`DELETE FROM Position WHERE PositionID=${data.id}`;

    res.send('ok');
});

router.get('/deal', async (req, res) => {
    const result = await sql.query`select * from Deal`;
    res.send(result.recordset);
});
router.post('/deal', async (req, res) => {
    if (!req.body) { console.log('Invalid input deal') }
    data = req.body;
    await sql.query`INSERT INTO Deal(SeekerID, PositionID, DateOfDeal, Commission) values (${data.SeekerID}, ${data.PositionID}, ${data.DateOfDeal}, ${data.Commission})`;

    res.send('ok');
});

router.put('/deal', async (req, res) => {
    if (!req.body) { console.log('Invalid input deal') }
    data = req.body;
    await sql.query`UPDATE Deal SET SeekerID=${data.SeekerID}, PositionID=${data.PositionID}, DateOfDeal=${data.DateOfDeal}, Commission=${data.Commission} WHERE DealID=${data.DealID}`;

    res.send('ok');
});

router.delete('/deal', async (req, res) => {
    if (!req.body) { console.log('Invalid input deal') }
    data = req.body;
    await sql.query`DELETE FROM Deal WHERE DealID=${data.id}`;

    res.send('ok');
});

router.get('/employer', async (req, res) => {
    const result = await sql.query`select * from Employer`;
    res.send(result.recordset);
});

router.post('/employer', async (req, res) => {
    if (!req.body) { console.log('Invalid input employer') }
    data = req.body;
    await sql.query`INSERT INTO Employer(WorkID, Name, Address, PhoneNumber) values (${data.WorkID}, ${data.Name}, ${data.Address}, ${data.PhoneNumber})`;

    res.send('ok');
});

router.put('/employer', async (req, res) => {
    if (!req.body) { console.log('Invalid input employer') }
    data = req.body;
    await sql.query`UPDATE Employer SET WorkID=${data.WorkID}, Name=${data.Name}, Address=${data.Address}, PhoneNumber=${data.PhoneNumber} WHERE EmployerID=${data.EmployerID}`;

    res.send('ok');
});

router.delete('/employer', async (req, res) => {
    if (!req.body) { console.log('Invalid input v') }
    data = req.body;
    await sql.query`DELETE FROM Employer WHERE EmployerID=${data.id}`;

    res.send('ok');
});

router.get('/jobseeker', async (req, res) => {
    const result = await sql.query`select * from JobSeeker`;
    res.send(result.recordset);
});

router.post('/jobseeker', async (req, res) => {
    if (!req.body) { console.log('Invalid input jobseeker') }
    data = req.body;
    await sql.query`INSERT INTO JobSeeker(WorkID, Qualification, Misc, AssumedSalary, FirstName, SecondName, ThirdName) 
    values (${data.WorkID}, ${data.Qualification}, ${data.Misc}, ${data.AssumedSalary}, ${data.FirstName}, ${data.SecondName}, ${data.ThirdName})`;

    res.send('ok');
});

router.put('/jobseeker', async (req, res) => {
    if (!req.body) { console.log('Invalid input jobseeker') }
    data = req.body;
    await sql.query`UPDATE JobSeeker SET WorkID=${data.WorkID}, Qualification=${data.Qualification}, Misc=${data.Misc}, AssumedSalary=${data.AssumedSalary},
     FirstName=${data.FirstName}, SecondName=${data.SecondName}, ThirdName=${data.ThirdName} WHERE SeekerID=${data.SeekerID}`;

    res.send('ok');
});

router.delete('/jobseeker', async (req, res) => {
    if (!req.body) { console.log('Invalid input jobseeker') }
    data = req.body;
    await sql.query`DELETE FROM JobSeeker WHERE SeekerID=${data.id}`;

    res.send('ok');
});

router.get('/typeofwork', async (req, res) => {
    const result = await sql.query`select * from TypeOfWork`;
    res.send(result.recordset);
});

router.post('/typeofwork', async (req, res) => {
    if (!req.body) { console.log('Invalid input typeofwork') }
    data = req.body;
    await sql.query`INSERT INTO typeofwork(name) values (${data.Name})`;

    res.send('ok');
});

router.put('/typeofwork', async (req, res) => {
    if (!req.body) { console.log('Invalid input typeofwork') }
    data = req.body;
    await sql.query`UPDATE TypeOfWork SET Name=${data.Name} WHERE WorkID=${data.WorkID}`;

    res.send('ok');
});

router.delete('/typeofwork', async (req, res) => {
    if (!req.body) { console.log('Invalid input typeofwork') }
    data = req.body;
    await sql.query`DELETE FROM TypeOfWork WHERE WorkID=${data.id}`;

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

router.get('/exceldeal', async (req, res) => {
    const result = await sql.query`select * from Deal`;
    const json = JSON.parse(JSON.stringify(result.recordset));

    let workbook = new excel.Workbook();
    let worksheet = workbook.addWorksheet('Deal');

    worksheet.columns = [
        { header: 'Id', key: 'DealID', width: 20 },
        { header: 'Seeker Id', key: 'SeekerID', width: 20 },
        { header: 'Position Id', key: 'PositionID', width: 30 },
        { header: 'Date of deal', key: 'DateOfDeal', width: 30 },
        { header: 'Commission', key: 'Commission', width: 30},
    ];

    worksheet.addRows(json);

    res.setHeader('Content-Type', 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet');
    res.setHeader('Content-Disposition', 'attachment; filename=' + 'Deal.xlsx');

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