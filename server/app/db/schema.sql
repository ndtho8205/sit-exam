CREATE DATABASE "sit-exam"
    WITH
    OWNER = postgres
    ENCODING = 'UTF8'
    LC_COLLATE = 'en_US.utf8'
    LC_CTYPE = 'en_US.utf8'
    TABLESPACE = pg_default
    CONNECTION LIMIT = -1;

-- Table: public.exam

-- DROP TABLE public.exam;

CREATE TABLE public.exam
(
    id integer NOT NULL DEFAULT nextval('exam_id_seq'::regclass),
    name character varying(50) COLLATE pg_catalog."default" NOT NULL,
    gender character varying(10) COLLATE pg_catalog."default" NOT NULL,
    country character varying(50) COLLATE pg_catalog."default" NOT NULL,
    email character varying(50) COLLATE pg_catalog."default" NOT NULL,
    "time" character varying(100) COLLATE pg_catalog."default" NOT NULL,
    exam1_answers character varying(500) COLLATE pg_catalog."default",
    exam1_score smallint,
    exam2_answers character varying(500) COLLATE pg_catalog."default",
    exam2_score smallint,
    exam3_answers character varying(500) COLLATE pg_catalog."default",
    exam3_score smallint,
    exam1_rating smallint,
    exam2_rating smallint,
    exam3_rating smallint,
    CONSTRAINT exam_pkey PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;

ALTER TABLE public.exam
    OWNER to postgres;

