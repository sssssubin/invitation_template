import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'
import classNames from 'classnames/bind'

import Section from '@shared/Section'
import styles from './Intro.module.scss'

const cx = classNames.bind(styles)

interface IntroProps {
  groomName: string
  brideName: string
  locationName: string
  date: string
}

function Intro({ groomName, brideName, locationName, date }: IntroProps) {
  const weddingDate = parseISO(date)

  return (
    <Section className={cx('container')}>
      <p className={cx('wrap-persons')}>
        {groomName}💍{brideName}
        <br />
        결혼합니다!
      </p>
      <p className={cx('wrap-info')}>
        {format(weddingDate, 'yyyy년 M월 d일 eeee', { locale: ko })}
        <br />
        {locationName}
      </p>
    </Section>
  )
}

export default Intro
