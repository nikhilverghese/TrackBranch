--Selects Projects that have more than one note
SELECT Notes.project_id, ProjectFile.name, Filters.bpm, Notes.note, COUNT(Notes.project_id) as totalNotes
FROM ProjectFile
JOIN Project ON ProjectFile.projectFile_id = Project.projectFile_id
JOIN Filters ON Project.filters_id = Filters.filters_id
JOIN Notes ON Project.project_id = Notes.project_id
GROUP BY Notes.project_id
HAVING totalNotes > 1

--Subquery to get the total size of all the projectfiles that contain the phrase "vi" in it
SELECT SUM(size)
FROM (
	SELECT *
	FROM ProjectFile
	WHERE name LIKE "%vi%"
)

--Using Haivng clause, gets the genres that have more than 70 tracks
SELECT genre.genre_name AS genres, COUNT (Filters.genre_id) as total_projects
FROM ProjectFile
JOIN Project ON ProjectFile.projectFile_id = Project.projectFile_id
JOIN Filters ON Project.filters_id = Filters.filters_id
JOIN Genre ON Filters.genre_id = Genre.genre_id
GROUP BY genres
HAVING  total_projects > 70

--Query that selects projects that have more than 1 export and also starts with the letter n or contains the phrase so.
SELECT Project.project_id as ID, ProjectFile.name, Count(Exports.project_id) as Total_Exports
FROM ProjectFile
JOIN Project ON ProjectFile.projectFile_id = Project.projectFile_id
JOIN Exports ON Exports.project_id = Project.project_id
GROUP BY ID
HAVING (Total_Exports > 1 AND ProjectFile.name LIKE "n%") OR ProjectFile.name LIKE "%so%"

--Gets the average BPM of each genre using partition by
SELECT Genre.genre_name as genres,  AVG(Filters.bpm) OVER (PARTITION BY Genre.genre_id) AS avg_bpm
FROM Filters
JOIN Genre ON Filters.genre_id = Genre.genre_id
GROUP BY genres;