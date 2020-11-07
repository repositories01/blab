
import React from 'react'
import Landing from '../../pages/Landing'
import {render} from '@testing-library/react'

describe('Landing page', () => {
    it(' should be able return the landing page', () => {
        const {debug} = render(<Landing/>)

        debug()
  })
})