import classNames from 'classnames/bind'

import styles from './App.module.scss'

import HeroMedia from '@components/sections/HeroMedia'
import ImageGallery from '@components/sections/ImageGallery'
import Intro from '@components/sections/Intro'
import Message from '@components/sections/Message'
import Calendar from '@components/sections/Calendar'
import Map from '@components/sections/Map'
import Contact from './components/sections/Contact'
import Share from './components/sections/Share'
import AttendCountModal from './components/AttendCountModal'

import useWedding from './hooks/useWedding'

const cx = classNames.bind(styles)

function App() {
  const { wedding } = useWedding()

  if (wedding == null) {
    return null
  }

  const {
    date,
    galleryImages,
    groom,
    bride,
    location,
    message: { intro, invitation },
  } = wedding

  return (
    <div className={cx('container')}>
      <div className={cx('wrap')}>
        <HeroMedia />
        <Intro
          groomName={groom.name}
          brideName={bride.name}
          locationName={location.name}
          date={date}
        />
        <Message intro={intro} invitation={invitation} />
        {/* <Heading date={date} /> */}
        <ImageGallery images={galleryImages} />
        <Calendar date={date} />
        <Map location={location} />
        <Contact groom={groom} bride={bride} />
        <Share groomName={groom.name} brideName={bride.name} date={date} />
        <AttendCountModal wedding={wedding} />
      </div>
    </div>
  )
}

export default App
