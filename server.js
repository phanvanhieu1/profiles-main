const express = require('express');
const app = express();
const nodemailer = require('nodemailer');

const PORT = process.env.PORT || 3000;
//middleware
app.use(express.static('public'));
app.use(express.json());


app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html');
});

app.post('/', (req, res) => {
  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'hieuvippro2007.yt@gmail.com',
      pass: 'nonjeqrdiapppcyr'
    }
  });
  const mailOptions = {
    from: req.body.email,
    to: 'hieuvippro2007.yt@gmail.com',
    subject: `[ ${req.body.email} ] đã gửi cho bạn 1 tin nhắn với tiêu đề [ ${req.body.subject} ]`,
    text: req.body.message
  }
  const mailOptions1 = {
    from: 'hieuvippro2007.yt@gmail.com',
    to: req.body.email,
    subject: `Xin chào ${req.body.email} !`,
    text: 'Cảm ơn bạn đã gửi tin nhắn cho mình. Mình sẽ liên hệ với bạn trong thời gian sớm nhất. <3'
  }
  transporter.sendMail(mailOptions1, (err, info) => {
    if (err) {
      console.log(err);
    } else {
      console.log(info);
    }
  })
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.send('error');
    } else {
      console.log(info);
      res.send('success');
    }
  })
});

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}!`);
});