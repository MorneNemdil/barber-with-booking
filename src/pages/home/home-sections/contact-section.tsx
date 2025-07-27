import { Button } from "@/components/ui/button"
import { Scissors } from "lucide-react"

const ContactSection = () => {
    return (
        <div id="contact" className="w-screen px-20 py-40 flex flex-col gap-20">
            <div className="flex flex-col lg:flex-row justify-center items-center gap-20">
                <div className="flex flex-col w-95 lg:w-auto gap-8">
                    <h1 className="text-4xl lg:text-5xl font-semibold">Get in touch</h1>
                    <ul className="text-xl flex flex-col gap-5">
                        <li>
                            <h3 className="font-bold">Phone number:</h3>
                            <p>07123 456789</p>
                        </li>
                        <li>
                            <h3 className="font-bold">Instagram:</h3>
                            <p className="hover:cursor-pointer hover:underline" onClick={() => window.open("https://www.instagram.com/")}>@your_instagram_page</p>
                        </li>
                        <li>
                            <h3 className="font-bold">Opening Hours:</h3>
                            <p>[Opening hours here]</p>
                        </li>
                        <li>
                            <Button onClick={() => window.open("https://book.squareup.com/appointments/v2jf4gqxpigym7/location/LYFN8NM0H2R11/services")} className="!text-gray-100 mt-2 w-full">
                                BOOK NOW <Scissors />
                            </Button>
                        </li>
                    </ul>
                </div>
                <div>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1495.1230221979201!2d-1.2015518945775507!3d50.93320275886506!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2suk!4v1753655384133!5m2!1sen!2suk"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                        className="border rounded-xl shadow-xl w-95 h-90 lg:w-130 lg:h-110"
                    />
                </div>
            </div>
        </div>
    )
}

export default ContactSection