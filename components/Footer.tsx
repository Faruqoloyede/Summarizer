import { nav_links } from "@/constant";


const Footer = () => {
  return (
    <footer className="relative sm:py-16 py-6 bg-gradient-to-b from-[#0E2E2E] to-[#061212]">
        <div className="container grid sm:grid-cols-3 grid-cols-1 gap-5">
            <div className="flex flex-col items-center">
                <a href="/" className="flex items-center gap-3">
                    <img src="/Logo.svg" alt="logo" />
                    <span className="text-[20px] font-bold font-poppins text-white">Summerizer</span>
                </a>
                <p className="text-base text-para text-center my-4 max-w-lg mx-auto lg:mx-0">Empowering smarter note-taking with AI, organize, summarize, and focus on what truly matters.</p>
            </div>
           <div className="flex flex-col items-center">
                <h4 className="text-[20px] text-para font-semibold">Quick links</h4>
                <ul className="list-none my-4 flex flex-col items-center">
                    {nav_links.map((items)=>(
                        <li key={items.id}>
                            <a href={`#${items.id}`} className="text-sm text-white font-light font-poppins capitalize">{items.link}</a>
                        </li>
                    ))}
                </ul>
           </div>
           <div className="flex flex-col items-center">
                <h4 className="text-[20px] text-para font-semibold">Contacts</h4>
                <p className="text-sm text-white font-light font-poppins mt-5 text-center">support@summerizer.com</p>
           </div>
        </div>
    </footer>
  )
}

export default Footer