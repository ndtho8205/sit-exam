CREATE TABLE public.exam
(
    id serial NOT NULL,
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

