//contact builder to avoid web bot spam
var username = "mlsmith45";
var hostname = "gmail.com";
var linktext = username + "@" + hostname;
var phone = "416.832.2629";

var output = "<p>email: <a href='" + "mail" + "to:" + username + "@" + hostname + "'>" + linktext + "</a></p>";

output += "<p>mobile: " + phone;


document.getElementById("contact").innerHTML = output;