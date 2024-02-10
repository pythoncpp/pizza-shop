create DATABASE pizza_shop;

USE pizza_shop;

-- User
CREATE TABLE user (
    id INTEGER PRIMARY KEY auto_increment,
    firstName VARCHAR(50),
    lastName VARCHAR(50),
    email VARCHAR(50),
    password VARCHAR(100),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- pizza
CREATE TABLE pizza (
    id INTEGER PRIMARY KEY auto_increment,
    name VARCHAR(50),
    details VARCHAR(1024),
    price FLOAT,
    image VARCHAR(100),
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

INSERT into pizza (name, details, price, image) VALUE
    ('MARGHERITA', 'A hugely popular margherita, with a deliciously tangy single cheese topping', 99, 'pizza1.webp'),
    ('DOUBLE CHEESE MARGHERITA', 'The ever-popular Margherita - loaded with extra cheese... oodies of it!', 199, 'pizza2.jpeg'),
    ('FARM HOUSE', 'A pizza that goes ballistic on veggies! Check out this mouth watering overload of crunchy, crisp capsicum, succulent mushrooms and fresh tomatoes', 299, 'pizza3.jpeg'),
    ('PEPPY PANEER', 'Chunky paneer with crisp capsicum and spicy red pepper - quite a mouthful!', 199, 'pizza4.jpeg'),
    ('MEXICAN GREEN WAVE', 'A pizza loaded with crunchy onions, crisp capsicum, juicy tomatoes and jalapeno with a liberal sprinkling of exotic Mexican herbs.', 499, 'pizza5.jpeg'),
    ('DELUXE VEGGIE', 'For a vegetarian looking for a BIG treat that goes easy on the spices, this ones got it all.. The onions, the capsicum, those delectable mushrooms - with paneer and golden corn to top it all.', 399, 'pizza6.jpeg');

-- order
CREATE TABLE orderMaster (
    id INTEGER PRIMARY KEY auto_increment,
    userId INTEGER,
    totalAmount FLOAT,
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- order details
CREATE TABLE orderDetails (
    id INTEGER PRIMARY KEY auto_increment,
    orderId INTEGER,
    pizzaId INTEGER,
    quantity INTEGER,
    totalAmount FLOAT,
    createdTimestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

create table test(
    id INTEGER PRIMARY KEY auto_increment,
    title varchar(100)
);

insert into test  (title) values
    ('test 1'),
    ('test 2'),
    ('test 3'),
    ('test 4'),
    ('test 5'),
    ('test 6'),
    ('test 7'),
    ('test 8'),
    ('test 9'),
    ('test 10'),
    ('test 11'),
    ('test 12'),
    ('test 13'),
    ('test 14'),
    ('test 15'),
    ('test 16'),
    ('test 17'),
    ('test 18'),
    ('test 19'),
    ('test 20');



