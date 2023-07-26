import googlePlay from "./../../assets/googlePlay.png"
import Apple from "./../../assets/appleLogo.png"
import footerMap from "./../../assets/footerMap.png"





export default function BeforeFooter () {
    return (
        <div className="flex rounded-3xl bg-gray-500 flex-row mt-32 mb-32 space-x-16">
            <div className="flex-1">
                <img src={footerMap} alt="" />
            </div>
            <div className="flex-1 mt-[10rem] justify-center">
                <div className="m-4 mt-8 mb-16">
                    <h2 className="font-bold text-4xl text-left">Download <br /> Deliva Pro Now</h2>
                    <p className="text-left">Get Started and deliva your packages safely and <br /> faster. Get Deliva pro now.</p>
                </div>
                <div className="gap-4 flex flex row">
                    <div className="bg-white flex flex-row rounded-2xl w-48">
                        <div className="m-4">
                        <img src={googlePlay} alt="googlePlay" />
                        </div>
                        <div className="pt-2">
                        <p className="text-left text-black">Get it on</p>
                        <h2 className="font-bold text-left text-black">Google Play</h2>
                        </div>
                    </div>
                    <div className="bg-white flex flex-row rounded-2xl w-48">
                        <div className="m-4">
                        <img src={Apple} alt="Apple Store" />
                        </div>
                        <div className="pt-2">
                        <p className="text-left text-black">Get it on</p>
                        <h2 className="font-bold text-left text-black">Apple Store</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}