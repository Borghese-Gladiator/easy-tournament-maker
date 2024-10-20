export function yyyymmdd(date) {
	const mm = date.getMonth() + 1; // getMonth() is zero-based
	const dd = date.getDate();

	return [
		(mm > 9 ? '' : '0') + mm,
		(dd > 9 ? '' : '0') + dd,
		date.getFullYear(),
	].join('/');
};
