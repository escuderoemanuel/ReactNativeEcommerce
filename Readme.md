# React Native Ecommerce App!

### Emanuel Escudero [FrontEnd Developer]

__Mobile shopping application with offline synchronization and data persistence capabilities. Compatible with Android and iOS.__

### About the project

- Github Repository: [React Native Ecommerce](https://github.com/escuderoemanuel/ReactNativeEcommerce)
- Author: [Emanuel Escudero](http://emanuelescudero.ar)
- Type: Online Store Application - Ecommerce

### Description

- **The application has the following functions:**
  
  - ***Signup:*** to create an account. It has validations such as checking that the email has a correct format and that the password has a minimum of characters. Show error messages if necessary.Save the created account to the Firebase database. 
  - ***Login:*** to enter the application. Check that email exists in the Firebase database and that the password matches with that email. Show error messages if necessary.
  - ***Using the Device Location:*** ask the user for permissions to enable the use of the location and show the user\'s current location and de last location saved in the Firebase database. 
  - ***Using the Device Camera:*** ask the user for permissions to enable the use of the camera. The user can take a picture and save it to the user profile. The picture is also saved in the Firebase database. 
  - ***Navigation by Categories:*** shows the avaiable products categories.
  - ***Navigation by Product List:*** shows the products avaiable within each category.
  - ***View Detail Products:*** shows the details of the selected product.
  - ***Carousel:*** shows different images of the product.
  - ***Add Product to the Cart:*** Add the selected product to the cart.
  - ***Cart:*** shows the products added to the cart, their prices and the total price to pay.
  - ***Trash Icon:*** delete the product from the cart, and subtract it\'s value from the total price to pay.
  - ***Orders:*** shows the orders saved in the Firebase database, linkedto the logged in user.
  - ***Search:*** the user can enter the name of a product and the application will show the results, if any.
  - ***Pay:*** simulation of method.



### Requirements

- [Visual Studio Code](https://code.visualstudio.com/) 
  - _Or the IDE that you prefer_
- [Android Studio](https://developer.android.com/studio?hl=es-419)
  - _You can also use your Browser or the [Expo Go Phone](https://expo.dev/client) application_.

### Techs & Tools

- [React Native](https://reactnative.dev/)
- [Expo CLI](https://docs.expo.dev/more/expo-cli/)
- [Redux](https://redux.js.org/)
- [GeoLib](https://www.npmjs.com/package/geolib)
- [Yup](https://www.npmjs.com/package/yup)
- [Google Fonts](https://fonts.google.com/)
- [Firebase](https://firebase.google.com/?hl=es) 


## What do you need to run this application?

- Open your terminal and execute:
  ```
  git clone https://github.com/escuderoemanuel/ReactNativeEcommerce
  ```
- Install project dependencies by running:
  ```
  npm install
  ```
- Open the project with [Visual Studio Code](https://code.visualstudio.com/) or your favorite editor:
  ```
  code .
  ```
- If you want to use [Android Studio](https://developer.android.com/studio?hl=es-419), open it, create a new device, launch the created device.  
- Run the Project
  ```
  npx expo start
  ```
- When the application has been built crrectly, if you want to use [Android Studio](https://developer.android.com/studio?hl=es-419), choose option \'a\' in the console. You can also open the application with your smartphone by scanning the QR Code from [Expo Go](https://expo.dev/client) application.

============== 


### FrontEnd Deployment With

- []()


### Screenshots





==================================================
###  Ideas for Future Implementations:

- **Navigators:** _don\'t show navegation icons in \'initialRouteName\'._
- **Navigators:** _show category name or category product in the \'header\'._
- Cart: _implement quantity substraction in firebase stock._
- OrdersNavigation: _show true orders._
- Security: _\'react-native-dotenv\' or \'eas-cli\' library for sensitive info._
- Orders & User: _Link orders to the corresponding user._
- User Profile: _Implement user profile._
- User Profile: _edit profile._
- User Profile: _change password._
- User Profile: _recovery password._
- Component: _create my own Spiner component._
- Component: _custom errors._
- Device: _implement fingerprint unlock._
- Pay Methods.
- Documentation: fetallar features, librerías, utilización
- Code Optimization!!!
- CAMBIAR EL SEARCH A LA PANTALLA DE CATEGORIES Y QUE PUEDA BUSCAR CUALQUIER PRODUCTO DESDE ALLÍ. SACARLO DE DENTRO DE CADA CATEGORIA.
- ACREGAR UNA SCREEN QUE MUESTRE METODO DE PAGO SIMULADO LUEGO DE PONER PAGAR EN EL CARRITO. SE MUESTRA SI EL USUARIO ESTÁ LOGGEADO Y SINO LO LLEVA A LA PANTALLA DE LOGGEO.
- ANIMAR EL INICIO DE LA APP, CON FADE IN, FADE UP  O SIMILAR
- Ver Clase SQLite!!