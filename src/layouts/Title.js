import React from 'react'
import PropTypes from 'prop-types'

function Title({ name, title }) {
  return (
    <div className='row'>
      <div className='col-10 mx-auto my-2 text-center text-title'>
        <h1 className='text-capitalize font-weight-bold'>
          {name} <strong className='text-dark'>{title}</strong>
        </h1>
      </div>
    </div>
  )
}

Title.propTypes = {
  name: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired
}

export default Title
