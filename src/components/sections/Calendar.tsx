import { parseISO, format } from 'date-fns'
import { ko } from 'date-fns/locale'

import classNames from 'classnames/bind'
import styles from './Calendar.module.scss'
import Section from '@shared/Section'
import { DayPicker } from 'react-day-picker'

import 'react-day-picker/dist/style.css'
const cx = classNames.bind(styles)
const css = `
  .rdp-caption {  
    display: none;
  }
  .rdp-cell {
    cursor: default;
  }
  .rdp-head_cell {
    font-weight: 500;
    font-size: 14px;
    font-weight: bold;
  }
  .rdp-day_selected {
    background-color: var(--primary);
    font-weight: bold;
    color: #fff;
  }
  .rdp-day_selected:hover {
    background-color: var(--primary);
  }
`
function Calendar({ date }: { date: string }) {
  const weddingDate = parseISO(date)
  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span>{format(weddingDate, 'yyyy.MM.dd')}</span>
          <span>{format(weddingDate, 'aaa h시 eeee', { locale: ko })}</span>
        </div>
      }
    >
      <div className={cx('wrap-calendar')}>
        <style>{css}</style>
        <DayPicker
          locale={ko}
          month={weddingDate}
          selected={weddingDate}
          formatters={{ formatCaption: () => '' }}
        />
      </div>
    </Section>
  )
}

export default Calendar
