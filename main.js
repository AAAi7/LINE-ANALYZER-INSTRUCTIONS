// Line Analyzer

// Add Event Listener
document.getElementById('analyze').addEventListener('click', analyzeLine);

// Event Function
function analyzeLine() {
    // Get Inputted Point Data (pt1x, pt1y) and (pt2x, pt2y)
    let pt1x = Number(document.getElementById('pt1x').value);
    let pt1y = Number(document.getElementById('pt1y').value);
    let pt2x = Number(document.getElementById('pt2x').value);
    let pt2y = Number(document.getElementById('pt2y').value);

    // Call Analyze Functions and Display results
    document.getElementById('length').innerHTML = getLength(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('slope').innerHTML = getSlope(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('description').innerHTML = getDescription(pt1x, pt1y, pt2x, pt2y);
    document.getElementById('location-1').innerHTML = getPointLocation(pt1x, pt1y);
    document.getElementById('location-2').innerHTML = getPointLocation(pt2x, pt2y);
    document.getElementById('equation').innerHTML = getEquation(pt1x, pt1y, pt2x, pt2y);
}

// Line Analyzer Functions (Write your solutions here... getLength is done for you)

function getLength(x1, y1, x2, y2) {
    // Use pythagorean theorem to determine length from (x1, y1) to (x2, y2)
    let rise = y2 - y1;
    let run = x2 - x1;
    return (rise ** 2 + run ** 2) ** 0.5;
}
function getSlope(x1,y1,x2,y2)
{
    let slope= (y2-y1)/(x2-x1);
    return slope;

}
function getDescription(x1,y1,x2,y2)
{
    let results;
    if(y2>y1)
    {
        results="increasing";


    }
    else if(y2<y1)
    {
        results="Decreasing"

    }
    else if(y1==y1)
    {
        results="Horizontal"
    }
    else if(x1==x2)
    {
        results="Vertical"
    }
    return results;
}
function getPointLocation(x1,y1)
{
    var results;
    if(x1==0 && y1==0)
    {
        results="Origin";

    }
    else if(y1==0)
    {
        results("y-axis");

    }
    else if(x1==0)
    {
        results="x-axis";

    }
    else if(x1>0 && y1>0)
        results="quadrant 1";
    else if(y1>0 && x1<0)
        results="quadrant 2";
    else if(y1<0 && x1<0)
        results="quadrant 3";
    else if(y1<0 && x1>0)
        results="quadrant 4";
    return results;



}
function getEquation(x1,y1,x2,y2)
{

    var slope=getSlope(x1,y1,x2,y2);
    var b;
    b=y1-(slope*x1);
    var results;

    if(b>0)
    {
        results="y = "+slope+"x+"+b;

    }
    else if(b<0)
    {
        b*=-1;
        results="y = "+slope+"x-"+b;

    }
    else
    {
        results="y = "+slope+"x";

    }
    return results;

}
