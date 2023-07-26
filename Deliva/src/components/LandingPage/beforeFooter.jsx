import googlePlay from "./../../assets/googlePlay.png"
import Apple from "./../../assets/appleLogo.png"
import footerMap from "./../../assets/footerMap.png"





export default function BeforeFooter () {
    return (
        <div className="flex bg-gray-500 flex-row mt-32 mb-32 space-x-6">
            <div className="flex-1">
                <img src={footerMap} alt="" />
            </div>
            <div className="flex-1">
                <div>
                    <h2>Download <br /> Deliva Pro Now</h2>
                    <p>Get Started and deliva your packages safely and faster. Get Deliva pro now.</p>
                </div>
                <div>
                    <div className="bg-white">
                        <div>
                        <img src={googlePlay} alt="googlePlay" />
                        </div>
                        <div>
                        <p>Get it on</p>
                        <h2>Google Play</h2>
                        </div>
                    </div>
                    <div className="bg-white flex-row">
                        <div>
                        <img src={Apple} alt="Apple Store" />
                        </div>
                        <div>
                        <p>Get it on</p>
                        <h2>Apple Store</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}