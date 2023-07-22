'use client'



function Menu () {
    return (
        <div className="flex flex-row gap-3">
            <button className="cursor-pointer bg-yellow-800 px-4 py-3 text-black border-solid-2 border-black rounded-2xl">Sign In</button>  
            <button className="bg-black cursor-pointer text-white px-4 py-3 rounded-2xl">Sign Up</button>  
        </div>
    )
}

export default Menu