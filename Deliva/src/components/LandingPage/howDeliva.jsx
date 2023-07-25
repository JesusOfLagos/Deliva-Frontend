import Maps from "./../../assets/maps.png"




export default function HowDeliva () {
    return (
        <div  className="flex flex-col mt-32 mb-32 space-y-12">
            <div>
                <h1>How Deliva Pro Works</h1>
                <div className="line"></div>
            </div>
            <div>
                <img src={Maps} alt="Maps" />
            </div>
            <div>
                <p>
                    Deliva Pro presents an opportunity to level the playing field and provide affordable and efficient delivery services for all businesses, regardless of their size. By utilizing technology, we can offer savings on multiple fronts. Additionally, we can optimize routes using business intelligence, reducing delivery time and costs. Through Deliva Pro, small businesses can benefit from reduced delivery expenses and compete on an equal footing with larger players in the market.
                </p>
            </div>
        </div>
    );
}