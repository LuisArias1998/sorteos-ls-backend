var nodemailer = require("nodemailer");
const connection = require('./config/connection');

const route = require('express').Router()

route.get('/', (req, res) => {
    let sql = 'select * from Clientes';
    connection.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json(rows)
        }
    })
})

route.post('/cliente', (req, res) => {
    const clienteInfo = req.body;

    let sql = `insert into Clientes(id, nombre, apellidos, celular, estado, municipio_cd) values(${clienteInfo.id},'${clienteInfo.nombre}','${clienteInfo.apellidos}','${clienteInfo.celular}','${clienteInfo.municipio_cd}','${clienteInfo.estado}')`
    connection.query(sql, (err, rows, fields) => {
        if (err) {
            throw err;
        } else {
            res.json({ status: 'Cliente agregado' });
        }
    })
})


route.post("/email-sender", async (req, res) => {
    let emailInfo = req.body

    var transporter = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        auth: {
            user: "sort.ls2023@gmail.com",
            pass: "ikurpokkxrthhurj"
        }
    })
    var mailOptions = {
        from: "Remittance",
        to: "ariasmontoya_luis@hotmail.com",
        subject: `Sorteos LS - Boleto #${emailInfo.id}`,
        attachments: [{
            filename: 'sorteos-ls-big.png',
            path: __dirname + '/assets/sorteos-ls-big.png',
            cid: 'logo' //my mistake was putting "cid:logo@cid" here! 
        }],
        html: `<img src="cid:logo">
        <h2>Sorteos - LS</h2>
        <hr>
        <h4>Boleto #: ${emailInfo.id}</h4>
        <h4>Celular: ${emailInfo.celular}</h4>
        <h4><b>Nombre completo:</b> ${emailInfo.nombre} ${emailInfo.apellidos}</h4>
        <h4><b>Estado: </b> ${emailInfo.estado}</h4>
        <h4><b>Municipio/Ciudad: </b> ${emailInfo.municipio_cd}</h4>
        `
    }
    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            res.status(500).send(error.message)
        } else {
            console.log('Email enviado');
            res.status(200).jsonp('Prceso completado')
        }
    })
});

module.exports = route;