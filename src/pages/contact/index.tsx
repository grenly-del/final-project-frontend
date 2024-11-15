import LeftComp from "../../components/contact/leftComp"
import RightComp from "../../components/contact/rightComp"
import {useEffect, useState} from 'react'
import { getDatabase, onValue,ref } from "firebase/database"
import app from '../../config/firebase'
import LoadingBars from "../../components/loadingBars"

interface ContactType {
    image: string
    field: string
    value: string
}

export interface LeftType {
    title: string
    desc: string
}



export interface RightType {
    title: string
    desc: string
    contact?: ContactType[],
}


const ContactPage = () => {
    const [rightData, setRightData] = useState<RightType>()
    const [leftData, setLeftData] = useState<LeftType>()
    const [isLoading, setIsLoading] = useState(true)
    const getDatabase2 = () => {
        const db = getDatabase(app);
        const dataRef = ref(db, '/contact')
        onValue(dataRef, (snapshot) => {
            const contactData = snapshot.val() || {};
            if (contactData) {
                console.log(contactData)
              setLeftData({
                    title: contactData.title,
                    desc: contactData.desc
                });
                
            setRightData({
                title: contactData.subtitle.title,
                desc: contactData.subtitle.desc,
                contact: Object.values(contactData.myContact)
            })
            setIsLoading(false)
                    // setUrl(homeData.image);
                
            }
            
        });
    }

    useEffect(() => {
        getDatabase2()
    }, [])
    return (
        <>
        {!isLoading ? (
            <section className="w-full h-[100vh] flex items-center px-20 relative">
                <main className="flex w-full h-full justify-between ">
                    <LeftComp data={leftData}/>
                    <RightComp data={rightData}/>
                </main>
            </section>
        ) : (
            <LoadingBars/>
        )}
        </>
    )
}

export default ContactPage