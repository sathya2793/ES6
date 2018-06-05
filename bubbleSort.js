let bubble_Sort = (...a) => { //Rest parameter and array function
	let swapp;
	let n = a.length-1; // total length of the array
	let x = a;

	do
	{
        swapp = false;
        for( let i=0; i<n; i++){
        	if(x[i] < x[i+1]){
        		let temp = x[i];
        		x[i] = x[i+1];
        		x[i+1] =  temp;
        		swapp = true;
        	} // end of if loop
        } // end of for loop
        n--;
	} while(swapp); // end of do_While
        console.log(x)
	return x;
} // end of function

bubble_Sort(2,34,12,65,39,23,89,92,1,5)
