'use strict';

/**
 * @ngdoc function
 * @name testSohoApp.controller:HomeCtrl
 * @description
 * # HomeCtrl
 * Controller of the testSohoApp
 */
angular.module('testSohoApp')
	.controller('HomeCtrl', function() {

		this.slides = {
			solutions: [{
				quota: 12
			}, {
				quota: 6
			}, {
				quota: 3
			}],
			travels: [{
				destination: 'RIO DE JANEIRO',
				desc: 'Mar, montaña, ríos y lagunas se unieron para crear una geografía variada y hermosa.'
			}, {
				destination: 'LONDRES',
				desc: 'El resultado del crecimiento de dos ciudades, ciudad de Londres y Westmister.'
			}, {
				destination: 'PARIS',
				desc: 'Situada en el centro norte de Francia, París es una de las ciudades más visitadas del mundo.'
			}]
		};

	});