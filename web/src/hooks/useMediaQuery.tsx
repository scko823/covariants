import { useMediaQuery } from '@react-hook/media-query'

import { GridBreakpoint } from '../types'

export const useGridBreakpointQuery = (): GridBreakpoint => {
  const xsMatches = useMediaQuery(`only screen and (min-width: ${GridBreakpoint.xs})`)
  const smMatches = useMediaQuery(`only screen and (min-width: ${GridBreakpoint.sm})`)
  const mdMatches = useMediaQuery(`only screen and (min-width: ${GridBreakpoint.md})`)
  const lgMatches = useMediaQuery(`only screen and (min-width: ${GridBreakpoint.lg})`)
  const xlMatches = useMediaQuery(`only screen and (min-width: ${GridBreakpoint.xl})`)
  const xxlMatches = useMediaQuery(`only screen and (min-width: ${GridBreakpoint.xxl})`)

  if (xxlMatches) {
    return GridBreakpoint.xxl
  }
  if (xlMatches) {
    return GridBreakpoint.xl
  }
  if (lgMatches) {
    return GridBreakpoint.lg
  }
  if (mdMatches) {
    return GridBreakpoint.md
  }
  if (smMatches) {
    return GridBreakpoint.sm
  }
  if (xsMatches) {
    return GridBreakpoint.xs
  }
  return GridBreakpoint.xs
}
