var num1=[];
// var input=prompt("enter the array");
 function prime(){
     var stLe=document.getElementById("dem");
num1=document.getElementById("text1").value;
 var num=num1[0];
  var count=0;
  for(i=1;i<=num;i++){
      q=num%i;
      if(q==0){
      
     count+=1;
  }
  }
  if(count==2){
    stLe.innerHTML="prime number";
    stLe.style.fontSize="larger";
    stLe.style.color="blue";  
   
    
  }
  else{
    stLe.innerHTML="not a prime number";
    stLe.style.fontSize="larger";
    stLe.style.color="blue";
  }
 

}

function frequent(){
    var x1=document.getElementById("text2").value;
    var x21=x1.length;
    var count21=0;
    var count22=0;
    var value2;
    for(var g=0;g<x21;g++){
        count21=0;
        for(var h=0;h<x21;h++){
            if(x1[g]==x1[h]){
                count21++;
            }

        }
        if(count21>count22)
        {
            count22=count21;
            value2=x1[g];
        }
    }
    
    if(count22>=2)
    {
        document.getElementById("dem1").innerHTML="most frequent item is "+value2+"="+count22+" times";
    }
    else{
        document.getElementById("dem1").innerHTML="no repeat";
    }

}


    function swaptext(){
    var a=document.getElementById("text3").value;
    var dem2=document.getElementById("dem2");
    var output=[];

    regExp=/^[A-Z]/;
    lower=/^[a-z]/;
   
   
    for(var x=0;x<=a.length;x++){
        if(regExp.test(a[x])){
           output+=a[x].toLowerCase();
            // output+=a[x];
            
        }
        else{
            output+=a[x].toUpperCase();
        }
        dem2.innerHTML=output;
        dem2.style.fontSize="larger";
        dem2.style.color="blue";
    }
    }

function square(){
    // var numb2=[];
var sum=0;
numb2=document.getElementById("text4").value;
var dem3=document.getElementById("dem3");

 for(var j=0;j<numb2.length;j++){
     
     sum=sum+Math.pow(numb2[j],2);
     
    
 }
   dem3.innerHTML=sum;
   dem3.style.fontSize="larger";
   dem3.style.fontWeight="bold";
   dem3.style.color="blue";
    
    
    }
   
    
   


function odd(){
   var resu=[];
    
    for(var q=1;q<=15;q++){
        if(q%2==0){
            resu=q;
            console.log(q+"is even");
            document.write(resu+"is even");
            document.write("<br>");
        
        }
        else{
            resu=q;
            document.writeln(resu+"is odd");
           console.log(q+"is odd");
           document.write("<br>");
        }
    }
}

    function truncate(){
        var dem4=document.getElementById("dem4");
        var trun=document.getElementById("text5").value;
        var notE=document.getElementById("note").value;
        var len=trun.length;
        
            trun=trun.substring(0,notE);
            dem4.innerHTML=trun;
            dem4.style.fontWeight="bold";
            dem4.style.fontSize="larger";
            dem4.style.color="blue";
        
    }


    function large(){
         var dem5=document.getElementById("dem5");
         var firstNum=document.getElementById("text6").value;
         var secondNum=document.getElementById("text7").value;
         var lar=Math.max(firstNum,secondNum);
         dem5.innerHTML=lar;
         dem5.style.color="blue";
         dem5.style.fontSize="larger";
         dem5.style.fontWeight="bold";
    }

    function sort(str){
        var x12=document.getElementById("text9").value;
       var text=x12.split('').sort().join('');
    //    for(var g=0;g<text.length;g++){
    //        for(var h=g+1;h<text.length;h++){
    //            if(text[g]>text[h]){
    //                var temp=text[g];
    //                 text[g]=text[h];
    //                text[h]=temp;
                  
        //        }
        //    }
    //    }
    //    var text1=text.join(" ");
    var demk=document.getElementById("demk");
      demk.innerHTML=text;
      demk.style.color="blue";
      demk.style.fontSize="larger";
      demk.style.fontWeight="bold";
    //    return text.join("");
    // var sorted= text.sort();
    // document.getElementById("demk").innerHTML=sorted;
    // return sorted.join("");
    
    }
    
   
    function javascript(){
     var jaSCrp="JAVASCRIPT";
     var priN=[];
     for(var e=0;e<jaSCrp.length;e++){

        priN+=jaSCrp[e];
        document.write(priN);
        document.write("<br>");
     }
   
    }

    function star(){
        var sTa="****";
        var con=[];
        for(var e=0;e<sTa.length;e++){
   
           con+=sTa[e];
           document.write(con);
           document.write("<br>");
        }
   
       }
    
