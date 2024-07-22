import classNames from 'classnames/bind'
import styles from './HeroMedia.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

function MainImg() {
  return (
    <Section className={cx('container')}>
      {/* <img src="/assets/img-sample.jpg" alt="샘플 이미지" /> */}
      <video
        autoPlay={true}
        muted={true}
        loop={true}
        poster="/assets/poster.jpg"
      >
        <source src="/assets/main.mp4" type="video/mp4" />
      </video>
    </Section>
  )
}

export default MainImg
