var customersApp = angular.module('CustomersApp', ['ngRoute']);

customersApp.config(function($routeProvider) {
	$routeProvider.when('/', {
		templateUrl: 'partials/customers/customers.html',
		controller: 'CustomersController'
	})
	.when('/add-customer', {
		templateUrl: 'partials/customers/add-customer.html',
		controller: 'AddCustomerController'
	})
	.when('/customer-details/:customerId', {
		templateUrl: 'partials/customers/customer-details.html',
		controller: 'CustomerDetailsController'
	})
	.when('/edit-customer/:customerId', {
		templateUrl: 'partials/customers/edit-customer.html',
		controller: 'EditCustomerController'
	})
	.when('/orders', {
		templateUrl: 'partials/orders/orders.html',
		controller: 'OrdersController'
	})
	.when('/orders/:customerId', {
		templateUrl: 'partials/orders/customer-orders.html',
		controller: 'CustomerOrdersController'
	})
	.when('/add-order', {
		templateUrl: 'partials/orders/add-order-without-id.html',
		controller: 'AddOrderController'
	})
	.when('/add-order/:customerId', {
		templateUrl: 'partials/orders/add-order-with-id.html',
		controller: 'AddCustomerOrderController'
	})
	.when('/edit-order/:orderId', {
		templateUrl: 'partials/orders/edit-order.html',
		controller: 'EditOrderController'
	});
});