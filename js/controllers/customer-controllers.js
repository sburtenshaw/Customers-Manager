customersApp.controller('CustomersController', 
	function($scope, $location, CustomersService, OrdersService) {

		$scope.customers = getCustomers();

		function getCustomers() {
			var customers = CustomersService.returnCustomers();
			if (customers.length > 0) {
				for (var i = 0; i < customers.length; i++) {
					customers[i].orders = OrdersService.returnOrderAmountForCustomer(customers[i].id);
				}
				return customers;
			} else {
				return false;
			}
		}

		$scope.deleteCustomer = function(customerId) {
			CustomersService.deleteCustomer(customerId);

			OrdersService.deleteOrdersForCustomer(customerId);

			$scope.customers = getCustomers();

			$location.path('/');
		}
});

customersApp.controller('AddCustomerController', 
	function($scope, $location, CustomersService) {

		$scope.addCustomer = function() {
			var newCustomer = {
				id: CustomersService.getNextId(),
				name: $scope.newCustomer.name,
				gender: $scope.newCustomer.gender,
				addressLineOne: $scope.newCustomer.addressLineOne,
				addressLineTwo: $scope.newCustomer.addressLineTwo,
				city: $scope.newCustomer.city,
				postCode: $scope.newCustomer.postCode
			}

			CustomersService.addCustomer(newCustomer);

			$location.path('/');
		}
});

customersApp.controller('CustomerDetailsController', 
	function($scope, $routeParams, $location, CustomersService, OrdersService) {

		var customerId = $routeParams.customerId;

		$scope.customerDetails = getCustomerDetails(customerId);

		function getCustomerDetails(customerId) {
			var customer = CustomersService.returnCustomerDetails(customerId);
			if (customer != false) {
				customer.orders = OrdersService.returnOrderAmountForCustomer(customerId);
				return customer;
			} else {
				$location.path('/');
			}
		}
});

customersApp.controller('EditCustomerController', 
	function($scope, $routeParams, $location, CustomersService, OrdersService) {

		var customerId = $routeParams.customerId;

		$scope.customerDetails = getCustomerDetails(customerId);

		function getCustomerDetails(customerId) {
			var customer = CustomersService.returnCustomerDetails(customerId);
			if (customer != false) {
				customer.orders = OrdersService.returnOrderAmountForCustomer(customerId);
				return customer;
			} else {
				$location.path('/');
			}
		}

		$scope.updateCustomerDetails = function() {
			var newCustomerDetails = {
				id: customerId,
				name: $scope.customerDetails.name,
				gender: $scope.customerDetails.gender,
				addressLineOne: $scope.customerDetails.addressLineOne,
				addressLineTwo: $scope.customerDetails.addressLineTwo,
				city: $scope.customerDetails.city,
				postCode: $scope.customerDetails.postCode
			}

			CustomersService.updateCustomer(newCustomerDetails);

			$location.path('/customer-details/' + customerId);
		}
});