import LeftComp from "../../components/homepage/leftComp"
import RightComp from "../../components/homepage/rightComp"
import { useEffect, useState } from "react"
import { getDatabase, onValue,ref } from "firebase/database"
import app from '../../config/firebase'

// Type 
interface SubTitle {
    first: string,
    second: string,
    third: string
}

export interface HomeType {
    name: string,
    subtitle: SubTitle,
    paragraph: string,
    button_1: string,
    button_2: string
}



const HomePage = () => {
    const [data, setData] = useState<HomeType>({
        subtitle: {first: '', second: '', third: ''},
        paragraph: '',
        name: '',
        button_1: '',
        button_2: ''
    })
    const [url, setUrl] = useState('')

    const getDatabase2 = () => {
        const db = getDatabase(app);
        const dataRef = ref(db, '/home');

        onValue(dataRef, (snapshot) => {
            const homeData = snapshot.val() || {};
            if (homeData) {
                setData({
                    subtitle: homeData.title.subtitle,
                    name: homeData.title.name,
                    paragraph: homeData.title.paragraph,
                    button_1: homeData.title.button_1,
                    button_2: homeData.title.button_2,
                });
                
                    setUrl(homeData.image);
                
            }
            
        });
    }

    useEffect(() => {
        getDatabase2()
        console.log(url)
        
    }, [url])
    return (
        <section className="relative h-[100vh] flex justify-between items-center px-20">
            <LeftComp nilai={data}/>
            <RightComp urlImage={url}/>
        </section>
    )
}


export default HomePage