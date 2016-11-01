$(function (){

var $orders = $('#orders'); // catchig the dom
var $name = $('#name'); // from DOM
var $drink = $('#drink'); // from DOM

function addOrders(order){
	$orders.append('<li> Name: '+ order.name +', Drink: '+ order.drink + '</li>');
}

	$.ajax({
		type: 'GET', 
		url: 'http://rest.learncode.academy/api/hola/testcafe',
		success: function(orders) {
			console.log(orders);
			$.each(orders, function(i, order) {
				addOrders(order);
			});
		},	
		error: function() {
			alert('No Saved');
		}	
	});

	$('#add-order').on('click', function() {

		var order = {
			name: $name.val(),
			drink: $drink.val(),
		};

		$.ajax({
		  type: 'POST',
		  url: 'http://rest.learncode.academy/api/hola/testcafe',
		  data: order,
		  success: function(newOrder) {
				addOrders(newOrder);
		  }
		});
	})

	$('#delete-order').on('click', function() {

		$.ajax({
		  type: 'DELETE',
		  url: 'http://rest.learncode.academy/api/hola/testcafe/id',
		  success: function() {
		  	console.log('deleted')
		  }
		});
	})	

})