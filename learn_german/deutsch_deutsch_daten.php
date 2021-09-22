
<?php
    $server ="havale-min.com";
    $user = "d03765a6";
    $password = "ZWBvxcBkra5SRJXL";
    $dbName = "d03765a6";
    $connection = new mysqli($server, $user, $password, $dbName);
    $connection -> set_charset("utf8");
    /** Encoding für arabisch und deutsch **/
    if(mysqli_connect_errno()){
        die("not connected");
    }


    $sqlquery = "SELECT * FROM deutsch_deutsch ORDER BY id desc";
    $result = mysqli_query($connection, $sqlquery);
    $str ='
    <script>
        const content12 = document.querySelector(".content12");';
    while($array = mysqli_fetch_array($result)){
            
        $str.= '

        newDiv = document.createElement("div");
        newDiv.classList.add("de-de");
        
        newSpan1 = document.createElement("span");
        newSpan1.classList.add("deutsch1");

        newSpan11 = document.createElement("span");
        newSpan11.classList.add("sag_nicht");        
        newSpan11.innerText = "Sag nicht: ";

        newSpan2 = document.createElement("span");
        newSpan2.classList.add("deutsch2");
                

        
        newSpan21 = document.createElement("span");
        newSpan21.classList.add("sag");
        newSpan21.innerText = "Sag: ";


        newSpan1.innerText = "'.$array["sag_nicht"].'";
        newSpan2.innerText = "'.$array["sag"].'";
        
        newDiv.appendChild(newSpan11); 
        newDiv.appendChild(newSpan1);
        newDiv.appendChild(newSpan21);
        newDiv.appendChild(newSpan2);
        content12.appendChild(newDiv);





        ';
        
    }

    $str .= '
    </script>
    ';
    echo $str;


    $sqlquery = "SELECT * FROM posts ORDER BY id desc";
    $result = mysqli_query($connection, $sqlquery);
    $str ='
    <script>
        const content11 = document.querySelector(".content11");';
    while($array = mysqli_fetch_array($result)){
            
        $str.= '

            divL = document.createElement("div");
            divL.classList.add("divL");
            
            
            divR = document.createElement("div");
            divR.classList.add("divR");
            
            
            titleL = document.createElement("span");
            titleL.classList.add("titleL");
            
            titleR = document.createElement("span");
            titleR.classList.add("titleR");
            
            contentL = document.createElement("span");
            contentL.classList.add("contentL");
            
            contentR = document.createElement("span");
            contentR.classList.add("contentR");
            
            
            titleL.innerText = "'.$array["title_de"].'";
            titleR.innerText = "'.$array["title_ar"].'";
            
            contentL.innerText = "'.$array["content_de"].'";
            contentR.innerText = "'.$array["content_ar"].'";
            
            
            divL.appendChild(titleL);
            divL.appendChild(contentL);
            
            
            divR.appendChild(titleR);
            divR.appendChild(contentR);
            
            
            divU = document.createElement("div");
            divU.classList.add("divU");
            
            divU.appendChild(divL);
            divU.appendChild(divR);
            
            
            divD = document.createElement("div");
            divD.classList.add("divD");
            
            datumSpan = document.createElement("span");
            datumSpan.classList.add("datumSpan");
            divD.appendChild(datumSpan);
            datumSpan.innerText = "'.$array["visit_date"].'";
            

            divF = document.createElement("div");
            divF.classList.add("divF");
            
            divF.appendChild(divU);
            divF.appendChild(divD);
            
            
            content11.appendChild(divF);




        ';
        
    }

    $str .= '

    </script>
    ';
    echo $str;



?>