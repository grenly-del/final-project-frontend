import { LeftType } from "../../../pages/about";
import { useState, useEffect } from "react";
import LoadingBars from "../../loadingBars";

interface RightCompProps {
    data?: LeftType; // Tambahkan ? agar bisa undefined
}

const RightComp:React.FC<RightCompProps> = ({data}) => {
    const [getData, setData] = useState<LeftType | null>(null); // Mulai dengan `null` agar mudah mendeteksi perubahan
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        if (data != undefined) {
            console.log(data.desc)
            setData(data); // Set data baru yang diterima dari parent
            setIsLoading(false); // Set isLoading ke false jika data tersedia
        }
    }, [data]); 
    return (
        <>
            {!isLoading ? (
                <aside className="w-[55%] relative">
                <main className="mt-10 relative">
                    <h2 className="text-2xl font-bold">{getData.subtitle}</h2>
                    <p className="text-sm">{getData.desc}</p>
                    <div className="flex relative mt-5 h-full w-full">
                        <div className="ml-10 w-full h-full flex flex-col gap-y-20 ">
                            <div>
                                <div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute left-0"></div>
                                <div>
                                    <h3 className="font-bold">SD Negeri Inpres Treman</h3>
                                    <p className="text-base"><span className="italic font-semibold">SDN Inpres Treman</span> is where I went to school when I was in elementary school.</p>
                                </div>
                            </div>
                            <div>
                                <div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute left-0"></div>
                                <div>
                                    <h3 className="font-bold">SMP Negeri 2 Kauditan</h3>
                                    <p className="text-base"><span className="italic font-semibold">SMPN 2 Kauditan</span> is where I went to school when I was in Junior High School.</p>
                                </div>
                            </div>
                            <div>
                                <div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute left-0"></div>
                                <div>
                                    <h3 className="font-bold">SMK Negeri 1 Airmadidi</h3>
                                    <p className="text-base"><span className="italic font-semibold">SMKN 1 Airmadidi</span> is where I went to school when I was in High School.</p>
                                </div>
                            </div>
                            <div>
                                <div className="w-[20px] h-[20px] bg-black rounded-[50%] absolute left-0"></div>
                                <div>
                                    <h3 className="font-bold">Klabat University</h3>
                                    <p className="text-base"><span className="italic font-semibold">Klabat University</span> is where I am now studying and continuing my education at the Bachelor's stage.</p>
                                </div>
                            </div>
                        </div>
                        <div className="absolute h-[90%] w-[20px]">
                            <div className="absolute h-full w-1 translate-x-[-50%] left-[50%] bg-black"></div>
                        </div>
                    </div>
                </main>
            </aside>
            ):(
                <LoadingBars />
            )}
        </>
    )
}

export default RightComp