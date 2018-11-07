'use strict';

(function () {

angular
  .module('bitcoincom.controllers')
  .controller('buyBitcoinAddCardFormController', addCardFormController);

  function addCardFormController(
    moonPayService
    , $scope
  ) {
    var vm = this;

    // Functions
<<<<<<< HEAD
    vm.backButtonPressed = backButtonPressed;
    vm.validateCardNumber = validateCardNumber;
    vm.validateExpiration = validateExpiration;
    vm.validateSecurityCode = validateSecurityCode;

    vm.handleCardNumberChange = handleCardNumberChange;//.bind(this);
    vm.handleSecurityChange = handleSecurityChange;//.bind(this);
    vm.handleExpirationChange = handleExpirationChange;//.bind(this);
    vm.submitCard = submitCard;
    vm.validatePage = validatePage;

    var verifyNameText = "Verify and complete your card information.";
    var contactingText = "Contacting the card issuer.";
    var initialSubtext = verifyNameText;

    function backButtonPressed() {
        $scope.$ionicGoBack();
    }
    
    function submitCard() {
      vm.subtext = contactingText;
      // TODO - Implement MoonPay Card Verification
      // TODO - Implement MoonPay Card Add
      // TODO - Implement MoonPay Card Selection
      return new Promise(function(resolve, reject) {
        $scope.$ionicGoBack();
        resolve();
      });

    }

    function handleCardNumberChange() {
      // Clean up string
      if(!vm.card.number) {
        return;
      }
      vm.card.number = vm.card.number.replace(/\D/g,'');
      if (vm.validateCardNumber() &&
        vm.validatePage()) {
          vm.submitCard();
        }
    }

    function handleSecurityChange() {
      // Clean up string
      if(!vm.card.security) {
        return;
      }
      vm.card.security = vm.card.security.replace(/\D/g,'');
      if (vm.validateSecurityCode() &&
        vm.validatePage()) {
          vm.submitCard();
      }
    }

    function handleExpirationChange() {
      if (vm.validateExpiration() &&
        vm.validatePage()) {
          vm.submitCard();
      }
    }

    function validateCardNumber() {
      return vm.card.number && vm.card.number.length === 16;
    }

    function validateSecurityCode() {
      return vm.card.security && vm.card.security.length === 3;
    }

    function validateExpiration() {
      var now = new Date();
      if (vm.card.expiration && vm.card.expiration.match(/\d{2}\/\d{4}/g,'')) {
        var split = vm.card.expiration.split(/\//g);
        return split[0].match(/[0-1]\d/) && 
          parseInt(split[0]) <= 12 &&
          parseInt(split[0]) >= now.getMonth() &&
          parseInt(split[1]) >= now.getFullYear();
      }
      return false;
    }

    function validatePage() {
      return vm.validateCardNumber() &&
        vm.validateSecurityCode() &&
        vm.validateExpiration()
    }

    function _initVariables() {
      vm.subtext = initialSubtext;
      vm.card = { 
        number: '',
        expiration: '',
        security: '',
      };
=======
    vm.didPushBack = didPushBack;
    vm.didPushAdd = didPushAdd;
    
    // Variables
    vm.subtext = "Enter your card information."
    vm.card = {};

    function didPushAdd() {

      var splitExpirationDate = vm.card.expiration.trim().split('/');
      var card = {
        number: vm.card.number.trim(),
        expiryMonth: parseInt(splitExpirationDate[0]),
        expiryYear: parseInt(splitExpirationDate[1]),
        cvc: vm.card.cvc.trim()
      }
     
      // Check if the card is valid
      if (!isValidCard(card)) {
        // Handle error message
        console.log('not valid')
        return;
      } else {

        // Send to moon pay
        moonPayService.createCard(card).then(function(card) {
          console.log(card)
          $scope.$ionicGoBack();
        }, function (err) {
          // Handle the error
          console.log(err);
        });
      }
    }

    function didPushBack() {
      $scope.$ionicGoBack();
    }

    function isValidCard(card) {
      return card.number.length === 16 && card.cvc.length === 3 && card.expiration.length === 7;
    }

    function _initVariables() {
      vm.subtext = "Enter your card information.";
>>>>>>> 451787777592824b36a949d6ca29f8fb9a6fa795
    }

    $scope.$on('$ionicView.beforeEnter', _onBeforeEnter);

    function _onBeforeEnter(event, data) {
      _initVariables();
    }

<<<<<<< HEAD
    function _onBeforeLeave(event, data) {
      var defaultWasChanged = initialDefaultPaymentMethod !== vm.defaultPaymentMethod;
      console.log('onBeforeExit(), defaultWasChanged: ' + defaultWasChanged);
    }
=======
>>>>>>> 451787777592824b36a949d6ca29f8fb9a6fa795
  }
})();
