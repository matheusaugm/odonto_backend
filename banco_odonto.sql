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
    image            blob                               not null,
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

