import { Swiper, SwiperSlide } from 'swiper/react'
import SwiperCore from 'swiper'

import { useState, useEffect } from 'react'

import classNames from 'classnames/bind'

import 'swiper/css'
import 'swiper/css/navigation'
import styles from './ImageViewer.module.scss'
import './swiper.css'
import Dimmed from '@shared/Dimmed'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
  onClose,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
  onClose: () => void
}) {
  const [swiperIndex, setSwiperIndex] = useState(0) // 페이지네이션용
  const [swiper, setSwiper] = useState<SwiperCore>() // 슬라이드용
  const [slideCount, setSlideCount] = useState(0) // 슬라이드 개수

  // Swiper 인스턴스가 설정될 때 슬라이드 개수를 업데이트
  useEffect(() => {
    if (swiper?.slides) {
      setSlideCount(swiper.slides.length)
    }
  }, [swiper])

  useEffect(() => {
    if (open) {
      setSwiperIndex(selectedIdx)
    }
  }, [open, selectedIdx])

  // 컴포넌트가 닫힐 때 swiperIndex를 초기화
  useEffect(() => {
    if (!open) {
      setSwiperIndex(0) // 초기값으로 설정
    }
  }, [open])

  if (open === false) {
    return null
  }

  // 슬라이드 이벤트핸들러
  const handlePrev = () => {
    swiper?.slidePrev()
  }
  const handleNext = () => {
    swiper?.slideNext()
  }

  const handleClose = () => {
    setSwiperIndex(0) // 초기값으로 설정
    onClose() // 부모 컴포넌트의 onClose 함수 호출
  }

  return (
    <Dimmed>
      <div className={cx('container')}>
        <div className={cx('top-bar')}>
          <div className={cx('pagination')}>
            {swiperIndex + 1} / {slideCount}
          </div>
          <CloseButton className={cx('ico-close')} onClose={handleClose} />
        </div>
        <Swiper
          spaceBetween={40}
          slidesPerView={1}
          loop={true}
          initialSlide={selectedIdx}
          onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
          onSwiper={(e) => {
            setSwiper(e)
          }}
        >
          {images.map((src, idx) => {
            return (
              <SwiperSlide key={idx}>
                <img src={src} alt="이미지 뷰어" />
              </SwiperSlide>
            )
          })}
        </Swiper>
        <div className={cx('navigation')}>
          <button onClick={handlePrev} className={cx('prev-btn')}>
            <svg aria-hidden="true" viewBox="0 0 60 60" width="60" height="60">
              <path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z"></path>
            </svg>
          </button>
          <button onClick={handleNext} className={cx('next-btn')}>
            <svg aria-hidden="true" viewBox="0 0 60 60" width="60" height="60">
              <path d="M29 43l-3 3-16-16 16-16 3 3-13 13 13 13z"></path>
            </svg>
          </button>
        </div>
      </div>
    </Dimmed>
  )
}

function CloseButton({
  onClose,
  className,
}: {
  onClose: () => void
  className: string
}) {
  return (
    <button className={className} onClick={onClose}>
      <svg aria-hidden="true" viewBox="0 0 32 32" width="32" height="32">
        <path
          d="M24 10l-2-2-6 6-6-6-2 2 6 6-6 6 2 2 6-6 6 6 2-2-6-6z"
          id="pswp__icn-close"
        ></path>
      </svg>
    </button>
  )
}

export default ImageViewer
