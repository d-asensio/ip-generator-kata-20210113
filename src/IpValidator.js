class IpValidator {
  static ValidateIpv4Address (address) {
    if(address==='') return false;    
    if (this.#ConstainsInvalidChar(address)) return false;
    if (address.split('.').length <= 3) return false

    return true;
  }

  static #HasLessThanFourOctets(address) {
    
  }

  static #ConstainsInvalidChar(address)
  {
    return !Array
      .from(address)
      .every(this.#CharIsValid);
  }

  static #CharIsValid(char)
  {
      let caractersValids = "0123456789.";
      return caractersValids.includes(char);
  }

}

module.exports = IpValidator