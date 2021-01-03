//11 nested if else

var n,m,o;
n=parseInt(prompt("Enter Value",0))
m=parseInt(prompt("Enter Value",0))
o=parseInt(prompt("Enter Value",0))
if(n>m)
{
	if(n>o)
	{
   alert(n+ " is Big");
    }
else
	alert(o+ " is Big");
}

if(m>o)
{
	if(m>o)
	{
		alert(m+" is Big")
	}
	else
	{
		alert(o+" is Big")
	}
}
