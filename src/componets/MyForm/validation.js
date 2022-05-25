import * as yup from "yup"

yup.addMethod(yup.number, 'twoDecimalSign', function (num, message) {
  return this.test('twoDecimalSign', message || `quantity of sign after decimal dot must be 2 or lower`,
    function (value, context) {
      const quantity = (value && value.toString().includes('.')) ? value.toString().split('.').pop().length : 0;
      return quantity <= 2
    })
})

export default yup