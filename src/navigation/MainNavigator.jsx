import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { useGetProfilePictureQuery } from '../services/shopService';
import { useEffect } from 'react';
import { setProfilePicture, setUserLocation } from '../features/authSlice';
import { useGetUserLocationQuery } from '../services/shopService';

const MainNavigator = () => {
  const user = useSelector(state => state.authReducer.user)
  const localId = useSelector(state => state.authReducer.localId)
  const { data, error, isLoading } = useGetProfilePictureQuery(localId)

  const { data: locationData, error: locationError, isLoading: locationIsLoading } = useGetUserLocationQuery(localId)

  const dispatch = useDispatch()

  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image))
    }
    if (locationData) {
      dispatch(setUserLocation(locationData))
    }
  }, [data, locationData, isLoading, locationIsLoading])

  return (
    <NavigationContainer>
      {user && !isLoading ? <TabNavigator /> : <AuthNavigator />}
    </NavigationContainer>
  )
}

export default MainNavigator