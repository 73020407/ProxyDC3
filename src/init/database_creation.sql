CREATE TABLE account(
    id serial PRIMARY KEY,
    login_name VARCHAR(32) NOT NULL,
    diplay_name VARCHAR(32),
    pass_word VARCHAR(128) NOT NULL
);
INSERT INTO account(login_name, diplay_name, pass_word) VALUES('proxydc_admin', 'Admin', '_ProxyDC_Config'); -- TODO hash

CREATE TABLE form_session(
    id serial PRIMARY KEY,
    session_start TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    session_end TIMESTAMP
);

CREATE FUNCTION check_session (IN session_id int, OUT is_session_valid boolean)
AS 'SELECT COUNT(id) FROM form_session WHERE form_session.id = session_id AND CURRENT_TIMESTAMP BEETWEEN session_start AND session_end'
LANGUAGE SQL;
-- SELECT check_session(42);

CREATE TABLE dc(
    id VARCHAR(32) PRIMARY KEY,
    firstname VARCHAR(32) NOT NULL,
    familyname VARCHAR(32) NOT NULL,
    email VARCHAR(32) NOT NULL,
    dc_status INT REFERENCES dc_status (id), -- Default = 2 ?
    tags VARCHAR(256),
    document JSON NOT NULL
);

CREATE TABLE dc_status(
    id INT PRIMARY KEY,
    label VARCHAR(32) NOT NULL
);
INSERT INTO dc_status(id, label) VALUES(1, "Archive"),(2, "Candidat"), (3, "Employé");


