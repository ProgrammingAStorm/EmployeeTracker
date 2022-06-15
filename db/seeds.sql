INSERT INTO departments ( name )
VALUES
    ('Management'),  #1
    ('Engineering'), #2
    ('Sales'),       #3
    ('Interning');   #4

INSERT INTO roles ( title, salary, department_id )
VALUES 
    #Management
    ('Department Manager', 200000, 1), #1
    ('Teams Manager', 175000, 1),      #2
    ('Sales Manager', 150000, 1),      #3

    #Engineering
    ('Lead Engineer', 150000, 2),      #4
    ('Engineer', 100000, 2),           #5
    ('Junior Engineer', 75000, 2),     #6

    #Sales
    ('Salesman', 50000, 3),            #7

    #Interning
    ('Intern', 32500, 4);              #8

INSERT INTO employees ( first_name, last_name, role_id, manager_id )
VALUES
    #Department Heads
    ('Lead', 'Jones', 1, NULL),     #1
    ('Doe', 'Jones', 1, NULL),      #2    
    ('Nas', 'Daq', 1, NULL),        #3

    #Teams Managers
    ('John', 'Smith', 2, 1),        #4
    ('Claire', 'Richards', 2, 1),   #5
    ('Jason', 'Powell', 2, 1),      #6

    #Lead Engineers
    ('Frank', 'Frankson', 4, 4),    #6
    ('Jose', 'Clooney', 4, 5),      #7
    ('Bill', 'Wilson', 4, 6),       #8

    #Engineers
    ('Lead', 'Engineer', 5, 6),     #9
    ('Hugh', 'Mongo', 5, 6),       #10
    ('Migh', 'Seequel', 6, 6),     #11

    ('Bro', 'Handsom', 5, 7),      #12
    ('Sonic', 'Hedgehog', 5, 7),   #13
    ('Mario', 'Plumber', 6, 7),    #14

    ('Bro', 'Chacho', 6, 8),       #15
    ('Bro', 'Tato', 5, 8),         #16
    ('Bro', 'Tastic', 5, 8),       #17

    #Sales Managers
    ('Doctor', 'Schmit', 3, 2),    #18
    ('Who', 'Areyou', 3, 2),       #19

    #Salesmen
    ('Laem', 'Neesan', 7, 18),     #20
    ('Tim', 'Henson', 7, 18),      #21

    ('Ricardo', 'Ricardo', 7, 19), #22
    ('Scottie', 'LePage', 7, 19),  #23


    #Interns
    ('Owane', 'Kjelburg', 8, 3),   #24
    ('Under', 'There', 8, 3),      #25
    ('Matthew', 'Patrick', 8, 3),  #26
    ('Matt', 'Watson', 8, 3),      #27
    ('Ryan', 'MaGee', 8, 3),       #28
    ('Mark', 'Pavel', 8, 3);       #29