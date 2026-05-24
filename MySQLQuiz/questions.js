// ============================================
//  MYSQL QUIZ — 30 QUESTIONS DATA
// ============================================

const QUESTIONS = [
    // Basic Queries (1-5)
    {
        category: 'Basic Queries',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which statement is used to extract data from a database?',
        options: ['<code>GET</code>', '<code>SELECT</code>', '<code>EXTRACT</code>', '<code>OPEN</code>'],
        answer: 1,
        explanation: 'The <code>SELECT</code> statement is the primary way to query and extract data from tables in MySQL.'
    },
    {
        category: 'Basic Queries',
        type: 'code',
        difficulty: 'easy',
        question: 'What is the expected result of this query?',
        code: 'SELECT * FROM users;',
        options: [
            'Retrieves the first row from the <code>users</code> table',
            'Retrieves all columns and rows from the <code>users</code> table',
            'Deletes the <code>users</code> table',
            'Returns the number of rows in the <code>users</code> table'
        ],
        answer: 1,
        explanation: 'The asterisk (*) is a wildcard character that means "all columns". This query retrieves every row and every column from the table.'
    },
    {
        category: 'Basic Queries',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which SQL statement is used to update data in a database?',
        options: ['<code>SAVE</code>', '<code>MODIFY</code>', '<code>UPDATE</code>', '<code>ALTER</code>'],
        answer: 2,
        explanation: '<code>UPDATE</code> is a DML (Data Manipulation Language) statement used to modify existing records in a table.'
    },
    {
        category: 'Basic Queries',
        type: 'code',
        difficulty: 'medium',
        question: 'What is wrong with this query if the goal is to insert a new row?',
        code: 'INSERT INTO employees VALUES ("John", "Doe");',
        options: [
            'It should be <code>ADD INTO</code>',
            'It needs a <code>WHERE</code> clause',
            'It assumes the table only has 2 columns in that exact order',
            'Values must be enclosed in single quotes, not double quotes'
        ],
        answer: 2,
        explanation: 'While valid syntax, omitting the column names before <code>VALUES</code> means you must provide values for every single column in the exact order they were defined in the table schema.'
    },
    {
        category: 'Basic Queries',
        type: 'code',
        difficulty: 'hard',
        question: 'What does this query do?',
        code: 'DELETE FROM orders;',
        options: [
            'Deletes the <code>orders</code> table structure',
            'Throws a syntax error due to missing <code>WHERE</code> clause',
            'Deletes the first row of the <code>orders</code> table',
            'Deletes all rows from the <code>orders</code> table'
        ],
        answer: 3,
        explanation: 'Running <code>DELETE</code> without a <code>WHERE</code> clause will remove all records from the table, though the table structure itself remains intact.'
    },

    // Filtering & Sorting (6-10)
    {
        category: 'Filtering & Sorting',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which clause is used to filter records?',
        options: ['<code>ORDER BY</code>', '<code>WHERE</code>', '<code>FILTER</code>', '<code>HAVING</code>'],
        answer: 1,
        explanation: 'The <code>WHERE</code> clause is used to filter records and extract only those that fulfill a specified condition.'
    },
    {
        category: 'Filtering & Sorting',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this query return?',
        code: 'SELECT name FROM products WHERE price BETWEEN 10 AND 20;',
        options: [
            'Products priced 11 through 19',
            'Products priced 10 through 20 (inclusive)',
            'Products priced either 10 or 20',
            'Throws a syntax error'
        ],
        answer: 1,
        explanation: 'The <code>BETWEEN</code> operator selects values within a given range. In MySQL, the range is inclusive of the start and end values.'
    },
    {
        category: 'Filtering & Sorting',
        type: 'code',
        difficulty: 'medium',
        question: 'Which records will this query match?',
        code: 'SELECT * FROM customers WHERE name LIKE "a%";',
        options: [
            'Names containing "a" anywhere',
            'Names starting with "a"',
            'Names ending with "a"',
            'Names with exactly one "a"'
        ],
        answer: 1,
        explanation: 'The percent sign (%) represents zero, one, or multiple characters. "a%" means the string must start with "a" followed by anything.'
    },
    {
        category: 'Filtering & Sorting',
        type: 'code',
        difficulty: 'hard',
        question: 'What does this query accomplish?',
        code: 'SELECT * FROM employees ORDER BY salary DESC, last_name ASC;',
        options: [
            'Sorts only by salary; last_name is ignored',
            'Sorts by last_name first, then by salary',
            'Sorts by salary descending, and for matching salaries, sorts by last_name ascending',
            'Throws an error because you cannot use multiple ORDER BY columns'
        ],
        answer: 2,
        explanation: 'When multiple columns are specified in <code>ORDER BY</code>, sorting occurs by the first column, and the second column is only used to break ties when the first column values are identical.'
    },
    {
        category: 'Filtering & Sorting',
        type: 'code',
        difficulty: 'medium',
        question: 'How do you correctly select rows where the email is empty/missing?',
        code: 'SELECT * FROM users WHERE email = NULL;',
        options: [
            'The code provided is correct',
            '<code>WHERE email IS NULL</code>',
            '<code>WHERE email == NULL</code>',
            '<code>WHERE email = ""</code>'
        ],
        answer: 1,
        explanation: 'You cannot use standard comparison operators (=, <, >) with NULL. You must use the <code>IS NULL</code> or <code>IS NOT NULL</code> operators.'
    },

    // Joins (11-15)
    {
        category: 'Joins',
        type: 'concept',
        difficulty: 'medium',
        question: 'Which join returns only rows that have matching values in both tables?',
        options: ['<code>LEFT JOIN</code>', '<code>RIGHT JOIN</code>', '<code>INNER JOIN</code>', '<code>FULL JOIN</code>'],
        answer: 2,
        explanation: 'An <code>INNER JOIN</code> selects records that have matching values in both tables.'
    },
    {
        category: 'Joins',
        type: 'code',
        difficulty: 'medium',
        question: 'In this query, what happens if an order does not have a matching customer?',
        code: 'SELECT orders.id, customers.name\nFROM orders\nLEFT JOIN customers ON orders.cust_id = customers.id;',
        options: [
            'The order is excluded from the results',
            'The order is included, and customer name is NULL',
            'The query throws a foreign key error',
            'The order is included, and customer name is empty string'
        ],
        answer: 1,
        explanation: 'A <code>LEFT JOIN</code> returns all records from the left table (orders), and matched records from the right table. If there is no match, the result is NULL on the right side.'
    },
    {
        category: 'Joins',
        type: 'code',
        difficulty: 'hard',
        question: 'What is the result of a CROSS JOIN without a WHERE clause?',
        code: 'SELECT * FROM table1 CROSS JOIN table2;',
        options: [
            'An inner join on primary keys',
            'A Cartesian product of the two tables',
            'Only rows that have identical data in both tables',
            'Syntax Error'
        ],
        answer: 1,
        explanation: 'A <code>CROSS JOIN</code> returns the Cartesian product of rows from tables in the join. If table1 has 5 rows and table2 has 5 rows, it returns 25 rows.'
    },
    {
        category: 'Joins',
        type: 'concept',
        difficulty: 'medium',
        question: 'What is a SELF JOIN?',
        options: [
            'A specific MySQL keyword: <code>SELF JOIN</code>',
            'Joining a table to itself using table aliases',
            'Joining a table to a view',
            'Joining two tables with identical structures'
        ],
        answer: 1,
        explanation: 'A self join is a regular join, but the table is joined with itself. It requires using table aliases to differentiate the two instances of the table in the query.'
    },
    {
        category: 'Joins',
        type: 'code',
        difficulty: 'hard',
        question: 'What does the USING clause do in this join?',
        code: 'SELECT * FROM employees INNER JOIN departments USING (dept_id);',
        options: [
            'It is shorthand for <code>ON employees.dept_id = departments.dept_id</code>',
            'It specifies the index to use for the join',
            'It renames the column in the output',
            'It ignores duplicate department IDs'
        ],
        answer: 0,
        explanation: 'The <code>USING</code> clause is a shorthand for the <code>ON</code> clause when the columns you are joining on have the exact same name in both tables.'
    },

    // Aggregation (16-20)
    {
        category: 'Aggregation',
        type: 'concept',
        difficulty: 'easy',
        question: 'Which function returns the total sum of a numeric column?',
        options: ['<code>TOTAL()</code>', '<code>COUNT()</code>', '<code>SUM()</code>', '<code>ADD()</code>'],
        answer: 2,
        explanation: '<code>SUM()</code> calculates the total sum of a numeric column.'
    },
    {
        category: 'Aggregation',
        type: 'code',
        difficulty: 'medium',
        question: 'What will this query output?',
        code: 'SELECT COUNT(*) FROM users;',
        options: [
            'The number of columns in the users table',
            'The number of non-NULL rows in the users table',
            'The total number of rows in the users table',
            'An array of all user IDs'
        ],
        answer: 2,
        explanation: '<code>COUNT(*)</code> returns the total number of rows in a table, including rows with NULL values.'
    },
    {
        category: 'Aggregation',
        type: 'code',
        difficulty: 'hard',
        question: 'Identify the error in this query.',
        code: 'SELECT department, SUM(salary) FROM employees;',
        options: [
            'SUM cannot be used on salary',
            'Missing <code>GROUP BY department</code> clause',
            'Missing <code>WHERE</code> clause',
            'Cannot select a column and an aggregate function together under any circumstances'
        ],
        answer: 1,
        explanation: 'When combining an aggregate function (SUM) with a non-aggregated column (department), you must group the results using <code>GROUP BY department</code>, otherwise MySQL will throw an error (or return arbitrary data depending on sql_mode).'
    },
    {
        category: 'Aggregation',
        type: 'code',
        difficulty: 'hard',
        question: 'Which clause is used to filter the results of an aggregate function?',
        code: 'SELECT dept_id, COUNT(*) FROM employees\nGROUP BY dept_id\n___ COUNT(*) > 5;',
        options: ['<code>WHERE</code>', '<code>HAVING</code>', '<code>FILTER</code>', '<code>ORDER BY</code>'],
        answer: 1,
        explanation: 'The <code>HAVING</code> clause was added to SQL because the <code>WHERE</code> keyword cannot be used with aggregate functions.'
    },
    {
        category: 'Aggregation',
        type: 'concept',
        difficulty: 'medium',
        question: 'What does the DISTINCT keyword do?',
        options: [
            'Speeds up the query execution',
            'Returns only unique (different) values',
            'Formats the output text distinctively',
            'Joins tables distinctly'
        ],
        answer: 1,
        explanation: 'The <code>SELECT DISTINCT</code> statement is used to return only distinct (different) values, removing duplicates from the result set.'
    },

    // Schema & Constraints (21-25)
    {
        category: 'Schema & Constraints',
        type: 'concept',
        difficulty: 'easy',
        question: 'What is the purpose of a PRIMARY KEY?',
        options: [
            'To encrypt the row data',
            'To uniquely identify each record in a table',
            'To link two tables together',
            'To automatically increment numbers'
        ],
        answer: 1,
        explanation: 'A Primary Key uniquely identifies each record in a table. It must contain UNIQUE values, and cannot contain NULL values.'
    },
    {
        category: 'Schema & Constraints',
        type: 'concept',
        difficulty: 'medium',
        question: 'What does a FOREIGN KEY do?',
        options: [
            'Prevents actions that would destroy links between tables',
            'Creates a secondary index for faster searching',
            'Allows storing JSON data in a column',
            'Makes a column accept data from external databases'
        ],
        answer: 0,
        explanation: 'A Foreign Key is a key used to link two tables together. It enforces referential integrity by preventing actions that would destroy links between tables.'
    },
    {
        category: 'Schema & Constraints',
        type: 'code',
        difficulty: 'medium',
        question: 'Which SQL statement modifies an existing table structure (e.g. adding a column)?',
        code: '___ TABLE users ADD COLUMN age INT;',
        options: ['<code>UPDATE</code>', '<code>MODIFY</code>', '<code>ALTER</code>', '<code>CHANGE</code>'],
        answer: 2,
        explanation: 'The <code>ALTER TABLE</code> statement is used to add, delete, or modify columns in an existing table.'
    },
    {
        category: 'Schema & Constraints',
        type: 'code',
        difficulty: 'hard',
        question: 'What happens if you insert NULL into a column defined with AUTO_INCREMENT?',
        code: 'CREATE TABLE test (id INT AUTO_INCREMENT PRIMARY KEY);\nINSERT INTO test (id) VALUES (NULL);',
        options: [
            'It throws a Not Null constraint violation',
            'It inserts the value 0',
            'It automatically generates the next sequential integer',
            'It throws a Syntax Error'
        ],
        answer: 2,
        explanation: 'In MySQL, inserting NULL (or omitting the column entirely) into an AUTO_INCREMENT column will automatically generate and insert the next sequential integer.'
    },
    {
        category: 'Schema & Constraints',
        type: 'concept',
        difficulty: 'hard',
        question: 'Which data type is best for storing a fixed-length string like a 2-letter country code?',
        options: ['<code>VARCHAR(2)</code>', '<code>CHAR(2)</code>', '<code>TEXT</code>', '<code>BLOB</code>'],
        answer: 1,
        explanation: '<code>CHAR</code> is a fixed-length character type. It is faster and more efficient than <code>VARCHAR</code> when you know all values will be exactly the same length (like country codes or state abbreviations).'
    },

    // Advanced (26-30)
    {
        category: 'Advanced',
        type: 'code',
        difficulty: 'hard',
        question: 'What is the output of this query?',
        code: 'SELECT COALESCE(NULL, NULL, "Third", "Fourth");',
        options: ['<code>NULL</code>', '<code>"Third"</code>', '<code>"Fourth"</code>', '<code>Error</code>'],
        answer: 1,
        explanation: 'The <code>COALESCE()</code> function returns the first non-null value in a list.'
    },
    {
        category: 'Advanced',
        type: 'code',
        difficulty: 'hard',
        question: 'What does the UNION operator do?',
        code: 'SELECT city FROM customers\nUNION\nSELECT city FROM suppliers;',
        options: [
            'Joins the two tables side-by-side',
            'Combines the result sets and keeps all duplicates',
            'Combines the result sets and removes duplicates',
            'Filters the first table based on the second'
        ],
        answer: 2,
        explanation: 'The <code>UNION</code> operator combines the result sets of two or more SELECT statements and removes duplicate rows. To keep duplicates, you must use <code>UNION ALL</code>.'
    },
    {
        category: 'Advanced',
        type: 'code',
        difficulty: 'hard',
        question: 'How do you rollback a transaction in MySQL?',
        code: 'START TRANSACTION;\nDELETE FROM users WHERE id = 1;\n___;',
        options: ['<code>UNDO;</code>', '<code>REVERT;</code>', '<code>CANCEL;</code>', '<code>ROLLBACK;</code>'],
        answer: 3,
        explanation: '<code>ROLLBACK</code> is used to undo transactions that have not yet been saved (committed) to the database.'
    },
    {
        category: 'Advanced',
        type: 'code',
        difficulty: 'hard',
        question: 'What type of query is this?',
        code: 'SELECT name FROM employees \nWHERE salary > (SELECT AVG(salary) FROM employees);',
        options: [
            'A JOIN query',
            'A UNION query',
            'A Subquery (Nested Query)',
            'A Stored Procedure'
        ],
        answer: 2,
        explanation: 'A Subquery is a query nested inside another statement. Here, the inner query calculates the average salary, and the outer query uses that result to filter employees.'
    },
    {
        category: 'Advanced',
        type: 'concept',
        difficulty: 'hard',
        question: 'In MySQL, what is an INDEX used for?',
        options: [
            'To compress table data and save disk space',
            'To encrypt sensitive columns automatically',
            'To retrieve data from the database very fast',
            'To create foreign key relationships'
        ],
        answer: 2,
        explanation: 'Indexes are used to find rows with specific column values quickly. Without an index, MySQL must scan the whole table to find the relevant rows.'
    }
];
