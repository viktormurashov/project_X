var express = require('express');
var router = express.Router();
var sql = require("mssql");

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
    await sql.query`UPDATE Position SET Name=${data.Name} WHERE PositionID=${data.PositionID}`;

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
    await sql.query`INSERT INTO Deal(name) values (${data.Name})`;

    res.send('ok');
});

router.put('/deal', async (req, res) => {
    if (!req.body) { console.log('Invalid input deal') }
    data = req.body;
    await sql.query`UPDATE Deal SET Name=${data.Name} WHERE DealID=${data.DealID}`;

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
    await sql.query`INSERT INTO Employer(name) values (${data.Name})`;

    res.send('ok');
});

router.put('/employer', async (req, res) => {
    if (!req.body) { console.log('Invalid input employer') }
    data = req.body;
    await sql.query`UPDATE Employer SET Name=${data.Name} WHERE EmployerID=${data.EmployerID}`;

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
    await sql.query`INSERT INTO JobSeeker(name) values (${data.Name})`;

    res.send('ok');
});

router.put('/jobseeker', async (req, res) => {
    if (!req.body) { console.log('Invalid input jobseeker') }
    data = req.body;
    await sql.query`UPDATE JobSeeker SET Name=${data.Name} WHERE SeekerID=${data.SeekerID}`;

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

module.exports = router;