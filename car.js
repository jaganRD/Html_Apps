function rent()
{
    window.open("rentpage.html", "height=1000,width=1000,left=80,top=80");

}
function myfunction()
{
    var r1 = document.getElementById('type1');
    var r2 = document.getElementById('type2');
    var r3 = document.getElementById('type3');
    var c1 = document.getElementById('city1');
    var c2 = document.getElementById('city2');
    var c3 = document.getElementById('city3');
    if(r1.checked)
    {
        document.getElementById('car').value=document.getElementById('type1').value;
        document.getElementById('base').value=document.getElementById('price1').getAttribute('value');
        document.getElementById('ci').value ="17.00";
        document.getElementById('gift').value = "100.oo";
        if(c1.checked)
        {
            document.getElementById('city').value=document.getElementById('city1').value;
            document.getElementById('sur').value="4.49"
        }
        if(c2.checked)
        {
            document.getElementById('city').value=document.getElementById('city2').value;
            document.getElementById('sur').value="4.49"
        }
        if(c3.checked)
        {
            document.getElementById('city').value=document.getElementById('city3').value;
            document.getElementById('sur').value="2.99"
        }
    }
    else if(r2.checked)
    {
      document.getElementById('car').value=document.getElementById('type2').value;
    document.getElementById('base').value=document.getElementById('price2').getAttribute('value');
    document.getElementById('ci').value ="22.00";
    document.getElementById('gift').value = "100.oo";
    if(c1.checked)
        {
            document.getElementById('city').value=document.getElementById('city1').value;
            document.getElementById('sur').value="5.99"
        }
        if(c2.checked)
        {
            document.getElementById('city').value=document.getElementById('city2').value;
            document.getElementById('sur').value="5.99"
        }
        if(c3.checked)
        {
            document.getElementById('city').value=document.getElementById('city3').value;
            document.getElementById('sur').value="3.99"
        }
    }
    else if(r3.checked)
    {
    document.getElementById('car').value=document.getElementById('type3').value;
    document.getElementById('base').value=document.getElementById('price3').getAttribute('value');
    document.getElementById('ci').value ="28.00";
    document.getElementById('gift').value = "150.oo";
    if(c1.checked)
        {
            document.getElementById('city').value=document.getElementById('city1').value;
            document.getElementById('sur').value="7.49"
        }
        if(c2.checked)
        {
            document.getElementById('city').value=document.getElementById('city2').value;
            document.getElementById('sur').value="7.49"
        }
        if(c3.checked)
        {
            document.getElementById('city').value=document.getElementById('city3').value;
            document.getElementById('sur').value="4.99"
        }
    }
    
}

function myfunction3()
{
    
    var basprc =document.getElementById('base').value;
    var dys = document.getElementById('numdays2').value;
    actbp = basprc * dys ;
    var srchrg = parseFloat(document.getElementById('sur').value);
    var collsn = parseFloat(document.getElementById('ci').value);
    var pgift = parseFloat(document.getElementById('gift').value);
    optional = srchrg + collsn + pgift;
    if(dys <= 15)
    {
       var aftrdscnt = actbp - (0.1*actbp);
    }
    else
    {
        var aftrdscnt = actbp - (0.2*actbp);
    }
    total = optional + aftrdscnt;
    
    txt1 = "base price is:";
    txt2 = "sur charge is:";
    txt3 = "collision charge";
    txt4 = "prepaid gift";
    txt5 = "total price";
    
    
    document.getElementById('code()').value = txt1 + actbp+("      ")+ txt2 + srchrg +("      ")+txt3 + collsn +    ("      ")+txt4 + pgift+txt5 +("      ")+total;
  
}
  
   
