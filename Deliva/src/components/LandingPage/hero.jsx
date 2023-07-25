import heroImage from "../../assets/heroImage.png"

export default function Hero () {
    return (
        <div>
            <div>
                <img src={heroImage} alt="heroImage" />
            </div>
            <div>
                <h1>Experience fast delivery with our technology driven approach</h1>
                <p>Our goal is to provide a cost-effective and convenient solution for small businesses, enabling them to compete with larger players in the market.</p>
                <button>Get our App</button>
            </div>
        </div>
    );
}