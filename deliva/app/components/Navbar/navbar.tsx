import Container from "../container"
import Menu from "./Menu"
import Action from "./actions"

function Navbar () {
    return (
        <div className="fixed w-full bg-white z-10 shadow-sm">
            <div className="py-10 border-b-[1px]">
                <Container>
                    <div className="flex flex-row items-center justify-between gap-3 md:gap-0">
                        <p className="text-3xl cursor-pointer">
                           Deliva Pro
                        </p>
                        <Action />
                        <Menu />
                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar