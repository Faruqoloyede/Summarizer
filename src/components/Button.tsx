import { Link } from "react-router-dom"

type ButtonProps ={
    title: string;
    to: string
}

const Button = ({title, to}:ButtonProps ) => {
  return (
    <Link to={to} className="bg-button text-[#0E2E2E] text-sm font-poppins py-3 px-6 rounded-[20px] cursor-pointer">{title}</Link>
  )
}

export default Button