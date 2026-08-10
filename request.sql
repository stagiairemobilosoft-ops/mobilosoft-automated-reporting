    SELECT * FROM t_rp_config;
    SELECT * FROM t_rp_schedule;
    SELECT * FROM t_rp_target;
    SELECT * FROM t_rp_recipient;

SELECT
    c.id AS id_rp_config,
    s.id AS id_rp_schedule,
    t.id AS id_rp_target,
    c.name AS nom,
     COALESCE(location.id, site.id) AS iddestination,
    COALESCE(location.name, site.name) AS destination,
    STRING_AGG(r.email, ', ') AS destinataires
FROM t_rp_config c
JOIN t_rp_schedule s ON s.id_rp_config = c.id
JOIN t_rp_frequency f ON f.id = s.id_frequency
JOIN t_rp_target t ON t.id_rp_schedule = s.id
LEFT JOIN t_location location ON location.id = t.id_location
LEFT JOIN t_site site ON site.id = t.id_site
JOIN t_rp_recipient r ON r.id_rp_target = t.id
WHERE c.id = 1
GROUP BY c.id, s.id, t.id, c.name, location.name, site.name,location.id, site.id
ORDER BY t.id;

SELECT
    c.id AS id_config,
    c.name AS nom,
    s.send_mode AS mode_envoi,
    f.name AS frequence,
    s.day AS jour,
    s.hour AS heure,
    s.report_start,
    s.report_end
FROM t_rp_config c
JOIN t_rp_schedule s ON s.id_rp_config = c.id
JOIN t_rp_frequency f ON f.id = s.id_frequency
JOIN t_rp_target t ON t.id_rp_schedule = s.id
WHERE c.id = 2;