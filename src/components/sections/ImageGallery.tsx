import classNames from 'classnames/bind'
import { useState } from 'react'

import Section from '@shared/Section'
import styles from './ImageGallery.module.scss'

import ImageViewer from '../ImageViewer'
import generateImageUrl from '@utils/generateImageUrl'

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
                <picture>
                  <source
                    srcSet={generateImageUrl({
                      filename: src,
                      format: 'webp',
                      option: 'w_200,h_300,q_auto,c_fill',
                    })}
                    type="image/webp"
                  />
                  <img
                    src={generateImageUrl({
                      filename: src,
                      format: 'jpg',
                      option: 'w_200,h_300,c_fill,q_auto',
                    })}
                    alt="이미지"
                  />
                </picture>
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
