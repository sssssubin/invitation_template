import classNames from 'classnames/bind'
import styles from './Message.module.scss'

import Section from '@shared/Section'
import Text from '@shared/Text'

const cx = classNames.bind(styles)

function Message({ intro, invitation }: { intro: string; invitation: string }) {
  return (
    <Section title="모시는 글" className={cx('container')}>
      {/* <Text className={cx('intro-txt')}>{intro}</Text>
      <Text className={cx('invitation-txt')}>{invitation}</Text> */}
    </Section>
  )
}

export default Message
