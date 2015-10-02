customersApp.controller('OrdersController', 
	function($scope, $location, CustomersService, OrdersService) {

		$scope.orders = getOrders();

		function getOrders() {
			var orders = OrdersService.returnOrders();

			if (orders.length > 0) {
				for (var i = 0; i < orders.length; i++) {
					orders[i].customer = CustomersService.returnCustomerDetailsForOrders(orders[i].customerId);
				}
				return orders;
			} else {
				return false;
			}
		}

		$scope.deleteOrder = function(orderId) {
			OrdersService.deleteOrder(orderId);

			$scope.orders = getOrders();

			$location.path('/orders');
		}
});

customersApp.controller('CustomerOrdersController', 
	function($scope, $routeParams, $location, CustomersService, OrdersService) {

		var customerId = $routeParams.customerId;

		$scope.customer = getCustomerOrders(customerId);

		function getCustomerOrders(customerId) {
			var customer = CustomersService.returnCustomerDetails(customerId);
			if (customer != false) {
				customer.orders = OrdersService.returnOrdersForCustomer(customerId);
				return customer;
			} else {
				$location.path('/');
			}
		}

		$scope.deleteOrder = function(orderId) {
			OrdersService.deleteOrder(orderId);

			$scope.customer = getCustomerOrders(customerId);

			$location.path('/orders/' + customerId);
		}
});

customersApp.controller('AddOrderController', 
	function($scope, $location, CustomersService, OrdersService) {

		$scope.customers = CustomersService.returnCustomers();

		$scope.addOrder = function() {
			var newOrderDetails = {
				id: OrdersService.getNextId(),
				customerId: CustomersService.returnCustomerIdByName($scope.newOrder.customer),
				product: $scope.newOrder.product,
				price: $scope.newOrder.price
			}

			OrdersService.addOrder(newOrderDetails);

			$location.path('/orders');
		}
});

customersApp.controller('AddCustomerOrderController', 
	function($scope, $location, $routeParams, CustomersService, OrdersService) {

		var customerId = $routeParams.customerId;

		$scope.customerName = getCustomerName(customerId);
		function getCustomerName(customerId) {
			var customer = CustomersService.returnCustomerNameById(customerId);
			if (customer != false) {
				return customer;
			} else {
				$location.path('/add-order');
			}
		}

		$scope.addOrder = function() {
			var newOrderDetails = {
				id: OrdersService.getNextId(),
				customerId: customerId,
				product: $scope.newOrder.product,
				price: $scope.newOrder.price
			}

			OrdersService.addOrder(newOrderDetails);

			$location.path('/orders/' + customerId);
		}
});

customersApp.controller('EditOrderController', 
	function($scope, $location, $routeParams, CustomersService, OrdersService) {

		var orderId = $routeParams.orderId;

		var order = OrdersService.returnOrderById(orderId);

		order.customer = CustomersService.returnCustomerNameById(order.customerId);

		order.price = parseInt(order.price);

		$scope.order = order;
		$scope.customers = CustomersService.returnCustomers();

		$scope.updateOrder = function() {
			var newOrderDetails = {
				id: orderId,
				customerId: CustomersService.returnCustomerIdByName($scope.order.customer),
				product: $scope.order.product,
				price: $scope.order.price
			}

			OrdersService.updateOrder(newOrderDetails);

			$location.path('/orders');
		}
});