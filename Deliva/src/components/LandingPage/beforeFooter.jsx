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
                </div>
                <div></div>
            </div>
        </div>
    );
}