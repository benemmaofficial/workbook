//VALIDATE WORKBOOK APPLICATION FORM
function validate() {
  if (document.form.name.value == "") {
      displayAlert.create ({
          message: 'Please enter your full name',
          header: 'Required!',
          buttons: ['OKAY'],
      }).then(alertElement => {
          alertElement.present();
      })
      document.form.name.focus();
      return false;
  }
  if (document.form.email.value == "") {
      displayAlert.create ({
          message: 'Please enter an email address...',
          header: 'Required!',
          buttons: ['OKAY'],
      }).then(alertElement => {
          alertElement.present();
      })
      document.form.email.focus();
      return false;
  }
  if (document.form.postcode.value == "") {
      displayAlert.create ({
          message: 'Please enter your postcode',
          header: 'Required!',
          buttons: ['OKAY'],
      }).then(alertElement => {
          alertElement.present();
      })
      document.form.postcode.focus();
      return false;
  }
  if (document.form.choice.value == "") {
      displayAlert.create ({
          message: 'You must choose an option',
          header: 'Required!',
          buttons: ['ALRIGHT!'],
      }).then(alertElement => {
          alertElement.present();
      })
      document.form.choice.focus();
      return false;
  }
      return true;
}
const displayAlert = document.querySelector('ion-alert-controller');
