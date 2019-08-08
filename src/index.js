import React, { Fragment, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

const Countdown = ({ endDate }) => {
  const [timeLeft, setTimeLeft] = useState(null)
  endDate = endDate.getTime()

  let interval

  useEffect(() => {
    interval = setInterval(caluculateTimeRemaining, 1000)
  }, [])

  useEffect(() => {
    return () => {
      if (interval) {
        clearInterval(interval)
      }
    }
  }, [])

  const caluculateTimeRemaining = () => {
    let startDate = new Date()
    startDate = startDate.getTime()

    let timeRemaining = parseInt((endDate - startDate) / 1000)

    if (timeRemaining >= 0) {
      const days = parseInt(timeRemaining / 86400)
      timeRemaining = timeRemaining % 86400

      const hours = parseInt(timeRemaining / 3600)
      timeRemaining = timeRemaining % 3600

      const minutes = parseInt(timeRemaining / 60)
      timeRemaining = timeRemaining % 60

      const seconds = parseInt(timeRemaining)

      setTimeLeft({
        days,
        hours,
        minutes,
        seconds
      })
    } else {
      clearInterval(interval)
      setTimeLeft({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      })
    }
  }

  return (
    <Fragment>
      {timeLeft && (
        <div className='countdown'>
          <div className='countdown__item'>
            {timeLeft.days}
            <span>days</span>
          </div>
          <div className='countdown__item'>
            {timeLeft.hours}
            <span>hours</span>
          </div>
          <div className='countdown__item'>
            {timeLeft.minutes}
            <span>minutes</span>
          </div>
          <div className='countdown__item'>
            {timeLeft.seconds}
            <span>seconds</span>
          </div>
        </div>
      )}
    </Fragment>
  )
}

Countdown.propTypes = {
  endDate: PropTypes.instanceOf(Date).isRequired
}

export default Countdown
