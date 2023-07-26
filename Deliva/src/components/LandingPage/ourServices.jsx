import girlWithMap from "./../../assets/girlWithMap.png"
import Location from "./../../assets/location.png"
import Payment from "./../../assets/payment.png"
import DeliveryCartoon from "./../../assets/deliveryCartoon.png"




export default function OurServices () {
    return (
        <div>
            <div>
            <h1 className="tracking-tight font-bold text-3xl text-left text-black pb-3">Our Services</h1>
                <div className="flex">
                    <div class="border-t line w-32 border-[6px] solid-3 rounded-full  border-gray-500 relative w-16"></div>
                </div>
            </div>
            <div className="grid grid-cols-2 grid-rows-2 mt-8 items-center gap-10">
                <div className="bg-gray-400 h-48 relative flex flex-col rounded-2xl">
                    <h2 className="font-bold text-black text-3xl text-left m-3">Location Selection</h2>
                    <p className="text-left text-black ml-3">Choose location in easy <br /> with inbuilt maps</p>
                    <img className="absolute h-32 w-32 bottom-2 right-6" src={Location} alt="" />
                </div>
                <div className="bg-gray-400 h-48 relative flex flex-col rounded-2xl">
                    <h2 className="font-bold text-black text-3xl text-left m-3">Optimal Routing</h2>
                    <p className="text-left text-black ml-3">Avoids traffic with <br /> Intelligence and <br /> technology</p>
                    <img className="absolute h-32 w-32 bottom-2 right-6" src={DeliveryCartoon} alt="" />
                </div>
                <div className="bg-gray-400 h-48 relative flex flex-col rounded-2xl">
                    <h2 className="font-bold text-black text-3xl text-left m-3">Bidding System</h2>
                    <p className="text-left text-black ml-3">Pick price reasonable <br /> just for you</p>
                    <img className="absolute h-32 w-32 bottom-2 right-6" src={Payment} alt="" />
                </div>
                <div className="bg-gray-400 h-48 relative flex flex-col rounded-2xl">
                    <h2 className="font-bold text-black text-3xl text-left m-3">Tracking</h2>
                    <p className="text-left text-black ml-3">You can track your <br /> package once on the <br /> move</p>
                    <img className="absolute h-32 w-32 bottom-2 right-6" src={girlWithMap} alt="" />
                </div>
            </div>
        </div>
    );
}