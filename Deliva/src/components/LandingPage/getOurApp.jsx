
import googlePlay from "./../../assets/googlePlay.png"
import Apple from "./../../assets/appleLogo.png"




export default function GetOurApp () {
    return (
        <div>
         <div className="gap-4 flex flex row">
                    <div className="bg-black flex flex-row rounded-2xl w-48">
                        <div className="m-4">
                        <img src={googlePlay} alt="googlePlay" />
                        </div>
                        <div className="pt-2">
                        <p className="text-left text-black">Get it on</p>
                        <h2 className="font-bold text-left text-black">Google Play</h2>
                        </div>
                    </div>
                    <div className="bg-black flex flex-row rounded-2xl w-48">
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
    )
}