create schema posts collate utf8mb4_general_ci;
create table news
(
    id          int auto_increment,
    title       varchar(255)           not null,
    text text                   not null,
    image       varchar(255)           null,
    createdAt   datetime default NOW() not null,
    constraint news_pk
        primary key (id)
);
create table comments
(
    id      int auto_increment,
    news_id int                                not null,
    author  varchar(100) default ('Anonymous') null,
    message text                               not null,
    constraint comments_pk
        primary key (id),
    constraint comments_news_id_fk
        foreign key (news_id) references news (id)
);
INSERT INTO posts.news (title, text, image, createdAt)
VALUES ('Директор Британского музея подал в отставку после серии краж',
        '"Ситуация, в которой оказался музей, чрезвычайно серьёзна", – говорится в заявлении Хартвига Фишера. Бывший сотрудник подозревается в разграблении запасников и продаже части экспонатов на eBay.',DEFAULT);
INSERT INTO posts.news (title, text, image, createdAt)
    VALUES ('Миссия "Чандраян-3": первые шаги по Луне', 'Луноход индийской миссии "Чандраян-3" спустился по трапу и впервые прошел вблизи южного полюса спутника Земли
       Исторические кадры, иллюстрирующие вступление Индии в космическую гонку.
       Через несколько часов после посадки луноход "Чандраян-3" спустился по трапу и впервые прошел вблизи южного полюса спутника Земли.',  DEFAULT);
INSERT INTO posts.news (title, text, image, createdAt)
    VALUES ('Аншлаг на ЧМ по лёгкой атлетике в Будапеште', 'Судя по телевизионным рейтингам, зрительская аудитория этого ЧМ превысит рекорд, установленный на турнире в Лондоне в 2017 году.
       На 6-й день чемпионата мира по легкой атлетике спортсмены вышли на улицы Будапешта.
       35-километровая дистанция пролегала по одной из самых красивых улиц венгерской столицы — проспекту Андраши, который местные жители называют будапештскими "елисейскими полями". Финишировали ходоки на площади Героев. Золото и у мужчин, и у женщин завоевали испанские атлеты - Альваро Мартин и Мария Перес.', null, DEFAULT);

INSERT INTO posts.comments (news_id, author, message) VALUES (1, DEFAULT, 'Давно пора уходить');
INSERT INTO posts.comments (news_id, author, message) VALUES (2, 'John', 'India GOOOOO!!');
INSERT INTO posts.comments (news_id, author, message) VALUES (3, DEFAULT, 'Если бы!');
INSERT INTO posts.comments (news_id, author, message) VALUES (2, 'Алекс', 'Верю в будущее прекрасное!');
INSERT INTO posts.comments (news_id, author, message) VALUES (1, DEFAULT, '2222');
INSERT INTO posts.comments (news_id, author, message) VALUES (3, 'аа', '33');
INSERT INTO posts.comments (news_id, author, message) VALUES (1, '5464', '56646');