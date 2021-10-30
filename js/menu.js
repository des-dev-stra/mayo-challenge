$(document).ready(function () {
	$.getJSON("js/navigation.json", function (data) {
		console.log(data);
		var output = "<ul>";
		$.each(data, function (key, val) {
			$.each(val, function (nav, item) {
				output += "<li>" + item.name + "</li>";
				console.log(item);
				if (item.name === "About Our Company") {
					return false;
				}
			});
		});
		output += "</ul>";
		$("nav").html(output);
	});
});
