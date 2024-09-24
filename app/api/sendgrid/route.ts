import { ResponseError } from "@sendgrid/mail";
import { NextResponse } from "next/server";

const sgMail = require('@sendgrid/mail');

export async function POST(request: Request) {

    console.log("start server")
    // load api key
    sgMail.setApiKey(process.env.SENDGRID_API_KEY!);

    const { name, email, service, files, fileContents, message } = await request.json()

    console.log('filesContents - name:', fileContents.length)
    // console.log('files:', fileContents["content"])



     const loadFiles = () => {
        console.log('attaching files...');

        if (files) {
            console.log('attachments exist')
            let attachments = []
            console.log('starting attachments process');
            for (let i = 0; i < files.length; i++ ) {
                attachments.push({
                    content: fileContents[i]["content"].slice(22),
                    filename: fileContents[i]["name"],
                    type: fileContents[i]["type"],
                    disposition: 'attachment',
                    content_id: `id ${i}`
                })
            }
            console.log("Attachments:", attachments)
            return attachments
        } else {
            return []
        }
     }

    

    const msg = {
        to: "",
        from: "",
        subject: `You have a new ${service} request from ${name} at ${email}`,
        html: 
        `<div>
            <b><u>New Request Received</u></b>
            <br/>
            <br/>
            <b>Name</b>: ${name}
            <br/>
            <b>Email Address</b>: ${email}
            <br/>
            <b>Service Type</b>: ${service}
            <br/>
            <br/>
            <b><u>Message</u></b>
            <br/>
            ${message}
        </div>`,
        attachments: loadFiles()
    }

    sgMail
    .send(msg)
    .then(() => {}, (error: ResponseError) => {
        console.error(error);
    
        if (error.response) {
          console.error(error.response.body)
        }

        return NextResponse.json({ message: 'Failed', success: false})
      });

    return NextResponse.json({ message: 'Success', success: true})
};