# React Native Ecommerce App!

### Emanuel Escudero [FrontEnd Developer]

__Mobile shopping application with offline synchronization and data persistence capabilities. Compatible with Android and iOS.__

### About the project

- Github Repository: [React Native Ecommerce](https://github.com/escuderoemanuel/ReactNativeEcommerce)
- Author: [Emanuel Escudero](http://emanuelescudero.ar)
- Type: Online Store Application - Ecommerce

### Description

- **The application has the following functions:**
  
  - ***Signup:*** to create an account. It has validations such as checking that the email has a correct format and that the password has a minimum of characters (6). Show error messages if necessary. Save the created account to the Firebase database. 
  - ***Login:*** to enter the application. Check that email exists in the Firebase database and that the password matches with that email. Show error messages if necessary.
  - ***Using the Device Location:*** ask the user for permissions to enable the use of the location and show the user\'s current location and de last location saved in the Firebase database. 
  - ***Using the Device Camera:*** ask the user for permissions to enable the use of the camera. The user can take a picture and save it to the user profile. The picture is also saved in the Firebase database. 
  - ***Navigation by Categories:*** shows the avaiable products categories.
  - ***Navigation by Product List:*** shows the products avaiable within each category.
  - ***View Detail Products:*** shows the details of the selected product.
  - ***Carousel:*** shows different images of the product selected.
  - ***Add Product to the Cart:*** Add the selected product to the cart.
  - ***Cart:*** shows the products added to the cart, their prices and the total price to pay.
  - ***Trash Icon:*** delete the product from the cart, and subtract it\'s value from the total price to pay.
  - ***Orders:*** shows the orders saved in the Firebase database, linked to the logged in user.
  - ***Search:*** the user can enter the name of a product and the application will show the results, if any.
  - ***User Profile:*** shows the user's data (personal data, current location, last saved location, etc.). From this screen you can take a photo for your profile picture and also log out of the app.


### Requirements

- [Visual Studio Code](https://code.visualstudio.com/) 
  - _Or the IDE that you prefer_
- [Android Studio](https://developer.android.com/studio?hl=es-419)
  - _You can also use your Browser or the [Expo Go Phone](https://expo.dev/client) application_.

### Main Techs & Tools

- [React Native:](https://reactnative.dev/) mobile application development framework that enables developers to create native apps for iOS and Android using JavaScript and React. It allows developers to write once and run on multiple platforms.
- [Expo CLI:](https://docs.expo.dev/more/expo-cli/) is a command-line tool that facilitates mobile app development using Expo, a platform for building mobile apps with React Native and integrated tools such as easy access to native APIs and third-party libraries.
- [Redux:](https://redux.js.org/) is a state management library for JavaScript applications, particularly useful for apps with a large amount of changing data. It provides a centralized store for the application state and rules for its consistent modification.
- [GeoLib:](https://www.npmjs.com/package/geolib) is a JavaScript library that provides utilities for performing geometric and geographic calculations, such as calculating the distance between two geographical points, finding the midpoint of a route, etc.
- [Yup:](https://www.npmjs.com/package/yup) is a schema validation library for JavaScript that allows defining validation schemas for objects and validating them easily and efficiently. It's especially useful for validating form data in web and mobile applications.
- [Google Fonts:](https://fonts.google.com/) is a collection of free typefaces that can be used in web and mobile projects.
- [Firebase:](https://firebase.google.com/?hl=es) is a mobile and web app development platform developed by Google. It provides a variety of backend services, including user authentication, real-time database, cloud storage, analytics, and more.
- [SQLite:](https://www.sqlite.org/index.html) is a lightweight, open-source relational database engine widely used in mobile and embedded applications. It provides efficient and reliable data storage using a single database file. It's compatible with most operating systems and programming languages.

### Deployment With

- [Netflify:](https://www.netlify.com/) is a cloud computing company that offers hosting and serverless backend services for web applications. It provides features such as continuous deployment, serverless functions, form handling, and global CDN (Content Delivery Network) for fast content delivery.
- [EAS (Expo Application Services):](https://expo.dev/eas) is a set of cloud services provided by Expo for building, deploying, and managing React Native apps. It includes features such as seamless build and release automation, app signing, over-the-air updates, and performance monitoring. EAS streamlines the app development lifecycle and simplifies the process of deploying apps to app stores.


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




==================================================

###  Ideas for Future Implementations:

- **Navigators:** _don\'t show navegation icons in \'initialRouteName\'._
- **Navigators:** _show category name or category product in the \'header\'._
- Cart: _implement quantity substraction in firebase stock._
- Security: _implement appropriate security tools and protocols._
- User Profile: _allow editing user data._
- User Profile: _allow changing password._
- Login Screen: _recovery password method._
- Login Screen: _activate fingerprint or facial recognition unlock._
- Pay Methods: _add real payment methods._
- Favorite List: _add products to a favorites list or wish list._
- LogIn / LogOut: _change these screens to another more suitable part of the application, maybe before paying._
- SignUp & LogIn Validation Schemes: _improve validation schemes._
- SignUp: _request more data to register and display some on the profile screen._
- App Images: _add app images to the repository and to this file._
- Search Product: _move this function to categories screen._
