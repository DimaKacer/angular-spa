"use strict";

module.exports = function (angular) {

    var cart = angular.module('app.cart',[]);
    
    cart.config(configCb);
    
    function configCb($stateProvider) {
        $stateProvider
            .state('cart', {
                url: '/cart',
                template: 'Hello world from cart module',
            });
    };

};
