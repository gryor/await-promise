function await(generator) {
	let series = Promise.resolve();
	let calls = [];

	for(let promise of generator) {
		series = series.then(() => promise);
		calls.push(series);
	}

	return Promise.all(calls);
}