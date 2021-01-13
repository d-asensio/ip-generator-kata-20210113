const IpValidator = require('./IpValidator')

it('returns true for a valid IP', () => {
  expect(IpValidator.ValidateIpv4Address("192.168.1.1")).toBe(true)
})

it('takes an empty string as invalid adress', () => {
  expect(IpValidator.ValidateIpv4Address("")).toBe(false)
})

it('takes a string with not allowed chars as invalid', () => {
  expect(IpValidator.ValidateIpv4Address("a")).toBe(false)
})

it('takes a string with less than 3 dots as invalid', () => {
  expect(IpValidator.ValidateIpv4Address("100.100.100")).toBe(false)
})




