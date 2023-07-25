import googlePlay from "./../../assets/googlePlay.png"
import Apple from "./../../assets/appleLogo.png"
import footerMap from "./../../assets/footerMap.png"





export default function BeforeFooter () {
    return (
        <div className="flex flex-row mt-32 mb-32 space-x-6">
            <div>
                <img src={footerMap} alt="" />
            </div>
            <div>
                <div>
                    <h2>Download <br /> Deliva Pro Now</h2>
                </div>
                <div></div>
            </div>
        </div>
    );
}