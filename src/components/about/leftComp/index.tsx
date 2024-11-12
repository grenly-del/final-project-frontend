import type { LeftType } from "../../../pages/about"
import { useEffect, useState } from "react"
import LoadingBars from "../../loadingBars"
interface LeftCompProps {
    data?: LeftType; // Tambahkan ? agar bisa undefined
}

const LeftComp:React.FC<LeftCompProps> = ({data}) => {
    const [getData, setData] = useState<LeftType | null>(null); // Mulai dengan `null` agar mudah mendeteksi perubahan
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        console.log(data)
        if (data != undefined) {
            setData(data); // Set data baru yang diterima dari parent
            setIsLoading(false); // Set isLoading ke false jika data tersedia
        }
    }, [data]); 

    return (
        <>
        {!isLoading && getData ? (
            <aside className="w-[100%%] relative h-[100vh] flex items-center">
                <main className="">
                    <p>{getData.name}</p>
                    <h2 className="font-bold text-5xl">{getData.title.first} <span className="bg-gradient-to-r from-secondColor to-firstColor bg-clip-text text-transparent">{getData.title.second}</span></h2>
                    <p className="font-light mt-6">{getData.paragraph}</p>
                    <div className="mt-16">
                        <a href="#" className="bg-gradient-to-r from-firstColor to-secondColor py-2 px-6 rounded-full text-white">{getData.button}</a>
                    </div>
                </main>
            </aside>
        ): (

            <LoadingBars />
        )}
        </>
    )
}

export default LeftComp