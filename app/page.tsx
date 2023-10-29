import HomePage from './homepage'
import HeadSection from './head'

// Home Page
export default function Home() {

  return (
    <div className='animate__animated animate__fadeIn'>
      <HeadSection />
      <HomePage />
    </div>
  )
}
