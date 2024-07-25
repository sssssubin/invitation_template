import classNames from 'classnames/bind'
import { useState } from 'react'

import Section from '@shared/Section'
import styles from './ImageGallery.module.scss'

import ImageViewer from '../ImageViewer'

const cx = classNames.bind(styles)

function ImageGallery({ images }: { images: string[] }) {
  const [selectedIdx, setSelectedIdx] = useState(-1)
  const open = selectedIdx > -1
  const [showMore, setShowMore] = useState(false)

  const handleSelectedImage = (idx: number) => {
    setSelectedIdx(idx)
  }

  const handleClose = () => {
    setSelectedIdx(-1)
  }

  const handleMoreShow = () => {
    setShowMore(true)
  }

  return (
    <>
      <Section title="Gallery" className={cx('container')}>
        <div
          className={cx('preview-wrap')}
          style={{ maxHeight: showMore ? 'none' : '60vh' }}
        >
          {!showMore && <div className={cx('preview-images')}></div>}
          <ul className={cx('wrap-images')}>
            {images.map((src, idx) => (
              <li
                key={idx}
                className={cx('wrap-image')}
                onClick={() => {
                  handleSelectedImage(idx)
                }}
              >
                <img src={src} alt="사진첩 이미지" />
              </li>
            ))}
          </ul>
        </div>
        {!showMore && (
          <button className={cx('more-btn')} onClick={handleMoreShow}>
            더보기
          </button>
        )}
      </Section>
      <ImageViewer
        images={images}
        open={open}
        selectedIdx={selectedIdx}
        onClose={handleClose}
      />
    </>
  )
}

export default ImageGallery
