import Link from "next/link"

type ButtonProps ={
    title: string;
    to: string
}

const Button = ({title, to}:ButtonProps ) => {
  return (
    <Link href={to} className="bg-button text-[#0E2E2E] text-sm font-poppins py-3 px-6 rounded-[20px] cursor-pointer">{title}</Link>
  )
}

export default Button