

const Hero = () => {
  return (
    <section className='relative h-screen bg-[#061212]'>
        <div className="container mx-auto px-4 pt-32 flex max-lg:flex-col items-center justify-between gap-10">
            <div className="flex-1 text-center lg:text-left">
                <h1 className="font-poppins font-bold text-[32px] sm:text-[40px] lg:text-[48px] leading-tight text-white capitalize">AI-Powered Notes.Organize and Summarize in Seconds</h1>
                <p className="text-base text-para mt-4 max-w-lg mx-auto lg:mx-0">Let AI organize & summarize your notes, saving you time and boosting productivity</p>
            </div>
            <div className="flex-1 flex justify-center">
                <img src="/hero.png" alt="hero" className="w-[300px] sm:w-[360px] md:w-[440px] lg:w-[500px] h-auto object-contain" />
            </div>
        </div>
    </section>
  )
}

export default Hero