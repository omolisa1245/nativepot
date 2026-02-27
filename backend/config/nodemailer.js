import nodemailer from "nodemailer"

const transporter = nodemailer.createTransport({
 host: "smtp.resend.com",
  port: 465,
  secure: false, 
  auth: {
    user: "resend",
    pass: "re_KyPDudAu_F4n26zreGiZrfUNs8GVu7uHE",
  },
});

export default transporter;