import { View, Text } from 'react-native'
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react"
import { base_auth_url, api_key } from "../firebase/database"

const authService = () => {
  return (
    <View>
      <Text>authService</Text>
    </View>
  )
}

export default authService