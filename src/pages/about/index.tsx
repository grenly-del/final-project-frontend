import LeftComp from "../../components/about/leftComp"
import RightComp from "../../components/about/rightComp"

const AboutPage = () => {
    return (
        <section className="flex px-20 gap-10 justify-between">
            <LeftComp />
            <RightComp />
        </section>
    )
}

export default AboutPage