import { works } from "../constants"


const Works = () => {
  return (
    <div className="relative bg-feature py-6">
        <div className="container">
            <h4 className="sm:text-5xl text-3xl text-white text-center capitalize">How it works</h4>
            <p className="text-center text-para">Get started in minutes with these three simple steps</p>
            <div className="grid sm:grid-cols-3 grid-cols-1 gap-10 mt-10">
                {works.map((item, index)=>(
                    <div key={index} className="relative border-[1px] border-button flex flex-col items-center justify-center p-6 rounded-[16px]">
                        <div className="bg-button h-10 w-10 rounded-full absolute -top-5 sm:-left-5">
                            <span className="flex items-center justify-center text-2xl font-bold text-[#0E2E2E]">{index+1}</span>
                        </div>
                        <div className="flex flex-col items-start">
                             <h3 className="text-[20px] leading-[140%] text-white mb-2">{item.title}</h3>
                            <p className="text-[16px] leading-[140%] text-para px-4">
                                {item.content}
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Works