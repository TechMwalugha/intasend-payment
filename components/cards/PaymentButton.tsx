'use client'
import {
    AlertDialog,
    AlertDialogAction,
    AlertDialogCancel,
    AlertDialogContent,
    AlertDialogDescription,
    AlertDialogFooter,
    AlertDialogHeader,
    AlertDialogTitle,
    AlertDialogTrigger,
  } from "@/components/ui/alert-dialog"
import Image from "next/image"
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "../ui/form"
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { checkOutSchema } from "@/lib/validation.zod";
import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { z } from "zod"
import { Button } from "../ui/button";
import { useState } from "react";
import { useRouter } from "next/navigation";
  
const PaymentButton = () => {
    const [isLoading, setIsLoading] = useState(false)
    const router = useRouter()

    const form = useForm<z.infer<typeof checkOutSchema>>({
        resolver: zodResolver(checkOutSchema),
        defaultValues: {
            fullName: '',
            amount: 10,
            email: '',
            phoneNumber: ''
        }
    })

  const notifyError = ({
        message
    }: {
        message: string
    }) => toast.error(message, {
        position: 'top-right',
        toastId: "error",
        theme: "dark"
    })
    
     const notifySuccess = ({ 
        message
    } : {
        message: string
    }) => toast.success(message, {
        position: 'top-right',
        toastId: "success",
        theme: "dark"
    })

    
    async function onSubmit(values: z.infer<typeof checkOutSchema>) {

        try {
            setIsLoading(true)
        const apiRef = crypto.randomUUID().slice(0, 5);
        const data = {
            public_key: process.env.NEXT_PUBLIC_INTASEND_PUBLIC_KEY,
            first_name: values.fullName,
            email: values.email,
            phone_number: values.phoneNumber,
            host: 'https://localhost:3000',
            amount: values.amount,
            currency: 'KES',
            api_ref: apiRef,
        }

        const response = await fetch('https://payment.intasend.com/api/v1/checkout/', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        const responseData = await response.json()
        if(!response.ok) {
            setIsLoading(false)
            console.log('An error occurred')
            notifyError({message: 'An error occurred. Please try again.'})

            return
        }
        
        
        notifySuccess({
          message: "Initiated. Please wait"
        })
        setIsLoading(false)
        router.push(responseData.url)
            
        } catch (error: any) {
            console.log(error)
            notifyError({ message: 'An error occurred. Please try again' })
        }
    }
  return (
    <AlertDialog>
      <AlertDialogTrigger className="w-full mt-5 bg-green-600 p-1.5 rounded-md hover:bg-green-300 delay-200">
        <div className="flex items-center justify-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M13 6a1 1 0 1 0-2 0v5H6a1 1 0 1 0 0 2h5v5a1 1 0 1 0 2 0v-5h5a1 1 0 1 0 0-2h-5z"/></svg>
          Deposit
        </div> 
      </AlertDialogTrigger>
        <AlertDialogContent>
            <AlertDialogHeader>
            <AlertDialogTitle>Enter your details</AlertDialogTitle>
            <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="w-full shadow-md p-5 rounded-md">
            <ToastContainer />
                <h5 className="text-heading4-medium font-serif text-center mb-4">Enter your details to make Payment</h5>
                <FormField
                control={form.control}
                name='fullName'
                render={( { field} ) => (
                    <FormItem
                    className="my-3"
                    >
                        <FormLabel className="block text-black text-left">Full Name</FormLabel>
                        <FormControl>
                            <input 
                            placeholder="Joe Doe" 
                            {...field}
                            className="w-full border-none outline-none p-3 shadow-md rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="text-tiny-medium text-red-500"/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name='amount'
                render={( { field} ) => (
                    <FormItem
                    className="my-3"
                    >
                        <FormLabel className="block text-black text-left">Amount in Ksh.</FormLabel>
                        <FormControl>
                            <input
                            type="number" 
                            placeholder="1000" 
                            {...field}
                            className="w-full border-none outline-none p-3 shadow-md rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="text-tiny-medium text-red-500"/>
                    </FormItem>
                )}
                />

              <FormField
                control={form.control}
                name='email'
                render={( { field} ) => (
                    <FormItem
                    className="my-3"
                    >
                        <FormLabel className="block text-black text-left">Email</FormLabel>
                        <FormControl>
                            <input 
                            type='email'
                            placeholder="joedoe@gmail.com" 
                            {...field}
                            className="w-full border-none outline-none p-3 shadow-md rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="text-tiny-medium text-red-500"/>
                    </FormItem>
                )}
                />

                <FormField
                control={form.control}
                name='phoneNumber'
                render={( { field} ) => (
                    <FormItem
                    className="my-3"
                    >
                        <FormLabel className="block text-black text-left">Phone Number</FormLabel>
                        <FormControl>
                            <input 
                            placeholder="2547**********" 
                            {...field}
                            className="w-full border-none outline-none p-3 shadow-md rounded-sm"
                            />
                        </FormControl>
                        <FormMessage className="text-tiny-medium text-red-500"/>
                    </FormItem>
                )}
                />

                <Button
                type="submit"
                className="w-full"
                disabled={isLoading}
                >
                    {isLoading ? 'Loading....' : 'Pay'}
                </Button>
            </form>
        </Form>
            <AlertDialogDescription></AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            </AlertDialogFooter>
        </AlertDialogContent>
    </AlertDialog>
  )
}

export default PaymentButton
