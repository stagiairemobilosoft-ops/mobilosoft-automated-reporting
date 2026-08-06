CREATE DATABASE conguration_master;

-- HUB Location
CREATE TABLE t_site (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    language VARCHAR(10) NOT NULL
);

CREATE TABLE t_location (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) NOT NULL,
    language VARCHAR(10) NOT NULL
);

CREATE TABLE t_site_location (
    id SERIAL PRIMARY KEY,
    site_id INTEGER NOT NULL REFERENCES t_site(id),
    location_id INTEGER NOT NULL REFERENCES t_location(id),
    UNIQUE (site_id, location_id)
);

-- CONFIG rapport
 -- type : HQ - établissement
CREATE TABLE t_rp_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- fréquence : hebdo, mensuel, trimestriel
CREATE TABLE t_rp_frequency (
    id SERIAL PRIMARY KEY,
    name VARCHAR(30) NOT NULL UNIQUE
);

-- rp_config : rapport
CREATE TABLE t_rp_config (
    id SERIAL PRIMARY KEY,
    name VARCHAR(150) NOT NULL,
    rp_type_id INTEGER NOT NULL REFERENCES t_rp_type(id),
    format_email BOOLEAN DEFAULT TRUE,
    format_pdf BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- planification
CREATE TABLE t_rp_schedule (
    id SERIAL PRIMARY KEY,
    id_rp_config INTEGER NOT NULL REFERENCES t_rp_config(id),
    send_mode VARCHAR(20) NOT NULL,    -- AUTO & MANUAL
    id_frequency INTEGER REFERENCES t_rp_frequency(id),
    day VARCHAR(20),
    hour TIME,
    next_execution TIMESTAMP,
    last_execution TIMESTAMP,
    report_start DATE,
    report_end DATE
);

-- destinataire
CREATE TABLE t_rp_recipient (
    id SERIAL PRIMARY KEY,
    id_rp_config INTEGER NOT NULL REFERENCES t_rp_config(id),
    email VARCHAR(255) NOT NULL
);

-- classé par clients
CREATE TABLE t_rp_target (
    id SERIAL PRIMARY KEY,
    id_rp_config INTEGER NOT NULL REFERENCES t_rp_config(id),
    id_site INTEGER REFERENCES t_site(id),
    id_location INTEGER REFERENCES t_location(id)
);

