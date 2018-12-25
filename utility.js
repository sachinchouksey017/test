var read=require('readline-sync');
module.exports={
binarySearch(arr,ele)
{
    var first=0,last=arr.length-1;
    while(first<=last){
        mid=Math.floor((first+last)/2);
        if(arr[mid]==ele){
            return mid;
        }else if(arr[mid]>ele){
            last=mid-1;
        }else{
            first=mid+1;
        }
    }
    return -1;
},
insertionSort(arr){
    n=arr.length;
    var ele;
    for (let i = 1; i < n; i++) {
        ele=arr[i];
        var j=i-1;
        while(j>=0&& arr[j]>ele){
            arr[j+1]=arr[j];
            j=j-1;
        }
        arr[j+1]=ele;
        
    }
    return arr;
},
bubbleSort(arr){
    var temp;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
             if(arr[j]>arr[j+1]){
                 temp=arr[j];
                 arr[j]=arr[j+1];
                 arr[j+1]=temp;
             }
            
        }
        
    }
    return arr;
},
}