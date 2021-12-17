import { useCallback } from 'react'
import { StyleSheet } from 'react-native'

const makeStyles = styles => props => {
  const css = typeof styles === 'function' ? styles(props) : styles
  return StyleSheet.create(css)
}

export default makeStyles
