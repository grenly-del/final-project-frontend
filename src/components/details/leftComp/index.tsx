const DetailsComp = () => {
    return (
        <aside className="relative flex w-full h-full items-center">
            <main>
                <div className="relative w-full h-full mb-5">
                    <div className="bg-firstColor w-32 h-1 mb-2"></div>
                    <div className="bg-secondColor w-32 h-1 absolute left-20"></div>
                </div>
                <h2 className="text-5xl font-bold">See All About Me</h2>
                <p className="font-light">See all my knowledge and skills on this page</p>
                <div className="mt-10">
                    <a href="#" className="text-white px-6 py-2 bg-gradient-to-r from-firstColor to-secondColor rounded-full">Contact Me</a>
                </div>
            </main>
        </aside>
    )
}

export default DetailsComp