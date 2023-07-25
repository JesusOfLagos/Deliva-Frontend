import heroImage from "../../assets/heroImage.png"

export default function Hero () {
    return (
        <div className="flex flex-row">
            <div>
                <img className="h-60 w-80" src={heroImage} alt="heroImage" />
            </div>
            <div>
                <h1>Experience fast <br /> delivery with our <br /> technology driven <br /> approach</h1>
                <p>Our goal is to provide a cost-effective and convenient solution for small businesses, enabling them to compete with larger players in the market.</p>
                <button className="bg-black text-white -p-2">Get our App</button>
            </div>
        </div>
    );
}