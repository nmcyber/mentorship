import { Hero } from '@/components/mentorship/Hero'
import MentorshipAudience from '@/components/mentorship/MentorshipAudience'
import MentorshipJourney from '@/components/mentorship/MentorshipJourney'
import ProgramOverview from '@/components/mentorship/ProgramOverview'
import MentorshipGuide from '@/components/mentorship/MentorshipGuide'
import Footer from '@/components/shared/footer/Footer'

function page() {
  return (
    <main className='h-screen '>
        <Hero />
        <MentorshipGuide />
        <MentorshipAudience />
        <ProgramOverview />
        <MentorshipJourney />
        <Footer/>
    </main>
  )
}

export default page