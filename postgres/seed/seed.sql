BEGIN TRANSACTION;

INSERT into users (name, email, entries, joined) values ('joseph1', 'joseph1@gmail.com', 5 , '2018-01-10' );
INSERT into login (hash, email) values ('$2a$12$hUIX33CyeF9F3ta8FMT/NetVvuEAX6jPdIiJYllIaMlIyt1GA23dS', 'joseph1@gmail.com');

COMMIT;