import * as SQLite from 'expo-sqlite';

const db = SQLite.openDatabase('ecommerceReactNative.db')

// CREATE TABLE
export const init = () => {

  const promise = new Promise((resolve, reject) => {

    db.transaction(transaction => {
      // executeSql(sqlStatement, args, resolve callback, reject errorCallback)
      transaction.executeSql('CREATE TABLE IF NOT EXISTS sessions (localId TEXT PRIMARY_KEY NOT NULL, email TEXT NOT NULL, token TEXT NOT NULL)', [], () => resolve(),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}

// UPDATE TABLE
export const insertSession = ({ localId, email, token }) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(transaction => {
      transaction.executeSql(
        'INSERT INTO sessions (localId, email, token) VALUES (?, ?, ?);',
        [localId, email, token],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}

// READ TABLE
export const fetchSessions = () => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(transaction => {
      transaction.executeSql(
        'SELECT * FROM sessions',
        [],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}

// DELETE TABLE
export const deleteSession = (localId) => {
  const promise = new Promise((resolve, reject) => {
    db.transaction(transaction => {
      transaction.executeSql(
        'DELETE FROM sessions WHERE localId = ?',
        [localId],
        (_, result) => resolve(result),
        (_, error) => reject(error)
      )
    })
  })
  return promise
}