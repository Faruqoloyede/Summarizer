
type ButtonProps ={
    title: string;
}

const Button = ({title}:ButtonProps ) => {
  return (
    <button className="bg-button text-[#0E2E2E] text-sm font-poppins py-3 px-6 rounded-[20px] cursor-pointer">{title}</button>
  )
}

export default Button