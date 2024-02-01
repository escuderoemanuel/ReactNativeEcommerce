import { ActivityIndicator } from 'react-native'
import { colors } from '../../global/colors'
import BackgroundGradient from '../BackgroundGradient/BackgroundGradient'

const Spinner = () => {
  return (
    <ActivityIndicator
      style={{ flex: 1 }}
      size="large"
      color={colors.paleGoldenRod}
    />
  )
}

export default Spinner
