const arr = [1, 2, 3, 4, 1, 0, 2, 2];

const divide = (arr, n) => {
  // Write your code here
	const result = [];
	let currentArray = [];
	let currentSum = 0;

	for(let num of arr){
		if(currentSum+num <= n){
			currentArray.push(num);
			currentSum+=num;
		}
		else{
			if(currentArray.length > 0){
				result.push(currentArray);
			}
			currentArray = [num];
			currentSum = num;
		}
	}

	if(currentArray.length > 0){
		result.push(currentArray);
	}

	return result;
};

const n = prompt("Enter n: ");
alert(JSON.stringify(divide(arr, n)));
