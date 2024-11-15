import LeftComp from '../../components/details/leftComp'
import ProjectComp from '../../components/details/projects'
import RightComp from '../../components/details/rightComp'
import {useState, useEffect} from 'react'
import { getDatabase, onValue,ref } from "firebase/database"
import app from '../../config/firebase'

export interface LeftType{
    title: string
    paragraph: string
    button: string
}

interface SkillsType {
    title: string
    image: string
}

export interface RightType{
   subtitle: string
   desc: string
   skills: SkillsType[]
}

const DetailsPage = () => {
    const [rightData, setRightData] = useState<RightType>()
    const [leftData, setLeftData] = useState<LeftType>()
    const getDatabase2 = () => {
        const db = getDatabase(app);
        const dataRef = ref(db, '/about')
        onValue(dataRef, (snapshot) => {
            const detailsData = snapshot.val() || {};
            if (detailsData) {
                console.log(detailsData)
                
              setLeftData({
                title: detailsData.title,
                paragraph: detailsData.paragraph,
                button: detailsData.button
              });
              
                setRightData({
                    subtitle: detailsData.subtitle,
                    desc: detailsData.desc,
                    skills: Object.values(detailsData.skills)
                })
                    // setUrl(homeData.image);
                
            }
            
        });
    }

    useEffect(() => {
        getDatabase2()
    }, [])
    return (
        <section className='w-full h-[100vh] px-20 relative'>
            <section className='flex w-full h-full'>
                <LeftComp data={leftData}/>
                <RightComp data={rightData}/>
            </section>
        </section>
    )
}

export default DetailsPage