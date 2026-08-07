INSERT INTO t_site (name, language) VALUES  ('Delhaize Belgique', 'fr');

INSERT INTO t_location  (id_site, name, description, status, language) VALUES
(1, 'Delhaize Bruxelles Centre', 'Magasin Delhaize Bruxelles Centre', 'ACTIVE', 'fr'),
(1, 'Delhaize Bruxelles Louise', 'Magasin Delhaize Louise', 'ACTIVE', 'fr'),
(1, 'Delhaize Bruxelles Woluwe', 'Magasin Delhaize Woluwe', 'ACTIVE', 'fr'),
(1, 'Delhaize Anvers Centre', 'Magasin Delhaize Antwerpen Centrum', 'ACTIVE', 'nl'),
(1, 'Delhaize Anvers Zuid', 'Magasin Delhaize Antwerpen Zuid', 'ACTIVE', 'nl'),
(1, 'Delhaize Gand Centre', 'Magasin Delhaize Gent Centrum', 'ACTIVE', 'nl'),
(1, 'Delhaize Gand Zuid', 'Magasin Delhaize Gent Zuid', 'ACTIVE', 'nl'),
(1, 'Delhaize Liège Centre', 'Magasin Delhaize Liège Centre', 'ACTIVE', 'fr'),
(1, 'Delhaize Liège Médiacité', 'Magasin Delhaize Médiacité', 'ACTIVE', 'fr'),
(1, 'Delhaize Charleroi Ville', 'Magasin Delhaize Charleroi', 'ACTIVE', 'fr'),
(1, 'Delhaize Namur Centre', 'Magasin Delhaize Namur', 'ACTIVE', 'fr'),
(1, 'Delhaize Mons Centre', 'Magasin Delhaize Mons', 'ACTIVE', 'fr'),
(1, 'Delhaize Leuven Centrum', 'Magasin Delhaize Leuven', 'ACTIVE', 'nl'),
(1, 'Delhaize Brugge Centrum', 'Magasin Delhaize Brugge', 'ACTIVE', 'nl'),
(1, 'Delhaize Hasselt Centrum', 'Magasin Delhaize Hasselt', 'ACTIVE', 'nl'),
(1, 'Delhaize Mechelen Centrum', 'Magasin Delhaize Mechelen', 'ACTIVE', 'nl'),
(1, 'Delhaize Aalst Centrum', 'Magasin Delhaize Aalst', 'ACTIVE', 'nl'),
(1, 'Delhaize Kortrijk Centrum', 'Magasin Delhaize Kortrijk', 'ACTIVE', 'nl'),
(1, 'Delhaize Mons Grand Prés', 'Magasin Delhaize Grand Prés', 'ACTIVE', 'fr'),
(1, 'Delhaize Waterloo', 'Magasin Delhaize Waterloo', 'ACTIVE', 'fr'),
(1, 'Delhaize Wavre', 'Magasin Delhaize Wavre', 'ACTIVE', 'fr'),
(1, 'Delhaize Nivelles', 'Magasin Delhaize Nivelles', 'ACTIVE', 'fr'),
(1, 'Delhaize Tournai', 'Magasin Delhaize Tournai', 'ACTIVE', 'fr'),
(1, 'Delhaize Eupen', 'Magasin Delhaize Eupen', 'ACTIVE', 'nl'),
(1, 'Delhaize Genk', 'Magasin Delhaize Genk', 'ACTIVE', 'nl'),
(1, 'Delhaize Sint-Niklaas', 'Magasin Delhaize Sint-Niklaas', 'ACTIVE', 'nl'),
(1, 'Delhaize Roeselare', 'Magasin Delhaize Roeselare', 'ACTIVE', 'nl'),
(1, 'Delhaize Turnhout', 'Magasin Delhaize Turnhout', 'ACTIVE', 'nl'),
(1, 'Delhaize Lier', 'Magasin Delhaize Lier', 'ACTIVE', 'nl'),
(1, 'Delhaize Vilvoorde', 'Magasin Delhaize Vilvoorde', 'ACTIVE', 'nl'),
(1, 'Delhaize Jette', 'Magasin Delhaize Jette', 'ACTIVE', 'fr'),
(1, 'Delhaize Ixelles', 'Magasin Delhaize Ixelles', 'ACTIVE', 'fr'),
(1, 'Delhaize Uccle', 'Magasin Delhaize Uccle', 'ACTIVE', 'fr'),
(1, 'Delhaize Schaerbeek', 'Magasin Delhaize Schaerbeek', 'ACTIVE', 'fr'),
(1, 'Delhaize Etterbeek', 'Magasin Delhaize Etterbeek', 'ACTIVE', 'fr'),
(1, 'Delhaize Saint-Gilles', 'Magasin Delhaize Saint-Gilles', 'ACTIVE', 'fr'),
(1, 'Delhaize Forest', 'Magasin Delhaize Forest', 'ACTIVE', 'fr'),
(1, 'Delhaize Anderlecht', 'Magasin Delhaize Anderlecht', 'ACTIVE', 'fr'),
(1, 'Delhaize La Louvière', 'Magasin Delhaize La Louvière', 'ACTIVE', 'fr'),
(1, 'Delhaize Mouscron', 'Magasin Delhaize Mouscron', 'ACTIVE', 'fr'),
(1, 'Delhaize Verviers', 'Magasin Delhaize Verviers', 'ACTIVE', 'fr'),
(1, 'Delhaize Seraing', 'Magasin Delhaize Seraing', 'ACTIVE', 'fr'),
(1, 'Delhaize Rixensart', 'Magasin Delhaize Rixensart', 'ACTIVE', 'fr'),
(1, 'Delhaize Braine-l’Alleud', 'Magasin Delhaize Braine-l’Alleud', 'ACTIVE', 'fr'),
(1, 'Delhaize Zaventem', 'Magasin Delhaize Zaventem', 'ACTIVE', 'nl'),
(1, 'Delhaize Waterloo Nord', 'Magasin Delhaize Waterloo Nord', 'ACTIVE', 'fr'),
(1, 'Delhaize Dilbeek', 'Magasin Delhaize Dilbeek', 'ACTIVE', 'nl'),
(1, 'Delhaize Dendermonde', 'Magasin Delhaize Dendermonde', 'ACTIVE', 'nl'),
(1, 'Delhaize Waregem', 'Magasin Delhaize Waregem', 'ACTIVE', 'nl');

INSERT INTO t_rp_type (name) VALUES
('HQ'),
('LOCATION');

INSERT INTO t_rp_frequency (name)
VALUES
('Hebdomadaire'),
('mensuel'),
('trimestriel');

INSERT INTO t_kpi_category (name)
VALUES
('Reporting Visibilité'),
('Reporting Campagne'),
('Reporting Avis'),
('Analyse sentimentale');

INSERT INTO t_kpi_unit (name)
VALUES
('Score'),
('Pourcentage'),
('Valeur');

INSERT INTO t_kpi_calculation (name)
VALUES
('API'),
('SQL'),
('Formule');

INSERT INTO t_kpi_type (name)
VALUES
('Valeur'),
('Recommandation'),
('Classement');