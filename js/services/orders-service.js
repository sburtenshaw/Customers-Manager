customersApp.service('OrdersService', function() {
	this.orders = [];

	this.returnOrders = function() {
		if (this.orders.length > 0) {
			return this.orders;
		} else {
			return false;
		}
	}

	this.returnOrdersForCustomer = function(customerId) {
		if (this.orders.length > 0) {
			var customerOrders = [];
			for (var i = 0; i < this.orders.length; i++) {
				if (this.orders[i].customerId == customerId) {
					customerOrders.push(this.orders[i]);
				}
				if (i == (this.orders.length - 1)) {
					if (customerOrders.length > 0) {
						return customerOrders;
					} else {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.returnOrderAmountForCustomer = function(customerId) {
		if (this.orders.length > 0) {
			var count = 0;
			for (var i = 0; i < this.orders.length; i++) {
				if (this.orders[i].customerId == customerId) {
					count++;
				}
				if (i == (this.orders.length - 1)) {
					if (count > 0) {
						return count;
					} else {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.returnOrderById = function(orderId) {
		if (this.orders.length > 0) {
			for (var i = 0; i < this.orders.length; i++) {
				if (this.orders[i].id == orderId) {
					return this.orders[i];
				} else {
					if (i == (this.orders.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.updateOrder = function(order) {
		if (this.orders.length > 0) {
			for (var i = 0; i < this.orders.length; i++) {
				if (this.orders[i].id == order.id) {
					this.orders[i] = order;
				} else {
					if (i == (this.orders.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.deleteOrder = function(orderId) {
		if (this.orders.length > 0) {
			for (var i = 0; i < this.orders.length; i++) {
				if (this.orders[i].id == orderId) {
					this.orders.splice(i, 1);
				} else {
					if (i == (this.orders.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.deleteOrdersForCustomer = function(customerId) {
		if (this.orders.length > 0) {
			var that = this,
				i = 0;

			function checkOrdersForDelete(i) {
				if (that.orders[i].customerId == customerId) {
					that.orders.splice(i, 1);
					if (that.orders.length > 0 && i < that.orders.length) {
						checkOrdersForDelete(i);
					}
				} else {
					if (i < that.orders.length) {
						i++;
						checkOrdersForDelete(i);
					}
				}
			}
			checkOrdersForDelete(i);
		} else {
			return false;
		}
	}

	this.getNextId = function() {
		if (this.orders.length > 0) {
			return (this.orders[(this.orders.length - 1)].id + 1);
		} else {
			return 1;
		}
	}

	this.addOrder = function(order) {
		this.orders.push(order);
	}
});