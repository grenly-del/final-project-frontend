import LeftComp from "../../components/contact/leftComp"
import RightComp from "../../components/contact/rightComp"

const ContactPage = () => {
    return (
        <section className="w-full h-[100vh] flex items-center px-20">
            <main className="flex w-full h-full justify-between ">
                <LeftComp/>
                <RightComp />
            </main>
        </section>
    )
}

export default ContactPage