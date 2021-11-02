fib = (n) => {
	if (n == 0) return n;
	else if (n == 1) return n;
	else return fib(n - 1) + fib(n - 2);
};

printFib = (n) => {
	console.log(0);
	if (n > 1) {
		for (let i = 1; i <= n; i++) {
			console.log(fib(i));
		}
	}
};

printFib(30);
