import girlWithMap from "./../../assets/girlWithMap.png"
import Location from "./../../assets/location.png"
import Payment from "./../../assets/payment.png"
import DeliveryCartoon from "./../../assets/deliveryCartoon.png"




export default function OurServices () {
    return (
        <div>
            <div>
                <h2>Our Services</h2>
                <p></p>
            </div>
            <div>
                <div>
                    <img src={location} alt="" />
                </div>
                <div>
                    <img src={DeliveryCartoon} alt="" />
                </div>
                <div>
                    <img src={Payment} alt="" />
                </div>
                <div>
                    <img src={girlWithMap} alt="" />
                </div>
            </div>
        </div>
    );
}