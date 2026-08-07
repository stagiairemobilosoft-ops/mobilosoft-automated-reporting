CREATE DATABASE conguration_master;

-- HUB Location
CREATE TABLE t_site (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    language VARCHAR(10) NOT NULL
);

CREATE TABLE t_location (
    id SERIAL PRIMARY KEY,
    id_site INTEGER NOT NULL REFERENCES t_site(id),
    name VARCHAR(255) NOT NULL,
    description TEXT,
    status VARCHAR(20) NOT NULL,
    language VARCHAR(10) NOT NULL
);

-- CONFIG RAPPORT
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
    id_rp_type INTEGER NOT NULL REFERENCES t_rp_type(id),
    format_email BOOLEAN DEFAULT TRUE,
    format_pdf BOOLEAN DEFAULT FALSE,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status BOOLEAN DEFAULT TRUE
);

-- planification
CREATE TABLE t_rp_schedule (
    id SERIAL PRIMARY KEY,
    id_rp_config INTEGER NOT NULL REFERENCES t_rp_config(id),
    send_mode VARCHAR(20) NOT NULL,    -- AUTO & MANUAL
    id_frequency INTEGER REFERENCES t_rp_frequency(id),
    day VARCHAR(20),
    hour TIME,
    next_execution DATE,
    last_execution DATE,
    report_start DATE,
    report_end DATE
);

-- classé par clients
CREATE TABLE t_rp_target (
    id SERIAL PRIMARY KEY,
    id_rp_schedule INTEGER NOT NULL REFERENCES t_rp_config(id),
    id_site INTEGER REFERENCES t_site(id),
    id_location INTEGER REFERENCES t_location(id)
);

-- destinataire
CREATE TABLE t_rp_recipient (
    id SERIAL PRIMARY KEY,
    id_rp_target INTEGER NOT NULL REFERENCES t_rp_config(id),
    email VARCHAR(255) NOT NULL
);

-- CONFIG KPIS
-- catégorie : visibilité, campagne, avis, ai
CREATE TABLE t_kpi_category (
    id SERIAL PRIMARY KEY,
    name VARCHAR(100) NOT NULL UNIQUE
);

-- unit : score, pourcentage, valeur
CREATE TABLE t_kpi_unit (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- calculation : API, SQL, formule
CREATE TABLE t_kpi_calculation (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);

-- type kpi :  value, recommandation, ranking 
CREATE TABLE t_kpi_type (
    id SERIAL PRIMARY KEY,
    name VARCHAR(50) NOT NULL UNIQUE
);


CREATE TABLE t_kpi (
    id SERIAL PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    description TEXT,
    id_category INTEGER NOT NULL REFERENCES t_kpi_category(id),
    id_unit INTEGER NOT NULL REFERENCES t_kpi_unit(id),
    id_calculation INTEGER NOT NULL REFERENCES t_kpi_calculation(id),
    id_type INTEGER NOT NULL REFERENCES t_kpi_type(id), 
    order INTEGER,
    active BOOLEAN DEFAULT TRUE
);

-- template de kpi
CREATE TABLE t_kpi_temp (
    id SERIAL PRIMARY KEY,
    id_kpi INTEGER NOT NULL REFERENCES t_kpi(id),
    id_rp_type INTEGER NOT NULL REFERENCES t_rp_type(id),
    id_rp_frequency INTEGER REFERENCES t_rp_frequency(id),
    source_definition TEXT NOT NULL
);

-- liaison à rapport de reporting
CREATE TABLE t_rp_kpi_config (
    id SERIAL PRIMARY KEY,
    id_rp_config INTEGER NOT NULL REFERENCES t_rp_config(id),
    id_kpi_temp INTEGER NOT NULL REFERENCES t_kpi_temp(id),
    active BOOLEAN DEFAULT TRUE
);

