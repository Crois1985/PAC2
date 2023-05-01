
//Funcio que compara els dos numeros y retorna les dades
function compara()
{
    const n1=prompt("Introdueix un nombre enter entre 1 i 50 :")
    const n2=prompt("Introdueix un altre amb les mateixes caracteristiques:")


    if (Number.isInteger(n1/1)==false ||  Number.isInteger(n2/1)==false )
    {
        alert("Algun dels valors no ès un nombre");
    }
    else if( n1<1 || n1>50 || n2<1 || n2>50)
    {
        alert("Algun dels valors no  esta en el rang entre 1 i 50");
    }



    var equals=false
    if (n2==n1){equals=true;} //si son iguals

    if (equals!=true)
    {result="Els nombres són "+n1 +" i "+n2+".\n"}
    else{
        result=""
    }
 
    const sum=Number(n1)+Number(n2); //Fem una suma entera
    result=result+ "La suma dona "+sum + ".\n";







    var primer1="no";
    var primer2="no";

    i=1;
    do 
    {
        i++; 
    }while(n1%i != 0 && i<51);

    if (n1==i || n1==1) {primer1="";}

    if (equals==false)
    {
        i=1;
        do
        {
          //  console.log(i);
            i++; 
        }while(n2%i != 0 && i<51);

        if (n2==i || n2==1) {primer2="sí";}

    }

    
  
    if (equals==false){

        result=result+"El primer nombre "+ primer1 +" es primer i el segon "+primer2 +" ho és.\n"
    }
    

    var parell1="no"
    var parell2="no"

    if (n1%2==0){parell1="sí"}


    if (equals==false){

        if (n2%2==0){parell2="sí"}
        result=result+ "El primer nombre "+ parell1 +" és parell i el segon "+parell2 +" ho és.\n"
    }


    if (n1<n2)
    {
        var parells="" 
        var i;   
        n11=Number(n1)+Number(1);//n1+1

        for (i=n11; i<n2 ;i++)
        {
            if (i%2==0){
                parells=parells+" "+i;}
        }
        result=result+"Els parells entre "+n1+" i "+n2+" son: "+parells+".\n"


    }


    if (n1>n2)
    {
        var imparells="" 
        var i;   
        n11=Number(n1)-Number(1);//n1+1

        for (i=n11; i>n2 ;i--)
        {
            if (i%2!=0){
                imparells=imparells+" "+i;}
        }
        result=result+ "Els imparells entre "+n1+" i "+n2+" son: "+imparells+"\n"

    
    }

    if (n1==n2)
    {
        result=result+"El nombre " + n1 +" "+ primer1 +" es primer y  " +parell1+ " ès parell.\n"


    }

alert(result)
}