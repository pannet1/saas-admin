create TABLE if not exists "server" (
  id INTEGER PRIMARY key AUTOINCREMENT,
  name TEXT not NULL,
  info1 text,
  info2 text,
  info3 text,
  info4 text
);
 

create TABLE if not exists "masters" (
  id INTEGER PRIMARY key AUTOINCREMENT,
  name TEXT NOT NULL,
	server_name INTEGER NOT NULL,
  launch DATE NOT NULL,
  total_clients INTEGER,
  total_licenses INTEGER,
  status INTEGER
);


create TABLE IF NOT EXISTS "lookup" (
  id INTEGER PRIMARY key AUTOINCREMENT,
  key text not null
);



CREATE TABLE IF NOT EXISTS "client_type" (
  id INTEGER PRIMARY key AUTOINCREMENT,
  desc_lookup INTEGER,
  min_licenses INTEGER, 
  status INTEGER
);


create table if not exists "schemes" (
  id INTEGER PRIMARY key AUTOINCREMENT,
  proj_id INTEGER,
  description text, 
  dur_lookup text,
  grace_period text,
  subscription text,
  status INTEGER
);

create table if not exists "client_info" (
  id INTEGER PRIMARY key AUTOINCREMENT,
  type_id INTEGER,
  name text,
  contact text,
  number_1 text,
  number_2 text,
  email_1 text,
  email_2 text,
  add1 text,
  add2 text,
  add3 text,
  city_id INTEGER,
  zip_code text,
  gst_no text,
  pan text,
  regn_1 text,
  regn_2 text,
  status INTEGER
);

create table if not exists "create_license" (
  id INTEGER PRIMARY key AUTOINCREMENT,
  desciprtion text, 
  created_on text,
  schema_id INTEGER,
  valid_till text,
  status INTEGER
)

