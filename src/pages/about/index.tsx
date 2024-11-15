import LeftComp from "../../components/about/leftComp"
import RightComp from "../../components/about/rightComp"
import {useEffect, useState} from 'react'
import { getDatabase, onValue,ref } from "firebase/database"
import app from '../../config/firebase'
import ProjectComp from "../../components/details/projects"

// Type 
interface SubTitle {
    first: string,
    second: string
}

export interface LeftType {
    title: SubTitle,
    name: string,
    paragraph: string,
    button: string,
}



export interface RightType {
    desc: string,
    subtitle: string,
    education?: any,
}


const AboutPage = () => {
    const [rightData, setRightData] = useState<RightType>()
    const [leftData, setLeftData] = useState<LeftType>()
    const getDatabase2 = () => {
        const db = getDatabase(app);
        const dataRef = ref(db, '/education')
        onValue(dataRef, (snapshot) => {
            const aboutData = snapshot.val() || {};
            if (aboutData) {
                // console.log(aboutData)
              setLeftData({
                    title: {
                        first: aboutData.title.first,
                        second: aboutData.title.second
                    },
                    name: aboutData.name,
                    paragraph: aboutData.paragraph,
                    button: aboutData.button
                });
                
            setRightData({
                desc: aboutData.desc,
                subtitle: aboutData.subtitle,
                education: Object.values(aboutData.education)
            })
                    // setUrl(homeData.image);
                
            }
            
        });
    }

    useEffect(() => {
        getDatabase2()
    }, [])
    return (
        <section className="flex px-20 gap-10 justify-between relative">
            <LeftComp data={leftData}/>
            <RightComp data={rightData}/>
        </section>
    )
}

export default AboutPage