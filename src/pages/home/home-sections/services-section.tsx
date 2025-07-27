import {
    Scissors,
    UserCog,
    ShowerHead,
    Baby,
    Activity,
    Droplets,
} from 'lucide-react';

const ServicesSection = () => {

    const onCardClick = () => window.open("https://book.squareup.com/appointments/v2jf4gqxpigym7/location/LYFN8NM0H2R11/services")

    return (
        <div id="services" className="px-4 md:px-20 lg:px-40 xl:px-60 py-10 flex flex-col gap-10">
            <div className="flex flex-col xl:flex-row gap-10 lg:gap-20">
                <div onClick={onCardClick} className="bg-white w-full xl:w-[40rem] h-auto p-6 text-[var(--background)] hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="h-full w-full flex flex-col items-center gap-3 text-center">
                        <Scissors className="text-red-600" size={48} />
                        <h1 className="text-xl md:text-2xl underline">Haircut & Styling</h1>
                        <p className="text-base md:text-lg">
                            Precision haircuts tailored to your style, finished with a professional blow-dry and styling for a clean, sharp look.
                        </p>
                    </div>
                </div>
                <div onClick={onCardClick} className="bg-white w-full xl:w-[40rem] h-auto p-6 text-[var(--background)] hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="h-full w-full flex flex-col items-center gap-3 text-center">
                        <UserCog className="text-red-600" size={48} />
                        <h1 className="text-xl md:text-2xl underline">Beard Trim & Shape-Up</h1>
                        <p className="text-base md:text-lg">
                            Keep your beard looking sharp with expert trimming and shaping tailored to your facial structure and personal style.
                        </p>
                    </div>
                </div>
                <div onClick={onCardClick} className="bg-white w-full xl:w-[40rem] h-auto p-6 text-[var(--background)] hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="h-full w-full flex flex-col items-center gap-3 text-center">
                        <ShowerHead className="text-red-600" size={48} />
                        <h1 className="text-xl md:text-2xl underline">Hot Towel Shave</h1>
                        <p className="text-base md:text-lg">
                            A classic straight razor shave paired with hot towels and rich lather for the ultimate grooming experience.
                        </p>
                    </div>
                </div>
            </div>

            <div className="flex flex-col xl:flex-row gap-10 lg:gap-20">
                <div onClick={onCardClick} className="bg-white w-full xl:w-[40rem] h-auto p-6 text-[var(--background)] hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="h-full w-full flex flex-col items-center gap-3 text-center">
                        <Baby className="text-red-600" size={48} />
                        <h1 className="text-xl md:text-2xl underline">Kids' Haircuts</h1>
                        <p className="text-base md:text-lg">
                            Friendly and professional haircuts for children of all ages in a relaxed, kid-friendly environment.
                        </p>
                    </div>
                </div>
                <div onClick={onCardClick} className="bg-white w-full xl:w-[40rem] h-auto p-6 text-[var(--background)] hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="h-full w-full flex flex-col items-center gap-3 text-center">
                        <Activity className="text-red-600" size={48} />
                        <h1 className="text-xl md:text-2xl underline">Fade & Taper</h1>
                        <p className="text-base md:text-lg">
                            Clean fades and tapers executed with precision—perfect for modern styles and timeless classics.
                        </p>
                    </div>
                </div>
                <div onClick={onCardClick} className="bg-white w-full xl:w-[40rem] h-auto p-6 text-[var(--background)] hover:cursor-pointer hover:scale-105 transition-transform duration-300">
                    <div className="h-full w-full flex flex-col items-center gap-3 text-center">
                        <Droplets className="text-red-600" size={48} />
                        <h1 className="text-xl md:text-2xl underline">Hair & Scalp Treatment</h1>
                        <p className="text-base md:text-lg">
                            Rejuvenating treatments designed to strengthen your hair and revitalize your scalp for healthier growth.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ServicesSection