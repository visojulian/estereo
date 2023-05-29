import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY);

export default async function sendEmail(req, res) {
  const { body, method } = req;

  // Extract the email and captcha code from the request body
  const { message, fullname, subject, email, captcha } = body;

  if (method === "POST") {
    // If email or captcha are missing return an error
    if (!email || !captcha) {
      return res.status(422).json({
        message: "Unproccesable request, please provide the required fields",
      });
    }

    try {
      const response = await fetch(
        `https://www.google.com/recaptcha/api/siteverify?secret=${process.env.RECAPTCHA_SECRET_KEY}&response=${captcha}`,
        {
          headers: {
            "Content-Type": "application/x-www-form-urlencoded; charset=utf-8",
          },
          method: "POST",
        }
      );
      const captchaValidation = await response.json();

      if (captchaValidation.success) {

        try {
          await sendgrid.send({
            to: 'festivalestereorosario@gmail.com',
            from: 'hola@festivalestereo.com.ar',
            subject: `Nueva consulta web: ${subject}`,
            html: `<!DOCTYPE html PUBLIC "-//W3C//DTD XHTML 1.0 Transitional//EN" "http://www.w3.org/TR/xhtml1/DTD/xhtml1-transitional.dtd">
      <html lang="es">
      <head>
        <meta charset="utf-8">
        <title>Festival Estereo</title>
        <meta name="description" content="Festival Estereo">
        <meta name="author" content="Julian Viso">
      <meta http-equiv="Content-Type" content="text/html charset=UTF-8" />
      </head>
      <body>
        <div style="display: flex;justify-content: center;align-items: center;border-radius: 5px;overflow: hidden;       font-family: 'helvetica', 'ui-sans';">
        </div>
        <div style="margin-left: 20px;margin-right: 20px;">
        <h3>Llegó un nuevo correo de: ${fullname}</h3>
        <br>
        Responder a: ✉️${email} </h3>
        <div style="font-size: 16px;">
        <p>Mensaje:</p>
        <p>${message}</p>
        <br>
        </div>
        <p style="font-size: 16px;padding-bottom: 20px;border-bottom: 1px solid #D1D5DB;">Este correo llega a ustedes gracias a la genialidad de Juli Viso</p>
        </div>
      </body>
            </html>`,
          });
        } catch (error) {
          return res.status(error.statusCode || 500).json({ error: error.message });
        }
        return res.status(200).send("OK");
      }

      return res.status(422).json({
        message: "Unproccesable request, Invalid captcha code",
      });
    } catch (error) {
      console.log(error);
      return res.status(422).json({ message: "Something went wrong" });
    }
  }
  return res.status(404).send("Not found");
};
