const db = require("../database/dbConnect");

const updateInfo = async (account_ID, password, phone_num, address, avatar) => {
  return new Promise((resolve, reject) => {
    const sql = `CALL update_info(?,?,?,?,?)`;
    const params = [account_ID, password, phone_num, address, avatar];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      resolve(true);
    });
  });
};
const getUser = async (account_name) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT * FROM account WHERE account_name = ?`;
    const params = [account_name];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      if (result.length) {
        resolve(result[0]);
      } else {
        resolve(false);
      }
    });
  });
};
const createOtp = async (account_ID) => {
  return new Promise((resolve, reject) => {
    const sql = `CALL create_OTP(?)`;
    const params = [account_ID];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      resolve(result);
    });
  });
};
const deleteOtp = async (account_ID) => {
  return new Promise((resolve, reject) => {
    const sql = `CALL delete_OTP(?)`;
    const params = [account_ID];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);

      resolve(true);
    });
  });
};
const getOtp = async (account_ID) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT code FROM OTP WHERE account_ID = ?`;
    const params = [account_ID];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      if (result.length) {
        resolve(result[0]);
      } else {
        resolve(false);
      }
    });
  });
};

// PENDING model
const getAttendanceTrack = async (account_ID) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT code FROM OTP WHERE account_ID = ?`;
    const params = [account_ID];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      if (result.length) {
        resolve(result[0]);
      } else {
        resolve(false);
      }
    });
  });
};

const getEmployeeDetails = async (account_ID) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT code FROM OTP WHERE account_ID = ?`;
    const params = [account_ID];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      if (result.length) {
        resolve(result[0]);
      } else {
        resolve(false);
      }
    });
  });
};
const getAnnouncement = async (account_ID) => {
  return new Promise((resolve, reject) => {
    const sql = `SELECT code FROM OTP WHERE account_ID = ?`;
    const params = [account_ID];
    db.query(sql, params, (err, result) => {
      if (err) reject(err);
      if (result.length) {
        resolve(result[0]);
      } else {
        resolve(false);
      }
    });
  });
};
module.exports = {
  updateInfo,
  getUser,
  getOtp,
  deleteOtp,
  createOtp,
  getAttendanceTrack,
  getEmployeeDetails,
  getAnnouncement,
};
