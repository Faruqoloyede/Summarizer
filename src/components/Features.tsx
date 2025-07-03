import { features } from "../constants"


const Features = () => {
  return (
    <section className="relative sm:py-12 py-6 bg-gradient-to-b from-[#0E2E2E] to-[#061212]">
        <div className="container">
            <h4 className="sm:text-6xl text-3xl text-white text-center">Powerful Features to Help You<br /> <span className="text-button">Learn</span> Smarter</h4>
            <div className="grid sm:grid-cols-4 grid-cols-1 gap-10 text-white mt-10">
                {features.map((item)=>(
                    <div key={item.id} className="border-[1px] border-button flex flex-col items-center justify-center p-6 rounded-[16px]">
                        <div className="bg-feature h-[72px] w-[72px] flex items-center justify-center rounded-md mb-4">
                            <span className="text-[48px]">{item.icon}</span>
                        </div>
                        <h3 className="text-[20px] leading-[140%] text-center mb-2">{item.title}</h3>
                        <p className="text-[16px] leading-[140%] text-center text-para px-4">{item.content}</p>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default Features