import heroImage from "../../assets/heroImage.png"
import { Link } from "react-router-dom";

export default function Hero () {
    return (
        <div className="flex flex-row justify-center mt-32 mb-32 items-center space-x-6">
            <div className="flex-1 h-90">
                <img className="" src={heroImage} alt="heroImage" />
            </div>
            <div className=" flex-1">
                <h1 className="text-black text-left">Experience fast <br /> delivery with our <br /> technology driven <br /> approach</h1>
                <p className="text-black text-left mt-6">Our goal is to provide a cost-effective and <br /> convenient solution for small businesses, enabling <br /> them to compete with larger players in the market.</p>
                <button className="bg-black text-white float-left mt-4 rounded-full p-[-2]"><Link to="/get-our-app">Get our App</Link></button>
            </div>
        </div>
    );
}