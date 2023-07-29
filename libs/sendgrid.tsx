import sendgrid from '@sendgrid/mail';

sendgrid.setApiKey(process.env.SENDGRID_API_KEY as string);

const SendGridMailer = async (subject:string,text:string) => {
  const email = {
    to:process.env.SENDGRID_TO_EMAIL as string,
    from:process.env.SENDGRID_FROM_EMAIL as string,
    subject: subject,
    text: text,
  };

  try {
    await sendgrid.send(email).then((res)=>
      console.log(res)
    )
  } catch (error) {
      console.log(error)
  }
};

export { SendGridMailer };