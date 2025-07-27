import Image from '@/assets/about-picture.jpeg'

const AboutSection = () => {
    return (
        <div id="about" className="w-screen flex flex-col items-center justify-center p-40">
            <div className="flex flex-col lg:flex-row w-auto sm:w-[30rem] lg:w-[70rem] gap-10">
                <div className="flex flex-col gap-10 w-full lg:w-1/2">
                    <h1 className="text-4xl lg:text-5xl font-semibold">Professionally cutting hair since 1962</h1>
                    <img
                        src={Image}
                        alt=""
                    />
                </div>
                <div className="flex flex-col w-full lg:w-1/2 pt-2">
                    <div className='text-xl lg:text-2xl flex flex-col gap-14'>
                        <p>
                            At our barbershop, tradition meets precision. Since 1962, we’ve delivered expert haircuts and grooming tailored to each client. With timeless techniques and a sharp eye for detail, we make sure every guest leaves confident and looking their best.
                        </p>
                        <p>
                            Whether you want a classic cut, a modern style, or a clean shave, our experienced barbers bring skill and care to every appointment. Step into a space where craftsmanship counts — because great grooming never goes out of style.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutSection