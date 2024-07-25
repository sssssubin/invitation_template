import classNames from 'classnames/bind'
import { useEffect, useState } from 'react'

import styles from './App.module.scss'

import FullScreenMessage from '@components/shared/FullScreenMessage'

import Heading from '@components/sections/Heading'
import HeroMedia from '@components/sections/HeroMedia'
import ImageGallery from '@components/sections/ImageGallery'
import Intro from '@components/sections/Intro'
import Message from '@components/sections/Message'
import Calendar from '@components/sections/Calendar'

import { Wedding } from '@models/wedding'

const cx = classNames.bind(styles)

function App() {
  const [wedding, setWedding] = useState<Wedding | null>(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(false)

  // 1. 데이터 호출
  useEffect(() => {
    setLoading(true)

    fetch('http://localhost:8888/wedding')
      .then((response) => {
        if (response.ok === false) {
          throw new Error('정보를 불러오지 못했습니다.')
        }
        return response.json()
      })
      .then((data) => {
        setWedding(data)
      })
      .catch((e) => {
        console.log('에러 발생', e)
        setError(true)
      })
      .finally(() => {
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <FullScreenMessage type="loading" />
  }

  if (error) {
    return <FullScreenMessage type="error" />
  }

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
        {JSON.stringify(wedding)}
      </div>
    </div>
  )
}

export default App
