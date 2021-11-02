fib = (n) => {
	if(n < 2) return n;
	else return fib(n - 1) + fib(n - 2);
};

printFib = (n) => {
    //fib always starts with 0
	console.log(0);
	if (n > 1) {
		for (let i = 1; i <= n; i++) {
			console.log(fib(i));
		}
	}
};

printFib(4);
