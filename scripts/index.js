var btn=document.getElementById("sort_btn");
var reset_btn=document.getElementById("resrt_btn");
var dropdown=document.getElementById("sort");
var array=[];
var display_tb=document.getElementById("display_text");
var opp=document.getElementById("opp");
 btn.disabled=false;


var Insersion = (array) => {
    var len = array.length
    for (let i = 1; i < len; i++) {
        var cur = array[i]
        let j = i - 1
        while (j > -1 && cur < array[j]) {
            array[j + 1] = array[j]
            j--
        }
        array[j + 1] = cur
        // console.log(`Iteration ${i} : ${array}`)
    }

    return array
}

var Selection=(arr)=>{
var n=arr.length;
for(let i=0;i<n;i++)
{
    var min=i;
    for(let j=i+1;j<n;j++)
    {
        if(arr[j]<arr[min])
        {
            min=j;
            
        }
    }
    if(min!=i)
    {
        var t=arr[min];
            arr[min]=arr[i]
            arr[i]=t;
    }
}
return arr;
}

var Bubble=(arr)=>{
    var n=arr.length;
    for(let i=0;i<n;i++)
    {
        for(let j=i+1;j<n;j++)
        {
            if(arr[i]>arr[j])
            {
                var t=arr[i];
                arr[i]=arr[j]
                arr[j]=t;
            }
        }
    }
    return arr;
    }


    var Q_Sort=(arr,low,high)=>
    {
        if(low<high)
        {
            var piv=Partiton(arr,low,high);
            Q_Sort(arr,low,piv-1);
            Q_Sort(arr,piv+1,high)
        }
        return arr;
    }
    var Partiton=(arr,low,high)=>{
        var pivot=arr[high];
        var i=low-1;
        for(let j=low;j<high;j++)
        {
            if(arr[j]<pivot)
            {
                i++;
                var temp=arr[i];
                arr[i]=arr[j];
                arr[j]=temp;
            }
        }
        var t=arr[i+1];
        arr[i+1]=arr[high]
        arr[high]=t;
        return (i+1);
        
    }

    function MergeSort(array) {
        const half = array.length / 2
        
        if(array.length == 1){
          return array 
        }
        
        const left = array.splice(0, half)
        return Merge(MergeSort(left),MergeSort(array))
      }

    
    
    function Merge(a, b) {
    let c = []
    while (a.length && b.length) {
        if (a[0] < b[0]) {
            c.push(a.shift())  
        } else {
            c.push(b.shift()) 
        }
    }
    //Combinign using spread operator
    return [ ...c, ...a, ...b ]
}

var Build_Heap=(arr,n)=>{
    
    for (var i = Math.floor(n / 2) - 1; i >= 0; i--) 
    {
        Heapify(arr, n, i);
    }
}
var HeapSort=(arr)=>{
    var n = arr.length;
    Build_Heap(arr,n);
    for (var i = n - 1; i > 0; i--) {
        var temp = arr[0];
        arr[0] = arr[i];
        arr[i] = temp;

        Heapify(arr, i, 0);
    }
    return arr;
}

var Heapify=(arr, n, i)=>{
    var largest = i;
    var left = (2*i)+1; 
    var right = (2*i)+2;

   
    if (left < n && arr[left] > arr[largest])
        largest = left;

    
    if (right < n && arr[right] > arr[largest])
        largest = right;

    
    if (largest != i) {
        var swap = arr[i];
        arr[i] = arr[largest];
        arr[largest] = swap;

        
        Heapify(arr, n, largest);
    }
}


var ThreeMedianQuickSort=(arr, low, high)=>{
    if (low < high) {
        var newPivot = Partition_3Median(arr, low, high)
        ThreeMedianQuickSort(arr, low, newPivot)
        ThreeMedianQuickSort(arr, newPivot + 1, high)
    }
    return arr
}


var Partition_3Median=(arr,low,high)=>{
    var left=arr[low];
    var right=arr[high-1]
    var len=high-low;
    var middle=0;
    if(len%2==0){
        middle=arr[(len/2)-1];
    }
    else 
    {
        middle=arr[Math.floor(len/2)];
    }

    var pivot=GetMedian(left,right,middle)
    var p_index=arr.indexOf(pivot);
    arr[p_index]=arr[low]
    arr[low]=pivot
    var i=low+1
    for(let j=low;j<=high;j++)
        {
            if(arr[j]<pivot)
            {
                var temp=arr[j];
                arr[j]=arr[i];
                arr[i]=temp;
                i++;
            }
        }
        var t=arr[low];
        arr[low]=arr[i-1]
        arr[i-1]=t;
        return i-1;

}

var GetMedian=(left,right,middle)=>{
    if(((left-right)*(middle-left))>=0) return left;
    else if(((right-left)*(middle-right))>=0) return right;
    else return middle;

}


btn.addEventListener("click",()=>{
    btn.disabled=true;
    var dropdown_value=dropdown.value;
    var input=document.getElementById("sort-textbox");
    // opdiv.classList.remove("Displaynone")
    if(dropdown_value=="NULL")
    {
        display_tb.value="Please select an appropriate Algorithim"
    }
    array=input.value.trim().split(" ");
    
    for (let i = 0; i < array.length; i++) {
             array[i] = +array[i]
        }
        if(dropdown_value=="Insertion_Sort")
        {
            var st= performance.now()
            opp.value="";
            var op=Insersion(array);
            var et= performance.now()
            display_tb.value=` ${op}`
            opp.value=`time:${et-st}s`
        }
        else if(dropdown_value=="Selection_Sort")
        {
            var st= performance.now()
            opp.value="";
            var op=Selection(array);
            var et= performance.now()
            display_tb.value=` ${op}`
            opp.value=`${et-st}s`
        }
        else if(dropdown_value=="Bubble_Sort")
        {
            var st= performance.now()
            opp.value="";
            var op=Bubble(array);
            var et= performance.now()
            display_tb.value=` ${op}`
            opp.value=`${et-st}s`
            
        }
        else if(dropdown_value=="Quick_Sort")
        {
            var st= performance.now()
            opp.value="";
            var op=Q_Sort(array,0,array.length-1);
            var et= performance.now()
            display_tb.value=` ${op}`
            opp.value=`${et-st}s`
            
        }
        else if(dropdown_value=="Merge_Sort")
        {
            var st= performance.now()
            opp.value="";
            var op=MergeSort(array)
            var et= performance.now()
            display_tb.value=` ${op}`
            opp.value=`${et-st}s`
            
        }
        else if(dropdown_value=="Heap_Sort")
        {
            var st= performance.now()
            opp.value="";
            var op=HeapSort(array)
            var et= performance.now()
            display_tb.value=` ${op}`
            opp.value=`${et-st}s`
            
        }
        else if(dropdown_value=="Quick_Sort_3")
        {
            var st= performance.now()
            opp.value="";
            var op=ThreeMedianQuickSort(array,0,array.length-1);
            var et= performance.now()
            display_tb.value=` ${op}`
            opp.value=`${et-st}s`
        }
    
    
})

reset_btn.addEventListener("click",()=>{
    window.location.reload();
})


















window.onload=function () {
	var chart = new CanvasJS.Chart("chartContainer", {
		title:{
			text: "Performance(in secs) vs Small Input Size "              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type:"doughnut",
			dataPoints: [
				{ label: "Insertion Sort",  y: 0.19  },
				{ label: "Bubble Sort", y: 0.2  },
				{ label: "Selection Sort", y: 0.1  },
				{ label: "Merge Sort",  y: 0.2  },
				{ label: "Heap Sort",  y: 0.3  },
				{ label: "Quick Sort",  y: 0.3  },
				{ label: "3 Way Quick Sort",  y: 0.5  }
				
			]
		}
		]
	});

    var chart2 = new CanvasJS.Chart("chartContainer2", {
		title:{
			text: "Performance(in secs) vs Large Input Size"              
		},
		data: [              
		{
			// Change type to "doughnut", "line", "splineArea", etc.
			type: "doughnut",
			dataPoints: [
				{ label: "Insertion Sort",  y: 0.3  },
				{ label: "Bubble Sort", y: 0.4  },
				{ label: "Selection Sort", y: 0.5  },
				{ label: "Merge Sort",  y: 0.4 },
				{ label: "Heap Sort",  y: 0.29  },
				{ label: "Quick Sort",  y: 0.39  },
				{ label: "3 Way Quick Sort",  y: 0.19  }
			]
		}
		]
	});

    var chart3 = new CanvasJS.Chart("chartContainer3", {            
        title:{
          text: "Summary"              
        },
  
        data: [  //array of dataSeries     
        { //dataSeries - first quarter
     /*** Change type "column" to "bar", "area", "line" or "pie"***/        
         type: "column",
         showInLegend:true,
         name: "Small Input Size",
         dataPoints: [
            { label: "Insertion Sort",  y: 0.19  },
				{ label: "Bubble Sort", y: 0.2  },
				{ label: "Selection Sort", y: 0.1  },
				{ label: "Merge Sort",  y: 0.2  },
				{ label: "Heap Sort",  y: 0.3  },
				{ label: "Quick Sort",  y: 0.3  },
				{ label: "3 Way Quick Sort",  y: 0.5  }
         ]
       },
       { //dataSeries - second quarter
  
        type: "column",
        name: "Avg. Input Size", 
        showInLegend:true,               
        dataPoints: [
            { label: "Insertion Sort",  y: 0.2  },
            { label: "Bubble Sort", y: 0.3  },
            { label: "Selection Sort", y: 0.1  },
            { label: "Merge Sort",  y: 0.4  },
            { label: "Heap Sort",  y: 0.2  },
            { label: "Quick Sort",  y: 0.2  },
            { label: "3 Way Quick Sort",  y: 0.4  }
        ]
      },
      {
        type: "column",
        name: "Large Input Size",
        showInLegend:true,                
        dataPoints: [
            { label: "Insertion Sort",  y: 0.3  },
				{ label: "Bubble Sort", y: 0.4  },
				{ label: "Selection Sort", y: 0.5  },
				{ label: "Merge Sort",  y: 0.4 },
				{ label: "Heap Sort",  y: 0.29  },
				{ label: "Quick Sort",  y: 0.39  },
				{ label: "3 Way Quick Sort",  y: 0.19  }
        ]
      }
      ]
    });



	chart.render();
    chart2.render();
    chart3.render();
}