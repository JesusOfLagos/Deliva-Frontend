import Navbar from "./LandingPage/navbar"
import Hero from "./LandingPage/hero"
import HowDeliva from "./LandingPage/howDeliva"
import Steps from "./LandingPage/steps"
import OurServices from "./LandingPage/ourServices"
import BeforeFooter from "./LandingPage/beforeFooter"
import Footer from "./LandingPage/footer"
import GetOurApp from "./LandingPage/getOurApp"
import Last from "./LandingPage/last"

function Home () {
    return (
        <>
        <Navbar />
        <Hero />
        <HowDeliva />
        <Steps />
        <OurServices />
        <BeforeFooter />
        <Footer /> 
        <GetOurApp />
        <Last />
        </>
    )
}

export default Home
