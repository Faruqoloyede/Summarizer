import { nav_links } from "../constants"


const Navbar = () => {
   return (
   <header className='fixed top-0 left-0 w-full py-6 z-40'>
    <nav className='container flex items-center justify-between'>
        <a href="" className="flex items-center gap-3">
            <img src="/Logo.svg" alt="logo" />
            <span className="text-[20px] font-bold font-poppins text-white">Summerizer</span>
        </a>
        <ul className="list-none flex items-center justify-end">
            {nav_links.map((item)=>(
                <li key={item.id}><a href={`#${item.id}`} className="text-sm text-white font-light font-poppins mr-4 capitalize">{item.link}</a></li>
            ))}
        </ul>
        {/* link */}
        <button className="bg-button text-[#0E2E2E] text-sm font-poppins py-3 px-6 rounded-[20px] cursor-pointer">Get Started</button>
    </nav>
   </header>
  )
}

export default Navbar