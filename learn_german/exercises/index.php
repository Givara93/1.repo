<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Havale Min</title>
    <script type="text/javascript" src="../download/a076d05399.js"></script>
    <script type="text/javascript" src="../download/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="script.js"></script>
    <link rel="stylesheet" href="style11.css">

</head>
<body>
  <div class="main">
    <header>
      <nav>
            <?php
            require('logo/logo.php')
            ?>
          <label for="" class="logo1">Havale Min</label>
          <label id = "icon">
            <i class="fas fa-bars"></i>
          </label>
        <ul>
          <li ><a href="../index.php">Startseite</a></li>
          <li class="active"><a href="index.php">Übungen</a></li>
        </ul>
        <script>
          $(document).ready(function() {
            $('#icon').click(function() {
              $('ul').toggleClass('show');
            });
          });
        </script>
      </nav>
    </header>
    <div class="content">
      <h1>Übungen</h1>
      <ul>
        <li><a href="ex1/index.php">Übung 1 "Präpositionen"</a></li>
        <li><a href="ex11/index.php">Übung 1.1 "Präpositionen"</a></li>
        <li><a href="ex2/index.php">Übung 2 "Modalverben"</a></li>
        <li><a href="#">Übung 3 kommt bald</a></li>
      </ul>
    </div>


    <footer>

    </footer>

  </div>
</body>
</html>
