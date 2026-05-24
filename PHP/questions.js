// ============================================
//  PHP QUIZ — 30 QUESTIONS DATA
//  All code strings use single quotes to
//  avoid template literal interpolation bugs.
// ============================================

var QUESTIONS = [
    // ===== 1–3: Basics & Syntax =====
    {
        category: 'Basics',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which of the following is the correct way to start a PHP block?',
        options: [
            '<code>&lt;?php</code>',
            '<code>&lt;script language="php"&gt;</code>',
            '<code>&lt;php&gt;</code>',
            '<code>&lt;%php</code>'
        ],
        answer: 0,
        explanation: 'The standard and recommended PHP opening tag is <?php. Other forms like short tags (<?) or ASP-style tags (<%) are deprecated or removed in modern PHP versions.'
    },
    {
        category: 'Basics',
        type: 'code',
        difficulty: 'easy',
        question: 'What will this code output?',
        code: '<?php\n  echo "Hello" . " " . "World";\n?>',
        options: [
            '<code>Hello World</code>',
            '<code>Hello.World</code>',
            '<code>HelloWorld</code>',
            'An error'
        ],
        answer: 0,
        explanation: 'The dot (.) operator in PHP concatenates strings. "Hello" . " " . "World" joins the three strings together to produce "Hello World".'
    },
    {
        category: 'Basics',
        type: 'concept',
        difficulty: 'easy',
        question: 'How do you declare a variable in PHP?',
        options: [
            'Using the <code>var</code> keyword',
            'Using the <code>$</code> sign followed by the variable name',
            'Using the <code>let</code> keyword',
            'Using the <code>dim</code> keyword'
        ],
        answer: 1,
        explanation: 'In PHP, all variables start with a dollar sign ($). For example: $name = "John"; PHP is loosely typed, so you do not need to declare the data type.'
    },
    // ===== 4–6: Data Types =====
    {
        category: 'Data Types',
        type: 'code',
        difficulty: 'easy',
        question: 'What does this code output?',
        code: '<?php\n  $x = 10;\n  $y = "10";\n  var_dump($x == $y);\n  var_dump($x === $y);\n?>',
        options: [
            '<code>bool(true)</code> and <code>bool(true)</code>',
            '<code>bool(true)</code> and <code>bool(false)</code>',
            '<code>bool(false)</code> and <code>bool(false)</code>',
            '<code>bool(false)</code> and <code>bool(true)</code>'
        ],
        answer: 1,
        explanation: '== compares values with type juggling: 10 == "10" is true. === compares both value AND type: 10 (integer) !== "10" (string), so it returns false. Always use === for strict comparison.'
    },
    {
        category: 'Data Types',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the output?',
        code: '<?php\n  $a = "5 apples";\n  $b = $a + 10;\n  echo $b;\n?>',
        options: [
            '<code>15</code>',
            '<code>510</code>',
            '<code>5 apples10</code>',
            'An error'
        ],
        answer: 0,
        explanation: 'PHP performs type juggling with arithmetic operators. "5 apples" is converted to the integer 5 (PHP takes the leading numeric portion). So 5 + 10 = 15.'
    },
    {
        category: 'Data Types',
        type: 'code',
        difficulty: 'medium',
        question: 'What will be printed?',
        code: '<?php\n  $val = null;\n  echo gettype($val);\n  echo " ";\n  echo isset($val) ? "set" : "not set";\n?>',
        options: [
            '<code>NULL not set</code>',
            '<code>NULL set</code>',
            '<code>null not set</code>',
            '<code>null set</code>'
        ],
        answer: 0,
        explanation: 'gettype(null) returns "NULL" (uppercase). isset() returns false for variables that are null, even if the variable is declared. So the output is "NULL not set".'
    },
    // ===== 7–10: Strings =====
    {
        category: 'Strings',
        type: 'code',
        difficulty: 'easy',
        question: 'What is the difference in output between these two echo statements?',
        code: '<?php\n  $name = "PHP";\n  echo \'Hello $name\';\n  echo " | ";\n  echo "Hello $name";\n?>',
        options: [
            '<code>Hello $name | Hello PHP</code>',
            '<code>Hello PHP | Hello PHP</code>',
            '<code>Hello $name | Hello $name</code>',
            'An error on the first echo'
        ],
        answer: 0,
        explanation: 'Single-quoted strings do NOT parse variables — $name is printed literally. Double-quoted strings DO parse variables — $name is replaced with its value "PHP". This is a key distinction in PHP.'
    },
    {
        category: 'Strings',
        type: 'code',
        difficulty: 'medium',
        question: 'What does this code output?',
        code: '<?php\n  $str = "Hello World";\n  echo strlen($str);\n  echo " ";\n  echo strtoupper($str);\n?>',
        options: [
            '<code>11 HELLO WORLD</code>',
            '<code>10 HELLO WORLD</code>',
            '<code>11 hello world</code>',
            '<code>10 Hello World</code>'
        ],
        answer: 0,
        explanation: 'strlen() returns the number of characters including the space: "Hello World" has 11 characters. strtoupper() converts the entire string to uppercase: "HELLO WORLD".'
    },
    {
        category: 'Strings',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the output?',
        code: '<?php\n  $str = "PHP is awesome";\n  echo substr($str, 4, 2);\n  echo " ";\n  echo str_replace("awesome", "great", $str);\n?>',
        options: [
            '<code>is PHP is great</code>',
            '<code>is PHP is awesome</code>',
            '<code>PH PHP is great</code>',
            '<code> i PHP is great</code>'
        ],
        answer: 0,
        explanation: 'substr("PHP is awesome", 4, 2) starts at index 4 (the "i") and takes 2 characters: "is". str_replace replaces "awesome" with "great", producing "PHP is great".'
    },
    {
        category: 'Strings',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this output?',
        code: '<?php\n  $parts = explode(",", "red,green,blue");\n  echo count($parts);\n  echo " ";\n  echo $parts[1];\n?>',
        options: [
            '<code>3 green</code>',
            '<code>3 red</code>',
            '<code>2 green</code>',
            '<code>3 ,green</code>'
        ],
        answer: 0,
        explanation: 'explode() splits a string by a delimiter. "red,green,blue" split by "," creates an array ["red", "green", "blue"]. count() returns 3, and index [1] is "green".'
    },
    // ===== 11–15: Arrays =====
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'easy',
        question: 'What is the output?',
        code: '<?php\n  $fruits = array("Apple", "Banana", "Cherry");\n  echo count($fruits);\n  echo " ";\n  echo $fruits[2];\n?>',
        options: [
            '<code>3 Cherry</code>',
            '<code>3 Banana</code>',
            '<code>2 Cherry</code>',
            '<code>3 apple</code>'
        ],
        answer: 0,
        explanation: 'count() returns the number of elements: 3. PHP arrays are zero-indexed, so $fruits[0] = "Apple", $fruits[1] = "Banana", $fruits[2] = "Cherry".'
    },
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'medium',
        question: 'What does this code output?',
        code: '<?php\n  $person = [\n    "name" => "Alice",\n    "age" => 25,\n    "city" => "Manila"\n  ];\n  echo $person["name"];\n  echo " is ";\n  echo $person["age"];\n?>',
        options: [
            '<code>Alice is 25</code>',
            '<code>name is age</code>',
            '<code>Alice is Manila</code>',
            'An error'
        ],
        answer: 0,
        explanation: 'This is an associative array with string keys. You access values using $array["key"]. $person["name"] returns "Alice" and $person["age"] returns 25.'
    },
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the output after these array operations?',
        code: '<?php\n  $arr = [1, 2, 3];\n  array_push($arr, 4);\n  array_shift($arr);\n  echo implode(", ", $arr);\n?>',
        options: [
            '<code>2, 3, 4</code>',
            '<code>1, 2, 3, 4</code>',
            '<code>1, 2, 3</code>',
            '<code>2, 3</code>'
        ],
        answer: 0,
        explanation: 'array_push() adds 4 to the end → [1,2,3,4]. array_shift() removes the first element (1) → [2,3,4]. implode() joins them with ", " producing "2, 3, 4".'
    },
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this code print?',
        code: '<?php\n  $numbers = [5, 3, 8, 1, 9];\n  sort($numbers);\n  echo $numbers[0];\n  echo " ";\n  echo $numbers[4];\n?>',
        options: [
            '<code>1 9</code>',
            '<code>5 9</code>',
            '<code>9 1</code>',
            '<code>1 5</code>'
        ],
        answer: 0,
        explanation: 'sort() sorts an array in ascending order in-place: [1, 3, 5, 8, 9]. $numbers[0] is the smallest (1) and $numbers[4] is the largest (9).'
    },
    {
        category: 'Arrays',
        type: 'code',
        difficulty: 'hard',
        question: 'What is the output?',
        code: '<?php\n  $arr = ["a" => 1, "b" => 2, "c" => 3];\n  $keys = array_keys($arr);\n  $vals = array_values($arr);\n  echo implode(",", $keys);\n  echo " | ";\n  echo array_sum($vals);\n?>',
        options: [
            '<code>a,b,c | 6</code>',
            '<code>1,2,3 | 6</code>',
            '<code>a,b,c | 3</code>',
            '<code>0,1,2 | 6</code>'
        ],
        answer: 0,
        explanation: 'array_keys() returns the keys: ["a","b","c"]. array_values() returns the values: [1,2,3]. array_sum() adds them: 1+2+3 = 6.'
    },
    // ===== 16–19: Functions =====
    {
        category: 'Functions',
        type: 'code',
        difficulty: 'easy',
        question: 'What will this function return?',
        code: '<?php\n  function add($a, $b) {\n    return $a + $b;\n  }\n  echo add(3, 7);\n?>',
        options: [
            '<code>10</code>',
            '<code>37</code>',
            '<code>3 + 7</code>',
            'An error'
        ],
        answer: 0,
        explanation: 'The function add() takes two parameters, adds them with the + operator, and returns the result. add(3, 7) returns 10, which is then echoed.'
    },
    {
        category: 'Functions',
        type: 'code',
        difficulty: 'medium',
        question: 'What does this code output?',
        code: '<?php\n  function greet($name = "Guest") {\n    return "Hello, $name!";\n  }\n  echo greet();\n  echo " ";\n  echo greet("PHP");\n?>',
        options: [
            '<code>Hello, Guest! Hello, PHP!</code>',
            '<code>Hello, ! Hello, PHP!</code>',
            'An error — missing argument',
            '<code>Hello, Guest! Hello, Guest!</code>'
        ],
        answer: 0,
        explanation: 'Default parameter values allow calling a function without that argument. greet() uses the default "Guest". greet("PHP") overrides it with "PHP". The double-quoted string parses $name.'
    },
    {
        category: 'Functions',
        type: 'code',
        difficulty: 'hard',
        question: 'What is the output?',
        code: '<?php\n  $x = 5;\n\n  function test() {\n    echo $x;\n  }\n\n  test();\n?>',
        options: [
            '<code>5</code>',
            'Nothing (empty output) or a warning',
            '<code>null</code>',
            '<code>0</code>'
        ],
        answer: 1,
        explanation: 'PHP functions have their own scope. Unlike JavaScript, global variables are NOT accessible inside functions unless you use the "global" keyword or $GLOBALS superglobal. $x is undefined inside test(), producing no output (or a warning).'
    },
    {
        category: 'Functions',
        type: 'code',
        difficulty: 'hard',
        question: 'What will this output?',
        code: '<?php\n  function modify(&$val) {\n    $val = $val * 2;\n  }\n\n  $num = 10;\n  modify($num);\n  echo $num;\n?>',
        options: [
            '<code>10</code>',
            '<code>20</code>',
            '<code>0</code>',
            'An error'
        ],
        answer: 1,
        explanation: 'The & before $val means it is passed by reference. Changes inside the function affect the original variable. So $num becomes 10 * 2 = 20. Without &, $num would remain 10.'
    },
    // ===== 20–23: Control Structures =====
    {
        category: 'Control Structures',
        type: 'code',
        difficulty: 'easy',
        question: 'What will this loop output?',
        code: '<?php\n  for ($i = 1; $i <= 5; $i++) {\n    echo $i . " ";\n  }\n?>',
        options: [
            '<code>1 2 3 4 5 </code>',
            '<code>0 1 2 3 4 </code>',
            '<code>1 2 3 4 </code>',
            '<code>0 1 2 3 4 5 </code>'
        ],
        answer: 0,
        explanation: 'The for loop starts at $i = 1, continues while $i <= 5, and increments by 1 each iteration. It prints: 1 2 3 4 5.'
    },
    {
        category: 'Control Structures',
        type: 'code',
        difficulty: 'medium',
        question: 'What is the output?',
        code: '<?php\n  $colors = ["red", "green", "blue"];\n  foreach ($colors as $index => $color) {\n    if ($color === "green") {\n      echo "$index:$color";\n    }\n  }\n?>',
        options: [
            '<code>1:green</code>',
            '<code>2:green</code>',
            '<code>green</code>',
            '<code>0:green</code>'
        ],
        answer: 0,
        explanation: 'foreach with $index => $color gives both the key and value. "green" is at index 1 (zero-based). When $color === "green", it prints "1:green".'
    },
    {
        category: 'Control Structures',
        type: 'code',
        difficulty: 'medium',
        question: 'What does this switch statement output?',
        code: '<?php\n  $grade = "B";\n  switch ($grade) {\n    case "A":\n      echo "Excellent";\n      break;\n    case "B":\n      echo "Good";\n      break;\n    case "C":\n      echo "Fair";\n      break;\n    default:\n      echo "Unknown";\n  }\n?>',
        options: [
            '<code>Good</code>',
            '<code>Excellent</code>',
            '<code>GoodFair</code>',
            '<code>Unknown</code>'
        ],
        answer: 0,
        explanation: '$grade is "B", which matches case "B". It prints "Good" and the break statement prevents fall-through to the next case. Without break, it would continue executing subsequent cases.'
    },
    {
        category: 'Control Structures',
        type: 'code',
        difficulty: 'hard',
        question: 'What happens when this code runs?',
        code: '<?php\n  $x = 0;\n  while ($x < 3) {\n    echo $x . " ";\n    $x++;\n  }\n  echo "| $x";\n?>',
        options: [
            '<code>0 1 2 | 3</code>',
            '<code>0 1 2 | 2</code>',
            '<code>1 2 3 | 3</code>',
            '<code>0 1 2 3 | 4</code>'
        ],
        answer: 0,
        explanation: 'The while loop prints 0, 1, 2 then $x becomes 3 and the condition fails. After the loop, $x is still 3 (it was incremented to 3, which ended the loop). So the final output is "0 1 2 | 3".'
    },
    // ===== 24–26: OOP =====
    {
        category: 'OOP',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this code output?',
        code: '<?php\n  class Car {\n    public $brand;\n\n    public function __construct($brand) {\n      $this->brand = $brand;\n    }\n\n    public function describe() {\n      return "Car: " . $this->brand;\n    }\n  }\n\n  $myCar = new Car("Toyota");\n  echo $myCar->describe();\n?>',
        options: [
            '<code>Car: Toyota</code>',
            '<code>Car: </code>',
            'An error — invalid constructor',
            '<code>Toyota</code>'
        ],
        answer: 0,
        explanation: '__construct() is the PHP constructor method, called automatically when new Car("Toyota") is created. $this->brand stores "Toyota". The describe() method returns "Car: Toyota".'
    },
    {
        category: 'OOP',
        type: 'code',
        difficulty: 'hard',
        question: 'What is the output?',
        code: '<?php\n  class Animal {\n    public function speak() {\n      return "...";\n    }\n  }\n\n  class Dog extends Animal {\n    public function speak() {\n      return "Woof!";\n    }\n  }\n\n  $dog = new Dog();\n  echo $dog->speak();\n  echo " ";\n  echo ($dog instanceof Animal) ? "yes" : "no";\n?>',
        options: [
            '<code>Woof! yes</code>',
            '<code>... yes</code>',
            '<code>Woof! no</code>',
            'An error — cannot override methods'
        ],
        answer: 0,
        explanation: 'Dog extends Animal and overrides the speak() method (polymorphism). $dog->speak() returns "Woof!". instanceof checks inheritance — Dog IS an instance of Animal, so it returns true.'
    },
    {
        category: 'OOP',
        type: 'concept',
        difficulty: 'medium',
        question: 'What does the <code>private</code> access modifier mean in PHP OOP?',
        options: [
            'The property/method can be accessed from anywhere',
            'The property/method can only be accessed within the class that defined it',
            'The property/method can be accessed by the class and its child classes',
            'The property/method can only be accessed by static methods'
        ],
        answer: 1,
        explanation: 'private members can only be accessed within the declaring class itself. public allows access from anywhere. protected allows access within the class and its subclasses. These are the three visibility levels in PHP.'
    },
    // ===== 27–28: Superglobals & Forms =====
    {
        category: 'Superglobals',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which PHP superglobal is used to collect form data sent with the HTTP POST method?',
        options: [
            '<code>$_GET</code>',
            '<code>$_POST</code>',
            '<code>$_REQUEST</code>',
            '<code>$_SERVER</code>'
        ],
        answer: 1,
        explanation: '$_POST contains form data sent via the POST method. $_GET contains URL query parameters. $_REQUEST contains both GET and POST data. $_SERVER contains server and request information.'
    },
    {
        category: 'Superglobals',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which superglobal stores session data across multiple page requests?',
        options: [
            '<code>$_COOKIE</code>',
            '<code>$_SESSION</code>',
            '<code>$_SERVER</code>',
            '<code>$_GLOBALS</code>'
        ],
        answer: 1,
        explanation: '$_SESSION stores data for individual users across multiple pages during a browsing session. You must call session_start() before using it. Data is stored on the server, not in the browser.'
    },
    // ===== 29–30: Error Handling & Misc =====
    {
        category: 'Error Handling',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this code output?',
        code: '<?php\n  try {\n    $result = 10 / 0;\n    echo $result;\n  } catch (DivisionByZeroError $e) {\n    echo "Error: " . $e->getMessage();\n  } finally {\n    echo " | Done";\n  }\n?>',
        options: [
            '<code>Error: Division by zero | Done</code>',
            '<code>INF | Done</code>',
            '<code>0 | Done</code>',
            '<code>Error: Division by zero</code>'
        ],
        answer: 0,
        explanation: 'In PHP 8+, dividing by zero throws a DivisionByZeroError. The catch block handles it, printing the error message. The finally block ALWAYS executes, printing " | Done".'
    },
    {
        category: 'Error Handling',
        type: 'code',
        difficulty: 'hard',
        question: 'What is the output of this code?',
        code: '<?php\n  function divide($a, $b) {\n    if ($b === 0) {\n      throw new Exception("Cannot divide by zero");\n    }\n    return $a / $b;\n  }\n\n  try {\n    echo divide(10, 2);\n    echo " ";\n    echo divide(10, 0);\n  } catch (Exception $e) {\n    echo $e->getMessage();\n  }\n?>',
        options: [
            '<code>5 Cannot divide by zero</code>',
            '<code>Cannot divide by zero</code>',
            '<code>5 5</code>',
            '<code>5 </code> then an uncaught error'
        ],
        answer: 0,
        explanation: 'divide(10, 2) succeeds and prints 5. divide(10, 0) throws an Exception which is caught. The catch block prints "Cannot divide by zero". Final output: "5 Cannot divide by zero".'
    }
];
