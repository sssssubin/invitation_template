import classNames from 'classnames/bind'

import Section from '@shared/Section'
import styles from './Map.module.scss'
import React, { useEffect, useRef } from 'react'
import { Location } from '@/models/wedding'

const cx = classNames.bind(styles)

declare global {
  interface Window {
    kakao: any
  }
}

function Map({ location }: { location: Location }) {
  const mapContainer = useRef(null)

  useEffect(() => {
    const script = document.createElement('script')
    script.src = `https://dapi.kakao.com/v2/maps/sdk.js?appkey=${process.env.REACT_APP_KAKAO_APP_KEY}&autoload=false`
    script.async = true

    document.head.appendChild(script)

    script.onload = () => {
      window.kakao.maps.load(() => {
        const position = new window.kakao.maps.LatLng(
          location.lat,
          location.lng,
        )

        const options = {
          center: position,
          level: 3,
        }

        const market = new window.kakao.maps.Marker({
          position,
        })
        const map = new window.kakao.maps.Map(mapContainer.current, options)
        market.setMap(map)
      })
    }
  }, [location])

  return (
    <Section
      title={
        <div className={cx('wrap-header')}>
          <span className={cx('txt-title')}>
            오시는길<span>{location.name}</span>
          </span>

          <span className={cx('txt-subtitle')}>{location.address}</span>
        </div>
      }
    >
      <div className={cx('wrap-map')}>
        <div className={cx('map')} ref={mapContainer}></div>
        <a
          className={cx('btn-find-way')}
          href={location.link}
          target="_blank"
          rel="noreferrer"
        >
          길찾기
        </a>
      </div>
      <div className={cx('waytocome')}>
        <WayToCome label="버스" list={location.waytocome.bus} />
        <WayToCome label="지하철" list={location.waytocome.metro} />
      </div>
    </Section>
  )
}

function WayToCome({
  label,
  list,
}: {
  label: React.ReactNode
  list: string[]
}) {
  console.log(styles) // styles 객체를 확인하여 txt-item 클래스가 포함되어 있는지 확인합니다.

  return (
    <div className={cx('wrap-waytocome')}>
      <div className={cx('txt-label')}>📍 {label}</div>
      <ul className={cx('txt-list')}>
        {list.map((waytocome, idx) => (
          <li key={idx} className={cx('txt-item')}>
            👉🏻 {waytocome}
          </li>
        ))}
      </ul>
    </div>
  )
}
export default Map
