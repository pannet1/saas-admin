create TABLE if not exists "server" (
  id int PRIMARY key,
  name TEXT not NULL,
  info1 text,
  info2 text,
  info3 text,
  info4 text
);
 

create TABLE if not exists "masters" (
  id INT PRIMARY KEY,
  name TEXT NOT NULL,
	server_name INT NOT NULL,
  launch DATE NOT NULL,
  total_clients int,
  total_licenses int,
  status int
);


create TABLE IF NOT EXISTS "lookup" (
  id int primary key,
  key text not null
);



CREATE TABLE IF NOT EXISTS "client_type" (
  id int PRIMARY KEY,
  desc_lookup int,
  min_licenses int, 
  status int
);


create table if not exists "schemes" (
  id int primary key,
  proj_id int,
  description text, 
  dur_lookup text,
  grace_period text,
  subscription text,
  status int
);

create table if not exists "client_info" (
  id int primary key,
  type_id int,
  name text,
  contact text,
  number_1 text,
  number_2 text,
  email_1 text,
  email_2 text,
  add1 text,
  add2 text,
  add3 text,
  city_id int,
  zip_code text,
  gst_no text,
  pan text,
  regn_1 text,
  regn_2 text,
  status int
);

create table if not exists "create_license" (
  id int primary key,
  desciprtion text, 
  created_on text,
  schema_id int,
  valid_till text,
  status int
)

