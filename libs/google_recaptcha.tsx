

async function verifyGoogleRecaptcha(recaptchatoken: any) {

    let response = await fetch('https://www.google.com/recaptcha/api/siteverify',
        {
            method: 'post',
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: `secret=${process.env.GOOGLE_RECAPTCHA_SECRET_KEY}&response=${recaptchatoken}`,
        })
    return await response.json()
}

export default verifyGoogleRecaptcha;