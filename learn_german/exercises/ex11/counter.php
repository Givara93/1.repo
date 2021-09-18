<?php
    $server ="havale-min.com";
    $user = "d03765a6";
    $password = "ZWBvxcBkra5SRJXL";
    $dbName = "d03765a6";
    $connection = new mysqli($server, $user, $password, $dbName);
    if(mysqli_connect_errno()){
        die("not connected");
    }

    $visitor_ip = $_SERVER['REMOTE_ADDR'];


    $sqlquery = "SELECT * FROM counter_table_ex11";
    $result = mysqli_query($connection, $sqlquery);
    if(!$result){
        die ("Retriving Query ERROR<br>".$sqlquery);
    }
    $total_visitors = mysqli_num_rows($result);
    if($total_visitors!=0){
        $sqlquery = "insert into counter_table_ex11(ip_adresse) values('$visitor_ip');";
        $result = mysqli_query($connection, $sqlquery);

    }
    
    
    echo '<span>'.$total_visitors.'<span>';
    
    ?>