/*
 * Project : thameem.me
 * Filename : Header.tsx
 * Author : thameem
 * Modified time : Sun, 15 Jan 2023 at 5:33 pm India Standard Time
 */


import Image from "next/image";


function HeaderItem({text, href, company}: { text: any, href: any, company: any }) {
    return (
        <p className="text-sm text-gray-700 mb-1">
            ▶ {text}
            <a rel="noreferrer" href={href} target="_blank"
               className="font-semibold">&nbsp;{company}</a>
        </p>
    )
}

function Header() {
    return (
        <header className="border-solid border-0 border-b border-gray-300 pb-3 mb-10">
            <div className="flex flex-col-reverse sm:flex-row items-start pt-10 justify-between">
                <div className="flex flex-col sm:pr-28">
                    <h1 className="font-black text-4xl md:text-6xl tracking-tight mb-3 text-black">
                        Thameem K&nbsp;&nbsp;&nbsp;
                    </h1>
                    <h2 className="text-gray-700 mb-4">
                        Developer with a keen interest in cyber security
                    </h2>

                    <HeaderItem text={"Product Engineer at"} href={"https://www.ust.com/"} company={"UST"}/>
                    <HeaderItem text={"Connect with me on"} href={"https://www.linkedin.com/in/thameem-karakkoth/"}
                                company={"LinkedIn"}/>
                    <HeaderItem text={"View codes on"} href={"https://github.com/thameemk612/"} company={"GitHub"}/>

                </div>
                <div className="w-[100px] sm:w-[176px] relative mb-4 sm:mb-0">
                    <Image
                        src="/static/images/self.png"
                        width="1540" height="1592" alt="Thameem Karakkoth"
                        className="shadow-lg rounded-full border border-gray-300"/>
                </div>
            </div>
        </header>
    )
}

export default Header