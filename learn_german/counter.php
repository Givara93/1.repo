<?php

  $server ="localhost";
  $user = "root";
  $password = "";
  $dbName = "d03765a6";
  $connection = new mysqli($server, $user, $password, $dbName);
  if(mysqli_connect_errno()){
    die("not connected");
  }
  echo "connected <br>";

  $sqlquery = "SELECT * FROM counter_table;";
  $result = mysqli_query($connection, $sqlquery);
  $resultCheck = mysqli_num_rows($result);

  if($resultCheck > 0){
    while($row = mysqli_fetch_assoc($result)){
      echo $row['page']. "   " . $row['counter']. "<br>";
    }
  }

  $script = <<<EOF
  <script type="text/javascript">
  23
  </script>


  EOF;
  echo $script;


 ?>
