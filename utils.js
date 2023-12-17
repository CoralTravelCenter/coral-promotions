function dateFormatter(str) {
	const [date_str, time_str] = str.split(' ');
	const reformat_date = date_str.split('.').reverse().join('-') + `T${time_str}`;
	return reformat_date;
}