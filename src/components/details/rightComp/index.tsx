const RightComp = () => {
    return (
        <aside className="w-full">
            <main className="mt-20">
                <h1 className="text-2xl font-bold">Skills</h1>
                <p>These are all skills that I learned in the field of technology.</p>
                <section className="grid grid-cols-5 gap-y-6 mt-7">
                    <div>
                        <img src="./utils/html.svg" alt="HTML" />
                    </div>
                    <div>
                        <img src="./utils/css.svg" alt="CSS" />
                    </div>
                    <div>
                        <img src="./utils/js.svg" alt="Javascript" />
                    </div>
                    <div>
                        <img src="./utils/mongodb.svg" alt="MongoDB" />
                    </div>
                    <div>
                        <img src="./utils/nginx.svg" alt="NGINX" />
                    </div>
                    <div>
                        <img src="./utils/nodejs.svg" alt="NodeJS" />
                    </div>
                    <div>
                        <img src="./utils/python.svg" alt="Python" />
                    </div>
                    <div>
                        <img src="./utils/react.svg" alt="React" />
                    </div>
                    <div>
                        <img src="./utils/ts.svg" alt="Typescript" />
                    </div>
                    <div>
                        <img src="./utils/photoshop.svg" alt="Photoshop" />
                    </div>
                    <div>
                        <img src="./utils/drawio.svg" alt="DrawIO" />
                    </div>
                    <div>
                        <img src="./utils/mysql.svg" alt="MySQL" />
                    </div>
                </section>
            </main>
        </aside>
    )
}


export default RightComp