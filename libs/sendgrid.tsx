import sendgrid from '@sendgrid/mail';


const SendGridMailer = async (subject:string,text:string) => {
  const email = {
    to:process.env.SENDGRID_TO_EMAIL as string,
    from:process.env.SENDGRID_FROM_EMAIL as string,
    subject: subject,
    text: text,
  };

  try {
    await sendgrid.send(email);
  } catch (error) {
    throw new Error('Email could not be sent, Please try again later');
  }
};

export { SendGridMailer };