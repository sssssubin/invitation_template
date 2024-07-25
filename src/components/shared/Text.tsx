import React from 'react'
import classNames from 'classnames/bind'

import styles from './Section.module.scss'

const cx = classNames.bind(styles)

function Text({
  children,
  className,
}: {
  children: string
  className?: string
}) {
  const message = children.split('\n').map((str, idx, array) => {
    return (
      <React.Fragment key={idx}>
        {str}
        {idx === array.length - 1 ? null : <br />}
      </React.Fragment>
    )
  })

  return <p className={cx(className)}>{message}</p>
}

export default Text
