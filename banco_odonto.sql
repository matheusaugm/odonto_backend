create table migrations
(
    id        int auto_increment
        primary key,
    timestamp bigint       not null,
    name      varchar(255) not null
);

create table usuario
(
    id               int auto_increment
        primary key,
    name             varchar(100)                       not null,
    password         varchar(100)                       not null,
    ra               varchar(100)                       not null,
    email            varchar(100)                       not null,
    image            blob                               null,
    date_create      datetime default CURRENT_TIMESTAMP not null,
    last_date_access datetime default CURRENT_TIMESTAMP not null
);



create table sessao
(
    id                int auto_increment
        primary key,
    usuario_sessao_id int                                not null,
    token             varchar(255)                       not null,
    data_criacao      datetime default CURRENT_TIMESTAMP not null,
    data_expiracao    datetime                           not null,
    data_atualizacao  datetime default CURRENT_TIMESTAMP not null,
    constraint FK_7a0d6632ca13148e5a0009ec216
        foreign key (usuario_sessao_id) references usuario (id)
);

create table menu
(
    id          int auto_increment
        primary key,
    name        varchar(100)                       not null,
    level       int                                not null,
    description varchar(100)                       null,
    image       varchar(255)                       null,
    date_create datetime default CURRENT_TIMESTAMP not null,
    parent_id   int                                null,
    constraint FK_e5e28130fd17f88ab5ee5d3aa4c
        foreign key (parent_id) references menu (id)
);

INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (1, 'Anatomia', 1, 'Categoria Anatomia', 'https://odontoappnewtonbucket.s3.amazonaws.com/anatomia.jpg', '2023-11-22 02:35:32', null);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (2, 'Patologia', 1, 'Categoria Patologia', 'https://odontoappnewtonbucket.s3.amazonaws.com/patologia.jpg', '2023-11-22 02:35:32', null);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (3, 'Alterações Dentárias', 1, 'Categoria Alterações Dentárias', 'https://odontoappnewtonbucket.s3.amazonaws.com/alteracoes_dentarias.jpg', '2023-11-22 02:35:32', null);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (4, 'Dente e Estruturas Anexas', 2, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/dente_e_estruturas_anexas.jpg', '2023-11-22 02:38:24', 1);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (5, 'Maxila', 2, 'Descrição Maxila', 'https://odontoappnewtonbucket.s3.amazonaws.com/maxila.jpg', '2023-11-22 02:38:24', 1);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (6, 'Mandíbula', 2, 'Descrição Mandíbula', 'https://odontoappnewtonbucket.s3.amazonaws.com/mandibula.jpg', '2023-11-22 02:38:24', 1);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (7, 'Panorâmica', 2, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/panoramica.jpg', '2023-11-22 02:38:24', 1);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (8, 'Esmalte', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/esmalte.jpg', '2023-11-22 02:44:29', 4);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (9, 'Dentina', 3, 'Descrição Maxila', 'https://odontoappnewtonbucket.s3.amazonaws.com/dentina.jpg', '2023-11-22 02:44:29', 4);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (10, 'Cemento', 3, 'Descrição Mandíbula', 'https://odontoappnewtonbucket.s3.amazonaws.com/cemento.jpg', '2023-11-22 02:44:29', 4);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (11, 'Câmara pulpar e canal radicular', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/camara_pulpar_e_canal_radicular.jpg', '2023-11-22 02:44:29', 4);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (12, 'Espaço do Ligamento periodontal', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/espaco_do_ligamento_periodontal.jpg', '2023-11-22 02:44:29', 4);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (13, 'Cortical Alveolar', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/cortical_alveolar.jpg', '2023-11-22 02:44:29', 4);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (14, 'Crista Óssea', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/crista_ossea.jpg', '2023-11-22 02:44:29', 4);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (15, 'Sutura Intermaxilar', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/sutura_intermaxilar.jpg', '2023-11-22 02:47:19', 5);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (16, 'Forame Incisivo', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/forame_incisivo.jpg', '2023-11-22 02:47:19', 5);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (17, 'Cavidade Nasal', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/cavidade_nasal.jpg', '2023-11-22 02:47:19', 5);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (18, 'Septo Nasal', 4, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/septo_nasal.jpg', '2023-11-22 02:49:11', 17);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (19, 'Espinha Nasal anterior', 4, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/espinha_nasal_anterior.jpg', '2023-11-22 02:49:11', 17);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (20, 'Ápice do Nariz', 4, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/apice_do_nariz.jpg', '2023-11-22 02:49:11', 17);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (21, 'Narinas', 4, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/narinas.jpg', '2023-11-22 02:49:11', 17);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (22, 'Protuberância Mentual', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/protuberancia_mentual.jpg', '2023-11-22 02:50:28', 6);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (23, 'Fosseta Mentoniana', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/fosseta_mentoniana.jpg', '2023-11-22 02:50:28', 6);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (24, 'Espinhas Mentonianas', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/espinhas_mentonianas.jpg', '2023-11-22 02:50:28', 6);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (25, 'Cárie', 2, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/carie.jpg', '2023-11-22 02:51:44', 2);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (26, 'Doenças do Periapice', 2, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/doencas_do_periapice.jpg', '2023-11-22 02:51:44', 2);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (27, 'Doenças do Periodonto', 2, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/doencas_do_periodonto.jpg', '2023-11-22 02:51:44', 2);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (28, 'Lesão de Cárie Proximal', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/lesao_de_carie_proximal.jpg', '2023-11-22 02:53:18', 25);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (29, 'Lesão de Cárie Oclusal', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/lesao_de_carie_oclusal.jpg', '2023-11-22 02:53:18', 25);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (30, 'Lesão de Cárie de Face Livre', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/lesao_de_carie_de_face_livre.jpg', '2023-11-22 02:53:18', 25);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (31, 'Pericementite', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/pericementite.jpg', '2023-11-22 02:55:16', 26);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (32, 'Abscesso periapical crônico', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/abscesso_periapical_cronico.jpg', '2023-11-22 02:55:16', 26);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (33, 'Granuloma periapical', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/granuloma_periapical.jpg', '2023-11-22 02:55:16', 26);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (34, 'Cálculo dentário', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/calculo_dentario.jpg', '2023-11-22 02:56:02', 27);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (35, 'Perda Óssea Angular', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/perda_ossea_angular.jpg', '2023-11-22 02:56:02', 27);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (36, 'Perda Óssea horizontal', 3, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/perda_ossea_horizontal.jpg', '2023-11-22 02:56:02', 27);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (37, 'Alterações de Número', 2, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/alteracoes_de_numero.jpg', '2023-11-22 02:57:04', 3);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (38, 'Alterações de Tamanho', 2, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/alteracoes_de_tamanho.jpg', '2023-11-22 02:57:04', 3);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (39, 'Alterações de Forma', 2, 'Descrição Panorâmica', 'https://odontoappnewtonbucket.s3.amazonaws.com/alteracoes_de_forma.jpg', '2023-11-22 02:57:04', 3);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (40, 'Agenesia', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/agenesia.jpg', '2023-11-22 02:58:12', 37);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (41, 'Dente Supranumerário', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/dente_supranumerario.jpg', '2023-11-22 02:58:12', 37);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (42, 'Microdontia', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/microdontia.jpg', '2023-11-22 02:58:51', 38);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (43, 'Macrodontia', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/macrodontia.jpg', '2023-11-22 02:58:51', 38);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (44, 'Geminação', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/geminacao.jpg', '2023-11-22 03:00:05', 39);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (45, 'Concrescência', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/concrescencia.jpg', '2023-11-22 03:00:05', 39);
INSERT INTO newton_db_odonto_app.menu (id, name, level, description, image, date_create, parent_id) VALUES (46, 'Fusão', 3, 'Descrição Dente e Estruturas Anexas', 'https://odontoappnewtonbucket.s3.amazonaws.com/fusao.jpg', '2023-11-22 03:00:05', 39);

INSERT INTO newton_db_odonto_app.usuario (id, name, password, ra, email, image, date_create, last_date_access) VALUES (1, 'joao', '$2a$10$jAIoR.NSAXx3P8q9NVrksu3Ig2IAlZwmNbk9bu5o/DHoRsLBLt4z2', '123456', 'joaosilva@exemplo.com', null, '2023-11-16 02:21:50', '2023-11-16 02:21:50');
INSERT INTO newton_db_odonto_app.usuario (id, name, password, ra, email, image, date_create, last_date_access) VALUES (2, 'joao', '$2a$10$cV732zQgiwJG5FNHgqOoHOvs9mRRDrd0UpirKSZA52MSiFxaTFo/y', '1234', 'joao@exemplo.com', null, '2023-11-16 02:23:38', '2023-11-16 02:23:38');
INSERT INTO newton_db_odonto_app.usuario (id, name, password, ra, email, image, date_create, last_date_access) VALUES (3, 'Matheus Augusto', '115902346663329577444', '000000000', 'matheusmeka01@gmail.com', null, '2023-11-16 05:54:00', '2023-11-16 05:54:00');
INSERT INTO newton_db_odonto_app.usuario (id, name, password, ra, email, image, date_create, last_date_access) VALUES (4, 'Matheus Augusto', '$2a$10$7P55DLKgP2emk6vWPRMAqOavizOKFTGyAqzF6zhdNN0qqE2O.7mlC', '000000000', 'matbacuy@gmail.com', null, '2023-11-22 23:19:34', '2023-11-22 23:19:34');
