import PaymentButton from "@/components/cards/PaymentButton"
import { getServerSession } from "next-auth"
import { redirect } from "next/navigation"

export default async function Home() {

    const session = await getServerSession()

    if(!session) {
        redirect('/api/auth/signin')
    }

    return(
        <div>
            <h2 className="text-center text-[2rem]">
                Welcome back <span className="text-blue-400">{session?.user?.name}</span>
            </h2>

            <PaymentButton />
        </div>
    )
}