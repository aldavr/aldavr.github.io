
function quickSort(arr, left, right){
    var len = arr.length, 
    pivot,
    partitionIndex;
 
 
   if(left < right){
     pivot = right;
     partitionIndex = partition(arr, pivot, left, right);
     
    //sort left and right
    quickSort(arr, left, partitionIndex - 1);
    quickSort(arr, partitionIndex + 1, right);
   }
   return arr;
 }

 function partition(arr, pivot, left, right){
    var pivotValue = arr[pivot],
        partitionIndex = left;
 
    for(var i = left; i < right; i++){
     if(arr[i] < pivotValue){
       swap(arr, i, partitionIndex);
       partitionIndex++;
     }
   }
   swap(arr, right, partitionIndex);
   return partitionIndex;
 }
    
 function swap(arr, i, j){
    var temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
 }

  quickSort([11,8,14,3,6,2,7],0,6);

// FirstPartition < Pivot > SecondPartition

const arr = [11, 8, 14, 3, 6, 2, 7, 1]

const quickSort = (arr) => {
  if (arr.length < 2) {
    return arr;
  } else {
    const pivot = arr[Math.floor(Math.random() * arr.length)];
    const less = arr.filter(value => value < pivot);
    const greater = arr.filter(value => value > pivot);
    return [...quickSort(less), pivot, ...quickSort(greater)];
  }
};

console.log(quickSort(arr));