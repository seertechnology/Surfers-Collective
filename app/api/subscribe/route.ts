import { ClientResponse } from "@sendgrid/mail";
import { NextResponse } from "next/server";

const client = require('@sendgrid/client');

export async function PUT(req: Request) {
    client.setApiKey(process.env.SENDGRID_API_KEY)

    const { email } = await req.json()
    const data = {
        "contacts": [
            {
                "email": email
            }
        ]
    }

    const request = {
        url: `https://api.sendgrid.com/v3/marketing/contacts`,
        method: 'PUT',
        body: data
    }

    client.request(request)
    .then((response: { statusCode: any; body: any; }) => {
        console.log(response.statusCode);
        console.log(response.body);

        return NextResponse.json({ message: 'Success', success: true})
    })
    .catch((error: any) => {
        console.error(error);

        return NextResponse.json({ message: 'Failed', success: false})
    });

    return NextResponse.json({ message: 'Failed', success: false})
 
}