/* eslint-disable comma-dangle */
import isPattern from './isPattern'

export default isPattern(
  '[A-Z0-9a-z._%+-]+@[A-Za-z0-9.-]+\\.[A-Za-z]{2,64}',
  "That's not an email"
)
