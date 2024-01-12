import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { useGetProfilePictureQuery } from '../services/shopService';
import { useEffect } from 'react';
import { setProfilePicture } from '../features/authSlice';

const MainNavigator = () => {
  //const user = useSelector(state => state.authReducer.user)
  const user = 'Logged'
  const localId = useSelector(state => state.authReducer.localId)
  const { data, error, isLoading } = useGetProfilePictureQuery(localId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image))
    }
  }, [data])

  return (
    <NavigationContainer>
      {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator