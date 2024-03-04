CREATE TABLE "Filters" (
	"filters_id"	INTEGER,
	"bpm"	INTEGER NOT NULL,
	"key"	TEXT NOT NULL,
	"lastModified"	TEXT NOT NULL,
	"genre_id"	INTEGER,
	PRIMARY KEY("filters_id"),
	FOREIGN KEY("genre_id") REFERENCES "Genre"("genre_id")
)
CREATE TABLE "ProjectFile" (
	"projectFile_id"	INTEGER,
	"name"	TEXT NOT NULL UNIQUE,
	"location"	TEXT NOT NULL UNIQUE,
	"size"	INTEGER NOT NULL,
	"date_created"	TEXT NOT NULL,
	"completion"	TEXT,
	PRIMARY KEY("projectFile_id")
)

CREATE TABLE "UserInterface" (
	"userInterface_id"	INTEGER,
	PRIMARY KEY("userInterface_id")
)
CREATE TABLE "CustomAttributes" (
	"customAtt_id"	INTEGER,
	"customAtt"	TEXT NOT NULL,
	"project_id"	INTEGER,
	PRIMARY KEY("customAtt_id"),
	FOREIGN KEY("project_id") REFERENCES "Project"("project_id")
)
CREATE TABLE "Project" (
	"project_id"	INTEGER,
	"projectFile_id"	INTEGER,
	"filters_id"	INTEGER,
	"userInterface_id"	INTEGER,
	PRIMARY KEY("project_id"),
	FOREIGN KEY("filters_id") REFERENCES "Filters"("filters_id"),
	FOREIGN KEY("projectFile_id") REFERENCES "ProjectFile"("projectFile_id"),
	FOREIGN KEY("userInterface_id") REFERENCES "UserInterface"("userInterface_id")
)
CREATE TABLE "Exports" (
	"exports_id"	INTEGER,
	"name"	TEXT NOT NULL UNIQUE,
	"exportPath"	TEXT NOT NULL UNIQUE,
	"dateOfCreation"	INTEGER NOT NULL,
	"project_id"	INTEGER,
	PRIMARY KEY("exports_id"),
	FOREIGN KEY("project_id") REFERENCES "Project"("project_id")
)
CREATE TABLE "Notes" (
	"notes_id"	INTEGER,
	"note"	TEXT NOT NULL,
	"dateOfCreation"	TEXT NOT NULL,
	"project_id"	INTEGER,
	PRIMARY KEY("notes_id"),
	FOREIGN KEY("project_id") REFERENCES "Project"("project_id")
)
CREATE TABLE "Genre" (
	"genre_id"	INTEGER,
	"genre_name"	TEXT,
	PRIMARY KEY("genre_id")
)