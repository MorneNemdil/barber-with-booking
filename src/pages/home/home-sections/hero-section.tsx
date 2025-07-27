import Pic2 from '@/assets/hero-pictures/hero-pic-2.jpeg';
import Pic3 from '@/assets/hero-pictures/hero-pic-3.jpeg';
import Pic5 from '@/assets/hero-pictures/hero-pic-5.jpeg';
import MobilePicture from '@/assets/hero-pictures/mobile-hero.jpeg';
import { Button } from '@/components/ui/button';
import { Scissors } from 'lucide-react';

const HeroSection = () => {
    return (
        <>
            <div id="hero" className="items-center h-screen-minus-header overflow-x-hidden hidden sm:flex relative">
                <img
                    src={Pic2}
                    alt=""
                    className="w-full h-full"
                />
                <img
                    src={Pic3}
                    alt=""
                    className="w-full h-full"
                />
                <img
                    src={Pic5}
                    alt=""
                    className="w-full h-full hidden xl:flex"
                />
            </div>
            <div id="hero" className="block sm:hidden h-[93vh] relative">
                <img
                    src={MobilePicture}
                    alt=""
                    className="w-full h-full object-cover"
                />
                <Button onClick={() => window.open("https://book.squareup.com/appointments/v2jf4gqxpigym7/location/LYFN8NM0H2R11/services")} className="absolute bottom-25 left-1/2 -translate-x-1/2 z-10 !text-gray-100">
                    BOOK NOW <Scissors />
                </Button>
            </div>
        </>
    )
}
export default HeroSection