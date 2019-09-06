
function bubbleSort(inputArray) {
    var swapp;
    do {
        swapp = false;
        for (var i = 0; i < inputArray.length; i++) {
            if (inputArray[i] > inputArray[i + 1]) {
                var temp = inputArray[i];
                inputArray[i] = inputArray[i + 1];
                inputArray[i + 1] = temp;
                swapp = true;
            }
        }
    } while (swapp);
    return inputArray;
}

console.log(bubbleSort([54, 48, 10, 16, 4, 22, 18, 2, 8]));