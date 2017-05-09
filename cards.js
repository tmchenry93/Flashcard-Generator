function BasicCard (front, back){
	this.front = front;
	this.back = back;
};

function ClozeCard (text, cloze){
	this.cloze = cloze;
	this.partial = partial;
	this.fullText = fullText;
	this.wrongAnswer = function wrongAnswer(){
		if (cloze != answer){
			console.log("This answer is incorrect");
		};
	};
};

module.exports = BasicCard;
module.exports = ClozeCard;