customersApp.service('CustomersService', function() {
	this.customers = [];

	this.returnCustomers = function() {
		if (this.customers.length > 0) {
			return this.customers;
		} else {
			return false;
		}
	}

	this.returnCustomerCount = function() {
		if (this.customers.length > 0) {
			return this.customers.length;
		} else {
			return false;
		}
	}

	this.addCustomer = function(newCustomer) {
		this.customers.push(newCustomer);
	}

	this.getNextId = function() {
		if (this.customers.length > 0) {
			return (this.customers[(this.customers.length - 1)].id + 1);
		} else {
			return 1;
		}
	}

	this.returnCustomerDetails = function(customerId) {
		if (this.customers.length > 0) {
			for (var i = 0; i < this.customers.length; i++) {
				if (this.customers[i].id == customerId) {
					return this.customers[i];
				} else {
					if (i == (this.customers.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.updateCustomer = function(customer) {
		if (this.customers.length > 0) {
			for (var i = 0; i < this.customers.length; i++) {
				if (this.customers[i].id == customer.id) {
					this.customers[i] = customer;
				} else {
					if (i == (this.customers.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.returnCustomerDetailsForOrders = function(customerId) {
		if (this.customers.length > 0) {
			for (var i = 0; i < this.customers.length; i++) {
				if (this.customers[i].id == customerId) {
					return {
						customerId: this.customers[i].id,
						name: this.customers[i].name,
						gender: this.customers[i].gender
					}
				} else {
					if (i == (this.customers.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.returnCustomerNameById = function(customerId) {
		if (this.customers.length > 0) {
			for (var i = 0; i < this.customers.length; i++) {
				if (this.customers[i].id == customerId) {
					return this.customers[i].name;
				} else {
					if (i == (this.customers.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.returnCustomerIdByName = function(customerName) {
		if (this.customers.length > 0) {
			for (var i = 0; i < this.customers.length; i++) {
				if (this.customers[i].name == customerName) {
					return this.customers[i].id;
				} else {
					if (i == (this.customers.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}

	this.deleteCustomer = function(customerId) {
		if (this.customers.length > 0) {
			for (var i = 0; i < this.customers.length; i++) {
				if (this.customers[i].id == customerId) {
					this.customers.splice(i, 1);
				} else {
					if (i == (this.customers.length - 1)) {
						return false;
					}
				}
			}
		} else {
			return false;
		}
	}
});