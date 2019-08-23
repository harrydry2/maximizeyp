const mongoose = require("mongoose");
const Email = mongoose.model("Email");
var nodemailer = require("nodemailer");

exports.subscribe = async (req, res) => {
  const {name, email, school, desc} = req.body
  try {
    const mongoemail = new Email(req.body).save();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "harrydryofficial@gmail.com",
        pass: "DavidLuiz4"
      }
    });
    const mailOptions = {
      from: `${name} <harrydryofficial@gmail.com>`, // sender address
      to: "jeremydry@hotmail.com, info@maximizeyourpotential.co.uk", // list of receivers
      subject: "Enquiry from our Brand Brand New Website!", // Subject line
      html: `
        DO NOT REPLY TO THIS EMAIL
        REPLY TO SCHOOLS EMAIL<br><br>
        Name: ${name} <br><br>
        Email: ${email} <br><br>
        School: ${school} <br><br>
        Message: ${desc}
      `
    };
    transporter.sendMail(mailOptions, function(err, info) {
      if (err) console.log(err, "false");
      else console.log(info, "true");
    });
    res.json({ email: 'true' });
  } catch (err) {
    console.log(err.response.data.error.code);
  }
};

