const LeftComp = () => {
    return (
        <aside className="relative flex w-full h-full items-center">
            <main>
                <div className="relative w-full h-full mb-5">
                    <div className="bg-firstColor w-32 h-1 mb-2"></div>
                    <div className="bg-secondColor w-32 h-1 absolute left-20"></div>
                </div>
                <h2 className="text-5xl font-bold">Contact Me</h2>
                <p className="font-light">This is my contact.</p>
                <div className="mt-10">
                    <a href="./utils/Whatsapp.svg"></a>
                    <a href="./utils/Instagram.svg"></a>
                    <a href="./utils/Gmail.svg"></a>
                    <a href="./utils/github.svg"></a>
                </div>
            </main>
        </aside>
    )
}

export default LeftComp