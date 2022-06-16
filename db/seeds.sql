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
    ('Frank', 'Frankson', 4, 4),    #7
    ('Jose', 'Clooney', 4, 5),      #8
    ('Bill', 'Wilson', 4, 6),       #9

    #Engineers
    ('Lead', 'Engineer', 5, 6),    #10
    ('Hugh', 'Mongo', 5, 6),       #11
    ('Migh', 'Seequel', 6, 6),     #12

    ('Bro', 'Handsom', 5, 7),      #13
    ('Sonic', 'Hedgehog', 5, 7),   #14
    ('Mario', 'Plumber', 6, 7),    #15

    ('Bro', 'Chacho', 6, 8),       #16
    ('Bro', 'Tato', 5, 8),         #17
    ('Bro', 'Tastic', 5, 8),       #18

    #Sales Managers
    ('Doctor', 'Schmit', 3, 2),    #19
    ('Who', 'Areyou', 3, 2),       #20

    #Salesmen
    ('Laem', 'Neesan', 7, 19),     #21
    ('Tim', 'Henson', 7, 19),      #22

    ('Ricardo', 'Ricardo', 7, 20), #23
    ('Scottie', 'LePage', 7, 20),  #24


    #Interns
    ('Owane', 'Kjelburg', 8, 3),   #25
    ('Under', 'There', 8, 3),      #26
    ('Matthew', 'Patrick', 8, 3),  #27
    ('Matt', 'Watson', 8, 3),      #28
    ('Ryan', 'MaGee', 8, 3),       #29
    ('Mark', 'Pavel', 8, 3);       #30