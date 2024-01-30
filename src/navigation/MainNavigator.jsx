import { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import TabNavigator from './TabNavigator';
import AuthNavigator from './AuthNavigator';
import { useGetProfilePictureQuery } from '../services/shopService';
import { useEffect } from 'react';
import { setProfilePicture, setUserLocation, setUser } from '../features/authSlice';
import { useGetUserLocationQuery } from '../services/shopService';
import { fetchSessions } from '../database';
import Spinner from '../components/Spinner/Spinner';
import { Text } from 'react-native';
import Welcome from '../components/Welcome/Welcome';

const MainNavigator = () => {
  const user = useSelector(state => state.authReducer.user)
  const localId = useSelector(state => state.authReducer.localId)
  const { data, error, isLoading } = useGetProfilePictureQuery(localId)
  const [loadingSession, setLoadingSession] = useState(true);
  const { data: locationData, error: locationError, isLoading: locationIsLoading } = useGetUserLocationQuery(localId)
  console.log('USER', user)
  const dispatch = useDispatch()
  const [showWelcomeMessage, setShowWelcomeMessage] = useState(true);

  // Data Profile
  useEffect(() => {
    if (data) {
      dispatch(setProfilePicture(data.image))
    }
    if (locationData) {
      dispatch(setUserLocation(locationData))
    }
  }, [data, locationData, isLoading, locationIsLoading])

  // Data Session
  useEffect(() => {
    (async () => {
      try {
        const session = await fetchSessions()
        console.log('SESSION', session)
        if (session?.rows.length) {
          const user = session.rows._array[0]
          console.log('Se han encontrado Datos del User')
          dispatch(setUser(user))
        }
      } catch (error) {
        console.log('MainNav: error al obtener datos', error.message)
      } finally {
        setLoadingSession(false)
      }
    })()
  }, [])

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowWelcomeMessage(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      {showWelcomeMessage ? (
        <Welcome />
      ) : (
        isLoading || loadingSession ? (
          <Spinner />
        ) : (
          user ? (
            <TabNavigator />
          ) : (
            <AuthNavigator />
          )
        )
      )}
    </NavigationContainer>

  )
}

export default MainNavigator

/* 

 <NavigationContainer>
      Si no está cargando el tabNavigator o no está cargando la sesión, renderiza el contenido
      {(!isLoading || !loadingSession)
        ?
        user
          ?
          <TabNavigator />
          :
          <AuthNavigator />
        :
        <Spinner />
      }
    </NavigationContainer>
*/