import { parseISO, format, getDay } from 'date-fns'
import classNames from 'classnames/bind'

import styles from './Heading.module.scss'
import Section from '@shared/Section'

const cx = classNames.bind(styles)

const DAYS = ['월', '화', '수', '목', '금', '토', '일']

function Heading({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  const title = format(weddingDate, 'yyyy년 MM월 dd일')
  const subTitle = DAYS[getDay(weddingDate)]

  return (
    <Section className={cx('container')}>
      <div className={cx('txt-date')}>
        {title}&nbsp;
        <span className={cx('txt-day')}>({subTitle})</span>
      </div>
    </Section>
  )
}

export default Heading
