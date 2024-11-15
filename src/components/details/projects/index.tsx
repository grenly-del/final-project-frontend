const ProjectComp = () => {
    return (
        <section className="w-full relative">
            <main>
                <h1 className="text-center text-3xl font-bold">My Project</h1>
                <section className="grid py-14 grid-cols-1 gap-5 [&>div]:w-[326px] [&>div]:shadow-lg [&>div]:pb-5 [&>div]:shadow-[rgba(0, 0, 0, 0.25)] [&>div]:rounded-[7px] [&>div]:mx-auto lg:grid-cols-2 xl:grid-cols-3">
                    <div>
                        <img src="./images/portfolio.svg" alt="" className="w-full h-[271px]"/>
                        <h3 className="text-lg font-bold ml-5 mt-5">Portfolio Pribadi</h3>
                        <p className="text-sm ml-5 w-[287px] mb-5">Ini adalah project latihan saya dalam Frontend Developer</p>
                        
                    </div>
                    <div>
                        <img src="./images/personal-gallery.svg" alt=""  className="w-full h-[271px]"/>
                        <h3 className="text-lg font-bold ml-5 mt-5">Personal Gallery</h3>
                        <p className="text-sm ml-5 w-[287px] mb-5">Ini adalah aplikasi pertama saya untuk membuat aplikasi yang fullstack.</p>
                        
                    </div>
                    <div>
                        <img src="./images/api-authentikasi.svg" alt=""  className="w-full h-[271px]"/>
                        <h3 className="text-lg font-bold ml-5 mt-5">API Authentication</h3>
                        <p className="text-sm ml-5 w-[287px] mb-5">Ini adalah salah satu real project saya, membuat API khusus untuk autentikasi di E-Commerce.</p>
                        
                    </div>
                </section>
            </main>
        </section>
    )
}

export default ProjectComp