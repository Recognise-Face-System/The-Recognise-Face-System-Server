const db = require('../database/dbConnect')

const updateInfo = async (account_ID, password, phone_num, address, avatar) => {
  return new Promise((resolve, reject) => {
    const sql = `CALL update_info(?,?,?,?,?)`
    const params = [account_ID, password, phone_num, address, avatar]
    db.query(sql, params, (err, result) => {
      if (err) reject(err)
      resolve(true)
    })
  })
}
const getUser = async (account_ID) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM account WHERE ID = ?`
    const params = [account_ID]
    db.query(sql, params, (err, result) => {
      if (err) reject(err)
      console.log(result)
      if (result.length) {
        resolve(result[0])
      } else {
        resolve(false)
      }
    })
  })
}
module.exports = { updateInfo, getUser }
