import { Swiper, SwiperSlide } from 'swiper/react'

import classNames from 'classnames/bind'

import 'swiper/css'

import styles from './ImageViewer.module.scss'

import './swiper.css'

const cx = classNames.bind(styles)

function ImageViewer({
  images,
  open = false,
  selectedIdx,
}: {
  images: string[]
  open: boolean
  selectedIdx: number
}) {
  if (open === false) {
    return null
  }

  return (
    <div className={cx('dimmed')}>
      <Swiper
        spaceBetween={40}
        slidesPerView={1}
        loop={true}
        initialSlide={selectedIdx}
      >
        {images.map((src, idx) => {
          return (
            <SwiperSlide key={idx}>
              <img src={src} alt="이미지 뷰어" />
            </SwiperSlide>
          )
        })}
      </Swiper>
    </div>
  )
}

export default ImageViewer
