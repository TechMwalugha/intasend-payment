'use client'
import * as z from "zod"

const trimString: any = (u: unknown) => typeof u === "string" ? u.replaceAll(' ','') : u;

export const checkOutSchema = z.object({
    fullName: z.string().min(5, { message: 'Please enter your fullname'}).max(50, { message: 'Too long'}),
    amount: z.preprocess((value) => Number(value), z.number().min(10, { message: "Minimum is Ksh. 10" })),
    email: z.preprocess(trimString, z.string().min(4, {message: 'Email is too short'}).max(50, {message: 'too long'}).email("This is not a valid email.").email()),
    phoneNumber: z.preprocess(trimString, z.string().refine(phoneNumber => /^(07\d|01\d|2547\d|2541\d)\d{7}$/.test(phoneNumber), {
        message: 'Invalid M-PESA phone number format'
    })),
})