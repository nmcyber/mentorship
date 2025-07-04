import { Hero } from '@/components/mentorship/Hero'
import MentorshipAudience from '@/components/mentorship/MentorshipAudience'
import MentorshipJourney from '@/components/mentorship/MentorshipJourney'
import ProgramOverview from '@/components/mentorship/ProgramOverview'

function page() {
  return (
    <main className='h-screen '>
        <Hero />
        <MentorshipAudience />
        <ProgramOverview />
        <MentorshipJourney />
    </main>
  )
}

export default page