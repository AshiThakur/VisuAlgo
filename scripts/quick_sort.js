function Quick()
{
    c_delay=0;

    quick_sort(0,array_size-1);

    enable_buttons();
}

function quick_partition(start,end)
{

    var i=start+1;
    var piv=div_sizes[start]; //make first element as pivot
    div_update(divs[start],div_sizes[start],"yellow"); //color update

    for(var j=start+1;j<=end;j++)
    {
        //re-arrange the arry by putting elements which are less than pivot on left side
        //elements greater than pivot on right side
        if(div_sizes[j] < piv)
        {
            div_update(divs[j],div_sizes[j],"yellow");//Update color

            div_update(divs[i],div_sizes[i],"red"); //Update color
            div_update(divs[j],div_sizes[j],"red"); //Update color

            var temp=div_sizes[i];
            div_sizes[i]=div_sizes[j];
            div_sizes[j]=temp;

            div_update(divs[i],div_sizes[i],"red"); //Height Update
            div_update(divs[j],div_sizes[j],"red"); //Height Update

            div_update(divs[i],div_sizes[i],"blue"); //Height Update
            div_update(divs[j],div_sizes[j],"blue"); //Height Update

            i+=1;
        }
    }
    div_update(divs[start],div_sizes[start],"red");//Color update
    div_update(divs[i-1],div_sizes[i-1],"red");//Color update
    
    var temp=div_sizes[start];//put the pivot element in its proper place.
    div_sizes[start]=div_sizes[i-1];
    div_sizes[i-1]=temp;

    div_update(divs[start],div_sizes[start],"red");//Height update
    div_update(divs[i-1],div_sizes[i-1],"red");//Height update

    for(var t=start;t<=i;t++)
    {
        div_update(divs[t],div_sizes[t],"green");//Color update
    }

    return i-1;//return the position of the pivot
}

function quick_sort(start,end)
{
    if(start < end)
    {
    //Stores the position of pivot element
    var piv_pos=quick_partition(start,end);
    quick_sort(start,piv_pos-1); //sorting the left side of pivot
    quick_sort(piv_pos+1,end); //sorting the right side of pivot

    }

}