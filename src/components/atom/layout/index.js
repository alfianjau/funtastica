import React from 'react'
import PropTypes from 'prop-types'
import { MainWrapper, ChildrenWrapper } from './styled'
import Header from '../header'

const Layout = ({ children, onSwitchTheme, theme }) => (
  <>
    <MainWrapper>
      <Header onSwitchTheme={onSwitchTheme} theme={theme} />
      <ChildrenWrapper>{children}</ChildrenWrapper>
    </MainWrapper>
  </>
)

export default Layout

Layout.propTypes = {
  children: PropTypes.node,
  onSwitchTheme: PropTypes.func,
  theme: PropTypes.string,
}

Layout.defaultProps = {
  children: null,
  onSwitchTheme: () => {},
  theme: '',
}
