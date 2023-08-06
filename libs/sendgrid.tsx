import sendgrid from "@sendgrid/mail";

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

async function SendGridMailer(subject: string, text: string) {
  const email = {
    to: process.env.SENDGRID_TO_EMAIL as string,
    from: process.env.SENDGRID_FROM_EMAIL as string,
    subject: subject,
    text: text,
  };

  await sendgrid.send(email).then((res) => {
    if (res[0].statusCode == 202) {
      return true;
    }
  });

  return false;
}

export default SendGridMailer;
