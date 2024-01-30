import { ActivityIndicator } from 'react-native'
import { colors } from '../../global/colors'
import BackgroundGradient from '../BackgroundGradient/BackgroundGradient'

const Spinner = () => {
  return (
    <BackgroundGradient>
      <ActivityIndicator
        style={{ flex: 1 }}
        size="large"
        color={colors.paleGoldenRod}
      />
    </BackgroundGradient>
  )
}

export default Spinner
