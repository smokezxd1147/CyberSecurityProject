const cryptoJs = require('crypto-js');
const cryptoKey = 'ojerfng9uwenft90ndotguheio'

module.exports = {
  async beforeCreate(event) {
      if (event.params.data && event.params.data.PhoneNumber) {
          let PhoneNumber = event.params.data.PhoneNumber;
          PhoneNumber = PhoneNumber.padEnd(128, ' '); // เพิ่มช่องว่างเพื่อให้มีความยาวเท่ากับ 128
          const hashedPhoneNumber = cryptoJs.AES.encrypt(PhoneNumber, cryptoKey).toString();
          event.params.data.PhoneNumber = hashedPhoneNumber;
      }

  },
  async afterFindOne(event) {
      if (event.result && event.result.PhoneNumber) {
          let PhoneNumber = cryptoJs.AES.decrypt(event.result.PhoneNumber, cryptoKey).toString(cryptoJs.enc.Utf8);
          PhoneNumber = PhoneNumber.trim(); // ตัดช่องว่างที่เหลือออก
          event.result.PhoneNumber = PhoneNumber;
      }

  },
  async afterFindMany(event) {
      event.result.map(result => {
          if (result && result.PhoneNumber) {
              let PhoneNumber = cryptoJs.AES.decrypt(result.PhoneNumber, cryptoKey).toString(cryptoJs.enc.Utf8);
              PhoneNumber = PhoneNumber.trim(); // ตัดช่องว่างที่เหลือออก
              result.PhoneNumber = PhoneNumber;
          }

          return result;
      });
  }
}

