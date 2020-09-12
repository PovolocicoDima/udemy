var gameController = {
    scores  :[20, 34, 55, 46, 77],
    avgScore:null,
    players :[
        {name:"Tommy", playerID:987, age:23},
        {name:"Pau", playerID:87, age:33}
    ]
};

var appController = {
    scores: [900, 845, 809, 950],
    avgScore:null,
    avg     :function () {

        var sumOfScores = this.scores.reduce (function (prev, cur, index, array) {
            return prev + cur;
        });

        this.avgScore = sumOfScores / this.scores.length;
    }
};

const test = appController.avg;
console.log(test(appController.scores));
