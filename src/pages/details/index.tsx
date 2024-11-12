import LeftComp from '../../components/details/leftComp'
import ProjectComp from '../../components/details/projects'
import RightComp from '../../components/details/rightComp'

const DetailsPage = () => {
    return (
        <section className='w-full h-[100vh] px-20 relative'>
            <section className='flex w-full h-full'>
                <LeftComp />
                <RightComp />
            </section>
            <ProjectComp />
        </section>
    )
}

export default DetailsPage