const students = [{
		name: 'John Smith',
		marks: [10, 8, 6, 9, 8, 7]
	},
	{
		name: 'John Doe',
		marks: [9, 8, 7, 6, 7]
	},
	{
		name: 'Thomas Anderson',
		marks: [6, 7, 10, 8]
	},
	{
		name: 'Jean-Baptiste Emanuel Zorg',
		marks: [10, 9, 8, 9]
	}
];

function getEachStudentAverageScore() {
	for (let i = 0; i < students.length; i++) {
		const scoreTotalStudent = students[i].marks.reduce((sum, current) => sum + current);
		const scoreAverageStudent = `${scoreTotalStudent / students[i].marks.length} - average score of ${students[i].name} `;
		console.log(scoreAverageStudent);
	}
}
let scoreList = [];

function getScoreList() {
	for (let i = 0; i < students.length; i++) {
		scoreList = scoreList.concat(students[i].marks);
	}
	return scoreList;
}

function getAverageTotal(arr) {
	const result = arr.reduce((sum, current) => sum + current, 0);
	const averageTotal = result / arr.length;
	console.log(`${averageTotal} is anaverage students total score.`);
}

function init() {
	getEachStudentAverageScore()
	const scoreListArray = getScoreList();
	getAverageTotal(scoreListArray);
}
init();