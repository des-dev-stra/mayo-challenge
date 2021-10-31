$(document).ready(function () {
	// Default Menu
	$.getJSON("js/navigation.json", function (data) {
		console.log(data);
		var defaultList = "<ul>";
		$.each(data, function (key, val) {
			$.each(val, function (nav, item) {
				defaultList += "<li>" + '<a href="' + item.url + '">' + item.name + "</a>" + "</li>";
				console.log(item);
				if (item.name === "About Our Company") {
					return false;
				}
			});
		});
		defaultList += "</ul>";
		$(".section--header__default-menu nav").html(defaultList);
	});
	// Popout Menu
	$.getJSON("js/navigation.json", function (data) {
		console.log(data);
		var popoutList = "<ul>" + "<li>" + "<a href=' / '>" + "Home" + "</a>" + "</li>";
		$.each(data, function (key, val) {
			$.each(val, function (nav, item) {
				popoutList += "<li>" + '<a href="' + item.url + '">' + item.name + "</a>" + "</li>";
				console.log(item);
			});
		});
		popoutList += "</ul>";
		$(".section--header__popout-menu nav").html(popoutList);
	});
	// Show/Hide Menu
	$(".section--header__menu-text").click(function () {
		$(".section--header__popout-menu").show();
	});
	// Show/Hide Menu
	$(".section--header__popout-menu .btn-close").click(function () {
		$(".section--header__popout-menu").hide();
	});
});
