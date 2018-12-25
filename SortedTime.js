var utility=require('../Javascript/utility');
var arr=[11,66,1,55,9,78,65,87,43,56];
var start=0,stop=0;
var dt=new Date();
function getNanoSecTime() {
    var hrTime = process.hrtime();
    return hrTime[0] * 1000000000 + hrTime[1];
  }
start= getNanoSecTime();
utility.bubbleSort(arr);
stop=getNanoSecTime();
var bubbleTime=stop-start;
start= getNanoSecTime();
utility.insertionSort(arr);
stop=getNanoSecTime();
var insertionSortTime=stop-start;
start= getNanoSecTime();
utility.binarySearch(arr,55);
stop=getNanoSecTime();
var BinaryTime=stop-start;

var masterList=[{type : "insertion",time: insertionSortTime},{type: "bubbleSort",time : bubbleTime},{type:"binary search",time:BinaryTime}];
function myFunction() {
    masterList.sort(function(a, b){return b.time - a.time});
    console.log(masterList);
}
myFunction();

