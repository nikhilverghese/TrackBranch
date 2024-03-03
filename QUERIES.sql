SELECT Notes.project_id, ProjectFile.name, Filters.bpm, Notes.note, COUNT(Notes.project_id) as totalNotes
FROM ProjectFile
JOIN Project ON ProjectFile.projectFile_id = Project.projectFile_id
JOIN Filters ON Project.filters_id = Filters.filters_id
JOIN Notes ON Project.project_id = Notes.project_id
GROUP BY Notes.project_id
HAVING totalNotes > 1

