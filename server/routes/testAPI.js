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
    await sql.query`INSERT INTO Client(SecondName, FirstName, Patronymic, PasportNumber, PasportSeries, PassportIssueDate) values (${data.SecondName}, ${data.FirstName}, ${data.Patronymic}, ${data.PasportNumber}, ${data.PasportSeries}, ${data.PassportIssueDate})`;

    res.send('ok');
});

router.put('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input positions') }
    data = req.body;
    await sql.query`UPDATE Client SET SecondName=${data.SecondName}, FirstName=${data.FirstName}, Patronymic=${data.Patronymic}, PasportNumber=${data.PasportNumber}, PasportSeries=${data.PasportSeries}, PassportIssueDate=${data.PassportIssueDate} WHERE ClientId=${data.ClientId}`;

    res.send('ok');
});

router.delete('/client', async (req, res) => {
    if (!req.body) { console.log('Invalid input positions') }
    data = req.body;
    await sql.query`DELETE FROM Client WHERE Clientid=${data.id}`;

    res.send('ok');
});

router.get('/document', async (req, res) => {
    const result = await sql.query`select * from Document`;
    res.send(result.recordset);
});
router.post('/document', async (req, res) => {
    if (!req.body) { console.log('Invalid input deal') }
    data = req.body;
    await sql.query`INSERT INTO Document(CategoriesProductsId, ClientId, ProductDescription, Commission, Sum, BegginingDate, EndDate) values (${data.CategoriesProductsId}, ${data.ClientId}, ${data.ProductDescription}, ${data.Commission}, ${data.Sum}, ${data.BegginingDate}, ${data.EndDate})`;

    res.send('ok');
});

router.put('/document', async (req, res) => {
    if (!req.body) { console.log('Invalid input deal') }
    data = req.body;
    await sql.query`UPDATE Document SET CategoriesProductsId=${data.CategoriesProductsId}, ClientId=${data.ClientId}, ProductDescription=${data.ProductDescription}, Commission=${data.Commission}, Sum=${data.Sum}, BegginingDate${data.BegginingDate}, EndDate=${data.EndDate}  WHERE DocumentId=${data.DocumentId}`;

    res.send('ok');
});

router.delete('/document', async (req, res) => {
    if (!req.body) { console.log('Invalid input deal') }
    data = req.body;
    await sql.query`DELETE FROM Document WHERE DocumentId=${data.id}`;

    res.send('ok');
});

router.get('/categoriesproducts', async (req, res) => {
    const result = await sql.query`select * from Categories_Products`;
    res.send(result.recordset);
});

router.post('/categoriesproducts', async (req, res) => {
    if (!req.body) { console.log('Invalid input employer') }
    data = req.body;
    await sql.query`INSERT INTO Categories_Products(Name, Description) values (${data.Name}, ${data.Description},)`;

    res.send('ok');
});

router.put('/categoriesproducts', async (req, res) => {
    if (!req.body) { console.log('Invalid input employer') }
    data = req.body;
    await sql.query`UPDATE Categories_Products SET Name=${data.Name}, Description=${data.Description} WHERE EmployerID=${data.CategoriesProductsId}`;

    res.send('ok');
});

router.delete('/categoriesproducts', async (req, res) => {
    if (!req.body) { console.log('Invalid input v') }
    data = req.body;
    await sql.query`DELETE FROM Categories_Products WHERE CategoriesProductsId=${data.id}`;

    res.send('ok');
});

router.get('/pricehistory', async (req, res) => {
    const result = await sql.query`select * from Price_History`;
    res.send(result.recordset);
});

router.post('/pricehistory', async (req, res) => {
    if (!req.body) { console.log('Invalid input jobseeker') }
    data = req.body;
    await sql.query`INSERT INTO Price_History(DocumentId, PricingDate, Price, SoldOut) 
    values (${data.DocumentId}, ${data.PricingDate}, ${data.Price}, ${data.SoldOut})`;

    res.send('ok');
});

router.put('/pricehistory', async (req, res) => {
    if (!req.body) { console.log('Invalid input jobseeker') }
    data = req.body;
    await sql.query`UPDATE Price_History SET DocumentId=${data.DocumentId}, PricingDate=${data.PricingDate}, Price=${data.Price}, SoldOut=${data.SoldOut} WHERE HistoryId=${data.HistoryId}`;

    res.send('ok');
});

router.delete('/pricehistory', async (req, res) => {
    if (!req.body) { console.log('Invalid input jobseeker') }
    data = req.body;
    await sql.query`DELETE FROM Price_History WHERE HistoryId=${data.id}`;

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