import Link from "next/link";
import { Power } from 'lucide-react';
import NavLinks from "@/components/nav-link";
import {logout} from "@/app/(auth)/actions";
import Image from "next/image";

export default function Sidenav() {
    return (
        <div className="flex h-full flex-col px-3 py-4 md:px-2">
            {/*<Link*/}
            {/*    className="mb-2 flex h-20 items-end justify-start rounded-md bg-blue-600 p-4 md:h-40"*/}
            {/*    href="/"*/}
            {/*>*/}
            {/*    <div className="w-32 text-white md:w-40">*/}
            {/*        <p>MrBig</p>*/}
            {/*    </div>*/}
            {/*</Link>*/}
            <div className="flex grow flex-row justify-between space-x-2 md:flex-col md:space-x-0 md:space-y-2">
                <Link
                    className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium md:flex-none md:justify-start md:p-2 md:px-3"
                    href="/"
                >
                    <Image src="/Logo.png" alt="Logo" width={30} height={30} />
                    <div className="w-32 md:w-40 font-bold text-xl">
                        <p>Mr Big</p>
                    </div>
                </Link>
                <NavLinks/>
                <div className="hidden h-auto w-full grow rounded-md bg-gray-50 md:block"></div>
                <form action={logout}>
                    <button
                        className="flex h-[48px] w-full grow items-center justify-center gap-2 rounded-md bg-gray-50 p-3 text-sm font-medium hover:bg-sky-100 hover:text-blue-600 md:flex-none md:justify-start md:p-2 md:px-3">
                        <Power className="w-6"/>
                        <div className="hidden md:block">Sign Out</div>
                    </button>
                </form>
            </div>
        </div>
    )
}