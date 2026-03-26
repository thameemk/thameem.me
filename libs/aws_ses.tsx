import {SESClient, SendEmailCommand} from "@aws-sdk/client-ses";

const ses = new SESClient({
    region: process.env.AWS_SES_REGION as string,
    credentials: {
        accessKeyId: process.env.AWS_ACCESS_KEY_ID as string,
        secretAccessKey: process.env.AWS_SECRET_ACCESS_KEY as string,
    },
});

async function SESMailer(subject: string, text: string): Promise<boolean> {
    const command = new SendEmailCommand({
        Destination: {
            ToAddresses: [process.env.AWS_SES_TO_EMAIL as string],
        },
        Message: {
            Body: {
                Text: {Data: text},
            },
            Subject: {Data: subject},
        },
        Source: process.env.AWS_SES_FROM_EMAIL as string,
    });

    try {
        await ses.send(command);
        return true;
    } catch {
        return false;
    }
}

export default SESMailer;
