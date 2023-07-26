import globe from "./../../assets/globe.png"
import instagram from "./../../assets/instagram.png"
import twitter from "./../../assets/twitter.png"
import facebook from "./../../assets/facebook.png"
import googlePlay from "./../../assets/googlePlay.png"
import Apple from "./../../assets/appleLogo.png"



export default function Footer () {
    return (
        <div className="flex flex-row gap-8">
            <div className="flex-1">
                <h2 className="text-black font-bold text-left">Deliva Pro</h2>
                <div className="mb-6">
                    <p>Visit help center</p>
                    <div className="flex flex-row gap-3">
                        <img src={facebook} alt="" />
                        <img src={twitter} alt="" />
                        <img src={instagram} alt="" />
                    </div>
                </div>
                <div className="flex flex-row gap-2">
                    <img src={globe} alt="" />
                    <h3 className="text-xl text-black">English</h3>
                </div>
            </div>
            <div className="flex-1 flex flex-row">
                <div>
                    <p>Company</p>
                    <ul>
                        <li className="text-black">About Us</li>
                        <li className="text-black">Roadmap</li>
                        <li className="text-black">Blog</li>
                        <li className="text-black">Our Offerings</li>
                    </ul>
                </div>
                <div>
                    <p>Partner With Us</p>
                    <ul>
                        <li className="text-black">Invest in Us</li>
                        <li className="text-black">Become a rider</li>
                        <li className="text-black">Influencers</li>
                        <li className="text-black">Fleets</li>
                    </ul>
                </div>
                <div>
                    <p>Official Info</p>
                    <ul>
                        <li className="text-black"><span>ADDRESS:</span>Lagos, Nigeria</li>
                        <li className="text-black"><span>EMAIL:</span>Deliverpro@ride.ng</li>
                        <li className="text-black"><span>PHONE:</span>+2349137912810</li>
                    </ul>
                </div>
            </div>
            <div></div>
            <div></div>
        </div>
    );
}