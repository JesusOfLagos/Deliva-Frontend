import Rider from "./../../assets/rider.png"
import Arrow from "./../../assets/arrow.png"
import Dollar from "./../../assets/dollar.png"
import Motorcycle from "./../../assets/motorcycle.png"
import Home from "./../../assets/home.png"




export default function Steps () {
    return (
        <div className="flex flex-row mt-32 mb-32 justify-center space-x-6">
            <div className="flex-1 justify-center">
                <div>
                    <div className="-px-10">
                <h2 className="tracking-tight text-3xl font-bold text-left text-black pb-3">Steps To Use</h2>
                <div className="flex">
                    <div class="border-t line w-32 border-[6px] solid-3 rounded-full  border-gray-500 relative w-16"></div>
                </div>
                     </div>
                <div className="grid grid-cols-2 grid-rows-2 px-9 mt-8 items-center gap-4">
                    <div className="mt-3 mb-4">
                        <img src={Arrow} alt="" />
                        <p className="text-left">Download <br />Deliva Pro</p>
                    </div>
                    <div className="mt-3 mb-4">
                        <img src={Dollar} alt="" />
                        <p className="text-left">Bargain Price</p>
                    </div>
                    <div className="mt-3 mb-4">
                        <img src={Motorcycle} alt="" />
                        <p className="text-left">Find Rider</p>
                    </div>
                    <div className="mt-3 mb-4">
                        <img src={Home} alt="" />
                        <p className="text-left">Track Deliver<br />To Destination</p>
                    </div>
                </div>
                </div>
                <div></div>
            </div>
            <div className="flex-1">
                <img src={Rider} alt="" />
            </div>
        </div>
    );
}