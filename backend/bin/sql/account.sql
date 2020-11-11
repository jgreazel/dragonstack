create table account(
    id                  serial primary key,
    "usernameHash"      character(64),
    "passwordHash"      character(64),
    "sessionId"         character(36)
);