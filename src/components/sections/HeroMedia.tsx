import classNames from 'classnames/bind'
import styles from './HeroMedia.module.scss'

import Section from '@shared/Section'

const cx = classNames.bind(styles)

function MainImg() {
  return (
    <Section className={cx('container')}>
      <picture>
        <source srcSet={'/assets/img-sample.webp'} type="image/webp" />
        <img
          src={'/assets/img-sample.jpg'}
          alt="샘플 이미지"
          fetchPriority="high"
          width="396"
          height="594"
        />
      </picture>
      {/* <video autoPlay loop muted poster="/assets/poster.jpg">
        <source src="/assets/main.webm" type="video/webm" />
        <source src="/assets/main.mp4" type="video/mp4" />
      </video> */}
    </Section>
  )
}

export default MainImg
