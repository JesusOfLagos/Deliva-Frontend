import globe from "./../../assets/globe.png"
import instagram from "./../../assets/instagram.png"
import twitter from "./../../assets/twitter.png"
import facebook from "./../../assets/facebook.png"
import googlePlay from "./../../assets/googlePlay.png"
import Apple from "./../../assets/appleLogo.png"



export default function Footer () {
    return (
        <div>
            <div>
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
                    <h3 className="text-2xl text-black">English</h3>
                </div>
            </div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}