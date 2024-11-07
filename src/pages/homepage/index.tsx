import LeftComp from "../../components/homepage/leftComp"
import RightComp from "../../components/homepage/rightComp"


const HomePage = () => {
    return (
        <section className="relative h-[100vh] flex justify-between items-center px-20">
            <LeftComp />
            <RightComp />
        </section>
    )
}


export default HomePage