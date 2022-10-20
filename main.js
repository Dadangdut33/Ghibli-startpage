function bg() {
	let backgrounds = [
		"https://64.media.tumblr.com/ed8ed0a984d5b6b153b4d94016c4105a/tumblr_ol4v982yLm1qzxv73o1_540.gif",
		"https://c.tenor.com/P42_aeznb9kAAAAC/kikis-delivery-service.gif",
		"https://64.media.tumblr.com/ef54d660ef19b41539113af32810aade/tumblr_ptr93kR27V1xkr0iao1_540.gif",
		"https://media.moddb.com/images/groups/1/1/84/F.G.A.P05.gif",
		"https://data.whicdn.com/images/255015759/original.gif",
		"https://64.media.tumblr.com/6ab850c56974932f0767d34fd59deb9b/tumblr_pqlwrfTW6I1v6jtpi_540.gif",
		"https://64.media.tumblr.com/2ecf0070ac6cc15e0f8895a971a0dbdb/tumblr_pqlwrgr5se1v6jtpi_500.gif",
		"https://64.media.tumblr.com/c3fbdd7dfb0e2e20b41ba63329de8502/tumblr_opbll5RuZo1uxvvvzo1_500.gif",
		"https://cpb-ap-se2.wpmucdn.com/mediafactory.org.au/dist/9/213/files/2016/04/tumblr_o27yrsMdrf1v1u6k0o1_500-u78xdd.gif",
		"https://64.media.tumblr.com/46fed6399806a0ecce5eba2c235908d0/tumblr_o6bm5bpFLZ1vruqgxo1_1280.gif",
		"https://thumbs.gfycat.com/LongBeneficialHectorsdolphin-size_restricted.gif",
	];
	var item = backgrounds[Math.floor(Math.random() * backgrounds.length)];
	document.getElementById("bg-image").style.backgroundImage = "url('" + item + "')";
}

function checkTime(i) {
	if (i < 10) {
		i = "0" + i;
	}
	return i;
}

function time() {
	let now = new Date();
	let h = now.getHours();
	let m = now.getMinutes();
	min = checkTime(m);
	hour = checkTime(h);
	document.getElementById("mainTime").innerHTML = hour + ":" + min;
	setTimeout(time, 1000);
}

function date() {
	const today = new Date();
	let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sept", "Oct", "Nov", "Dec"];

	let day = today.getUTCDate();
	let month = months[today.getMonth()];
	let fullDate = day + " " + month;
	return (document.getElementById("date").innerHTML = fullDate);
}

function quotes() {
	let list = [
		" 'it's been a pleasure meeting you, even if you are my least favourite vegetable' - sophie ",
		" 'we need to find our own inspiration, kiki. sometimes it's not easy.' -Ursula ",
		" 'try laughing. then whatever scares you will go away.' - tatsuo kusakabe ",
		" 'we need to find our own inspiration, kiki. sometimes it's not easy.' -Ursula ",
		" 'i'm not leaving here until you give me a job!' - chihiro ",
	];
	let quote = list[Math.floor(Math.random() * list.length)];
	document.getElementById("quote").innerHTML = quote;
}

function change(a) {
	if (a !== "stop") document.getElementById("vid").src = a;
	else document.getElementById("vid").src = "";
}

function main() {
	bg();
	time();
	date();
	quotes();
}
