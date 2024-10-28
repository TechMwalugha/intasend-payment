import PaymentButton from "@/components/cards/PaymentButton"
import { getServerSession } from "next-auth"
import Image from "next/image"
import { redirect } from "next/navigation"

export default async function Home() {

    const session = await getServerSession()

    if(!session) {
        redirect('/api/auth/signin')
    }

    return(
        <div>
            <h2 className="text-center text-[2rem] font-mono text-white mb-5">
                Make Payment
            </h2>

            <div>
                <div>
                    <div className="flex items-center gap-4 mb-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 512 512"><path fill="currentColor" d="M32 376a56 56 0 0 0 56 56h336a56 56 0 0 0 56-56V222H32Zm66-76a30 30 0 0 1 30-30h48a30 30 0 0 1 30 30v20a30 30 0 0 1-30 30h-48a30 30 0 0 1-30-30ZM424 80H88a56 56 0 0 0-56 56v26h448v-26a56 56 0 0 0-56-56"/></svg>
                    <h3>Bank Cards</h3>
                    </div>
                    <div className="flex items-center gap-4 bg-white rounded-sm">
                        <Image
                        src="/assets/provider-credit-card.svg"
                        width={40}
                        height={40}
                        alt="Visa and mastercard Logo"
                        className="w-24"
                        />
                        <h3>Visa / MasterCard</h3>
                    </div>
                </div>


                <div className="mt-3">
                    <div className="flex items-center gap-4 mb-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><path fill="currentColor" d="M14 13q-1.25 0-2.125-.875T11 10t.875-2.125T14 7t2.125.875T17 10t-.875 2.125T14 13m-7 3q-.825 0-1.412-.587T5 14V6q0-.825.588-1.412T7 4h14q.825 0 1.413.588T23 6v8q0 .825-.587 1.413T21 16zm2-2h10q0-.825.588-1.412T21 12V8q-.825 0-1.412-.587T19 6H9q0 .825-.587 1.413T7 8v4q.825 0 1.413.588T9 14m11 6H3q-.825 0-1.412-.587T1 18V7h2v11h17zM7 14V6z"/></svg>
                    <h3>E-Payments</h3>
                    </div>

                <div className="lg:flex lg:items-center lg:gap-2">
                    <div className="flex items-center gap-4 bg-white rounded-sm p-2 lg:flex-auto">
                        <Image
                        src="/assets/pesa-link-logo.jpg"
                        width={40}
                        height={40}
                        alt="Pesa Link Logo"
                        className="w-16"
                        />
                        <h3>Pesa Link</h3>
                    </div>

                    <div className="flex items-center gap-4 bg-white rounded-sm mt-2 p-2 lg:flex-auto lg:mt-0">
                        <Image
                        src="/assets/m-pesa.svg"
                        width={40}
                        height={40}
                        alt="M-pesa Logo"
                        className="w-16"
                        />
                        <h3>M-pesa</h3>
                    </div>
                </div>
                </div>

                <div className="mt-3">
                    <div className="flex items-center gap-4 mb-4 text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="1em" height="1em" viewBox="0 0 24 24"><g fill="none"><path d="m12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.018-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z"/><path fill="currentColor" d="M19 4a2 2 0 0 1 2 2v1h-6a5 5 0 0 0 0 10h6v1a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2zm1 5a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2h-5a3 3 0 1 1 0-6zm-5 2a1 1 0 1 0 0 2a1 1 0 0 0 0-2"/></g></svg>
                    <h3>Digital Wallet</h3>
                    </div>

                    <div className="lg:flex lg:items-center lg:gap-2">

                    <div className="flex items-center gap-4 bg-white rounded-sm p-2 lg:flex-auto">
                        <Image
                        src="/assets/apple-pay.webp"
                        width={40}
                        height={40}
                        alt="Apple Pay Logo"
                        className="w-16"
                        />
                        <h3>Apple Pay</h3>
                    </div>

                    <div className="flex items-center gap-4 bg-white rounded-sm mt-2 p-2 lg:flex-auto lg:mt-0">
                        <Image
                        src="/assets/binance.svg"
                        width={40}
                        height={40}
                        alt="Binance Logo"
                        className="w-16"
                        />
                        <h3>Binance Pay</h3>
                    </div>
                    </div>

                </div>
            </div>

            <PaymentButton />

            <img 
            src="/assets/secure-checkout.png"
            alt="Secure Checkout"
            className="my-4 w-full object-cover rounded-sm"
            />
        </div>
    )
}