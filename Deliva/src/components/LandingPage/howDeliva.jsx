import Maps from "./../../assets/maps.png"




export default function HowDeliva () {
    return (
        <div  className="flex flex-col mt-32 mb-32 space-y-12">
            <div>
                <h1 className="tracking-tight pb-3">How Deliva Pro Works</h1>
                <div className="flex justify-center">
                    <div class="border-t line w-32 border-[6px] solid-3 rounded-full  border-gray-500 relative w-16"></div>
                </div>
            </div>
            <div>
                <img src={Maps} alt="Maps" />
            </div>
            <div>
                <p>
                    Deliva Pro presents an opportunity to level the playing field and provide <br /> affordable and efficient delivery services for all businesses, regardless of their <br /> size. By utilizing technology, we can offer savings on multiple fronts. <br /> Additionally, we can optimize routes using business intelligence, reducing <br /> delivery time and costs. Through Deliva Pro, small businesses can benefit from <br /> reduced delivery expenses and compete on an equal footing with larger <br /> players in the market.
                </p>
            </div>
        </div>
    );
}