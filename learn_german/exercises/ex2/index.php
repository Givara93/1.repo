<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Havale Min</title>
    <script type="text/javascript" src="../../download/a076d05399.js"></script>
    <script type="text/javascript" src="../../download/jquery-3.4.1.js"></script>
    <script type="text/javascript" src="script.js" defer></script>
    <link rel="stylesheet" href="style112.css">

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
          <li><a href="../../index.php">Startseite</a></li>
          <li class="active"><a href="../index.php">Übungen</a></li>
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
    <div class="content0">
      
      <h1>Übung 2</h1>
      <!-------------------------- QUIZ 1 ------------------------------------->
      <div class="all-quiz">
        <div class="quiz1 quiz">
          <table>
            <tr style="border-bottom: 3px solid red; padding-right:2px;">
              <th style=" border: none;">
                Personalpronomen
              </th>
              <th colspan="4" style="text-align: center;">
                Das Modalverb "dürfen"
              </th>
            </tr>
            <hr>
            <tr class="question1">
              <th>ich</th>
              <th class="answer1 answer">darf</th>
              <th class="answer2 answer">darfst</th>
              <th class="answer3 answer">dürfen</th>
              <th class="answer4 answer">dürft</th>
            </tr>
            <tr class="question2">
              <th>du</th>
              <th class="answer1 answer">darf</th>
              <th class="answer2 answer">darfst</th>
              <th class="answer3 answer">dürfen</th>
              <th class="answer4 answer">dürft</th>
            </tr>
            <tr class="question3">
              <th>sie/er/es</th>
              <th class="answer1 answer">darf</th>
              <th class="answer2 answer">darfst</th>
              <th class="answer3 answer">dürfen</th>
              <th class="answer4 answer">dürft</th>
            </tr>
            <tr class="question4">
              <th>wir</th>
              <th class="answer1 answer">darf</th>
              <th class="answer2 answer">darfst</th>
              <th class="answer3 answer">dürfen</th>
              <th class="answer4 answer">dürft</th>
            </tr>
            <tr class="question5">
              <th>ihr</th>
              <th class="answer1 answer">darf</th>
              <th class="answer2 answer">darfst</th>
              <th class="answer3 answer">dürfen</th>
              <th class="answer4 answer">dürft</th>
            </tr>
            <tr class="question6">
              <th>sie/Sie</th>
              <th class="answer1 answer">darf</th>
              <th class="answer2 answer">darfst</th>
              <th class="answer3 answer">dürfen</th>
              <th class="answer4 answer">dürft</th>
            </tr>

          </table>
          <div class="declaration">
            <span class="deutsch">Wähle die richtige Konjugation für das Verb.</span>
            <span class="arabisch">.أختر التصريف الصحيح للفعل</span>
          </div>
          <button>Check</button>
          <div class="answer"></div>
        </div>

        <!-------------------------- QUIZ 2 ------------------------------------->
        <div class="quiz2 quiz">
          <table>
            <tr style="border-bottom: 3px solid red; padding-right:2px;">
              <th style=" border: none;">
                Personalpronomen
              </th>
              <th colspan="4" style="text-align: center;">
                Das Modalverb "können"
              </th>
            </tr>
            <hr>
            <tr class="question1">
              <th>ich</th>
              <th class="answer1 answer">kann</th>
              <th class="answer2 answer">können</th>
              <th class="answer3 answer">könnt</th>
              <th class="answer4 answer">kannst</th>
            </tr>
            <tr class="question2">
              <th>du</th>
              <th class="answer1 answer">können</th>
              <th class="answer2 answer">könnt</th>
              <th class="answer3 answer">kann</th>
              <th class="answer4 answer">kannst</th>
            </tr>
            <tr class="question3">
              <th>sie/er/es</th>
              <th class="answer1 answer">können</th>
              <th class="answer2 answer">kannst</th>
              <th class="answer3 answer">könnt</th>
              <th class="answer4 answer">kann</th>
            </tr>
            <tr class="question4">
              <th>wir</th>
              <th class="answer1 answer">könnt</th>
              <th class="answer2 answer">kann</th>
              <th class="answer3 answer">können</th>
              <th class="answer4 answer">kannst</th>
            </tr>
            <tr class="question5">
              <th>ihr</th>
              <th class="answer1 answer">kannst</th>
              <th class="answer2 answer">können</th>
              <th class="answer3 answer">könnt</th>
              <th class="answer4 answer">kann</th>
            </tr>
            <tr class="question6">
              <th>sie/Sie</th>
              <th class="answer1 answer">kannst</th>
              <th class="answer2 answer">könnt</th>
              <th class="answer3 answer">können</th>
              <th class="answer4 answer">kann</th>
            </tr>

          </table>
          <div class="declaration">
            <span class="deutsch">Wähle die richtige Konjugation für das Verb.</span>
            <span class="arabisch">.أختر التصريف الصحيح للفعل</span>
          </div>
          <button>Check</button>
          <div class="answer"></div>
        </div>

        <!-------------------------- QUIZ 3 ------------------------------------->
        <div class="quiz3 quiz">
          <table>
            <tr style="border-bottom: 3px solid red; padding-right:2px;">
              <th style=" border: none;">
                Personalpronomen
              </th>
              <th colspan="4" style="text-align: center;">
                Das Modalverb "mögen"
              </th>
            </tr>
            <hr>
            <tr class="question1">
              <th>ich</th>
              <th class="answer1 answer">magst</th>
              <th class="answer2 answer">mögt</th>
              <th class="answer3 answer">mag</th>
              <th class="answer4 answer">mögen</th>
            </tr>
            <tr class="question2">
              <th>du</th>
              <th class="answer1 answer">mögen</th>
              <th class="answer2 answer">magst</th>
              <th class="answer3 answer">mag</th>
              <th class="answer4 answer">mögt</th>
            </tr>
            <tr class="question3">
              <th>sie/er/es</th>
              <th class="answer1 answer">mögt</th>
              <th class="answer2 answer">mögen</th>
              <th class="answer3 answer">mag</th>
              <th class="answer4 answer">magst</th>
            </tr>
            <tr class="question4">
              <th>wir</th>
              <th class="answer1 answer">mögen</th>
              <th class="answer2 answer">mögt</th>
              <th class="answer3 answer">magst</th>
              <th class="answer4 answer">mag</th>
            </tr>
            <tr class="question5">
              <th>ihr</th>
              <th class="answer1 answer">magst</th>
              <th class="answer2 answer">mögen</th>
              <th class="answer3 answer">mag</th>
              <th class="answer4 answer">mögt</th>
            </tr>
            <tr class="question6">
              <th>sie/Sie</th>
              <th class="answer1 answer">mögt</th>
              <th class="answer2 answer">magst</th>
              <th class="answer3 answer">mag</th>
              <th class="answer4 answer">mögen</th>
            </tr>

          </table>
          <div class="declaration">
            <span class="deutsch">Wähle die richtige Konjugation für das Verb.</span>
            <span class="arabisch">.أختر التصريف الصحيح للفعل</span>
          </div>
          <button>Check</button>
          <div class="answer"></div>
        </div>

        <!-------------------------- QUIZ 2 ------------------------------------->
        <div class="quiz4 quiz">
          <table>
            <tr style="border-bottom: 3px solid red; padding-right:2px;">
              <th style=" border: none;">
                Personalpronomen
              </th>
              <th colspan="4" style="text-align: center;">
                Das Modalverb "müssen"
              </th>
            </tr>
            <hr>
            <tr class="question1">
              <th>ich</th>
              <th class="answer1 answer">müssen</th>
              <th class="answer2 answer">muss</th>
              <th class="answer3 answer">müsst</th>
              <th class="answer4 answer">musst</th>
            </tr>
            <tr class="question2">
              <th>du</th>
              <th class="answer1 answer">muss</th>
              <th class="answer2 answer">müssen</th>
              <th class="answer3 answer">müsst</th>
              <th class="answer4 answer">musst</th>
            </tr>
            <tr class="question3">
              <th>sie/er/es</th>
              <th class="answer1 answer">musst</th>
              <th class="answer2 answer">müsst</th>
              <th class="answer3 answer">müssen</th>
              <th class="answer4 answer">muss</th>
            </tr>
            <tr class="question4">
              <th>wir</th>
              <th class="answer1 answer">müssen</th>
              <th class="answer2 answer">muss</th>
              <th class="answer3 answer">müsst</th>
              <th class="answer4 answer">musst</th>
            </tr>
            <tr class="question5">
              <th>ihr</th>
              <th class="answer1 answer">musst</th>
              <th class="answer2 answer">muss</th>
              <th class="answer3 answer">müsst</th>
              <th class="answer4 answer">müssen</th>
            </tr>
            <tr class="question6">
              <th>sie/Sie</th>
              <th class="answer1 answer">müsst</th>
              <th class="answer2 answer">müssen</th>
              <th class="answer3 answer">musst</th>
              <th class="answer4 answer">muss</th>
            </tr>

          </table>
          <div class="declaration">
            <span class="deutsch">Wähle die richtige Konjugation für das Verb.</span>
            <span class="arabisch">.أختر التصريف الصحيح للفعل</span>
          </div>
          <button>Check</button>
          <div class="answer"></div>
        </div>
        <!-------------------------- QUIZ 2 ------------------------------------->
        <div class="quiz5 quiz">
          <table>
            <tr style="border-bottom: 3px solid red; padding-right:2px;">
              <th style=" border: none;">
                Personalpronomen
              </th>
              <th colspan="4" style="text-align: center;">
                Das Modalverb "sollen"
              </th>
            </tr>
            <hr>
            <tr class="question1">
              <th>ich</th>
              <th class="answer1 answer">sollen</th>
              <th class="answer2 answer">soll</th>
              <th class="answer3 answer">sollst</th>
              <th class="answer4 answer">sollt</th>
            </tr>
            <tr class="question2">
              <th>du</th>
              <th class="answer1 answer">sollt</th>
              <th class="answer2 answer">sollst</th>
              <th class="answer3 answer">soll</th>
              <th class="answer4 answer">sollen</th>
            </tr>
            <tr class="question3">
              <th>sie/er/es</th>
              <th class="answer1 answer">soll</th>
              <th class="answer2 answer">sollst</th>
              <th class="answer3 answer">sollen</th>
              <th class="answer4 answer">sollt</th>
            </tr>
            <tr class="question4">
              <th>wir</th>
              <th class="answer1 answer">soll</th>
              <th class="answer2 answer">sollen</th>
              <th class="answer3 answer">sollt</th>
              <th class="answer4 answer">sollst</th>
            </tr>
            <tr class="question5">
              <th>ihr</th>
              <th class="answer1 answer">sollst</th>
              <th class="answer2 answer">sollt</th>
              <th class="answer3 answer">soll</th>
              <th class="answer4 answer">sollen</th>
            </tr>
            <tr class="question6">
              <th>sie/Sie</th>
              <th class="answer1 answer">sollen</th>
              <th class="answer2 answer">sollst</th>
              <th class="answer3 answer">sollt</th>
              <th class="answer4 answer">soll</th>
            </tr>

          </table>
          <div class="declaration">
            <span class="deutsch">Wähle die richtige Konjugation für das Verb.</span>
            <span class="arabisch">.أختر التصريف الصحيح للفعل</span>
          </div>
          <button>Check</button>
          <div class="answer"></div>
        </div>
        <!-------------------------- QUIZ 2 ------------------------------------->
        <div class="quiz6 quiz">
          <table>
            <tr style="border-bottom: 3px solid red; padding-right:2px;">
              <th style=" border: none;">
                Personalpronomen
              </th>
              <th colspan="4" style="text-align: center;">
                Das Modalverb "wollen"
              </th>
            </tr>
            <hr>
            <tr class="question1">
              <th>ich</th>
              <th class="answer1 answer">wollen</th>
              <th class="answer2 answer">will</th>
              <th class="answer3 answer">willst</th>
              <th class="answer4 answer">wollt</th>
            </tr>
            <tr class="question2">
              <th>du</th>
              <th class="answer1 answer">willst</th>
              <th class="answer2 answer">wollt</th>
              <th class="answer3 answer">wollen</th>
              <th class="answer4 answer">will</th>
            </tr>
            <tr class="question3">
              <th>sie/er/es</th>
              <th class="answer1 answer">wollt</th>
              <th class="answer2 answer">will</th>
              <th class="answer3 answer">willst</th>
              <th class="answer4 answer">wollen</th>
            </tr>
            <tr class="question4">
              <th>wir</th>
              <th class="answer1 answer">wollen</th>
              <th class="answer2 answer">willst</th>
              <th class="answer3 answer">will</th>
              <th class="answer4 answer">wollt</th>
            </tr>
            <tr class="question5">
              <th>ihr</th>
              <th class="answer1 answer">wollt</th>
              <th class="answer2 answer">willst</th>
              <th class="answer3 answer">wollen</th>
              <th class="answer4 answer">will</th>
            </tr>
            <tr class="question6">
              <th>sie/Sie</th>
              <th class="answer1 answer">wollen</th>
              <th class="answer2 answer">will</th>
              <th class="answer3 answer">willst</th>
              <th class="answer4 answer">wollt</th>
            </tr>

          </table>
          <div class="declaration">
            <span class="deutsch">Wähle die richtige Konjugation für das Verb.</span>
            <span class="arabisch">.أختر التصريف الصحيح للفعل</span>
          </div>
          <button>Check</button>
          <div class="answer"></div>
        </div>

      </div>
      <div class="counter">
            <?php
              require('counter.php')
            ?>
      </div>
    </div>


    <footer>

    </footer>
  </div>

</body>
</html>
