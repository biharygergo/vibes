import React, { Component } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

const Root = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 100px;
`

export default class Countdown extends Component<any, any> {
  static propTypes = {
    countdownTime: PropTypes.number
  }
  timeout: number = 0;

  constructor (props: any) {
    super(props)

    this.state = {
      number: props.countdownTime / 1000
    }
  }

  componentDidMount () {
    this.timeout = setTimeout(this.updateNumber, 1000)
  }

  componentWillUnmount () {
    clearInterval(this.timeout)
  }

  updateNumber = () => {
    const nextNumber = this.state.number - 1
    this.setState({
      number: nextNumber
    })
    if (nextNumber !== 0) {
      this.timeout = setTimeout(this.updateNumber, 1000)
    }
  }

  render () {
    return <Root>{this.state.number !== 0 ? this.state.number : null}</Root>
  }
}