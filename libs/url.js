export default function createUrl(string) {
	// validate string as url
	let url;
	if (string.match(/^(http|https):\/\//i) === null) {
		url = "http://" + string;
	}

	return url;
}
