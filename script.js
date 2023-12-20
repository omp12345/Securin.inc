// took a variable for part B for standard probabilities

// Function to calculate all possible combinations

function combination() {
  const d1 = [1, 2, 3, 4, 5, 6];
  const d2 = [1, 2, 3, 4, 5, 6];

  let combinations = [];

  for (let i = 0; i < d1.length; i++) {
    for (let j = 0; j < d2.length; j++) {
      combinations.push({
        d1: d1[i],
        d2: d2[j],
        sum: d1[i] + d2[j],
      });
    }
  }

  return combinations;
}

// Function to display the distribution of combinations
function displayDistribution(combinations) {
  let distribution = new Array(11).fill(0);

  combinations.forEach((combination) => {
    distribution[combination.sum - 2]++;
  });

  return distribution;
}

// Function to calculate the probability of each sum
function calculateprobabilities1(distribution, total) {
  let probabilities = [];

  distribution.forEach((count) => {
    probabilities.push(count / total);
  });

  return probabilities;
}

// Main function to execute the challenge
function executeChallenge() {
  const combinations = combination();
  const total = combinations.length;
  const distribution = displayDistribution(combinations);
  const probabilities = calculateprobabilities1(distribution, total);

  // Display the execution results
  displayResults(combinations, distribution, probabilities);
}

// Function to display results in the HTML document with declrative opporches
function displayResults(combinations, distribution, probabilities) {
  const resultContainer = document.getElementById("container");

  // Display all possible combinations
  resultContainer.innerHTML += "<h3>All Possible_Combinations:</h3>";
  combinations.forEach((combination) => {
    resultContainer.innerHTML += `<p>Die A: ${combination.d1}, Die B: ${combination.d2}, Sum: ${combination.sum}</p>`;
  });

  // Display distribution
  resultContainer.innerHTML += "<h3>Distribution  of Sums:</h3>";
  for (let i = 0; i < distribution.length; i++) {
    resultContainer.innerHTML += `<p>Sum ${i + 2}: ${
      distribution[i]
    } occurrences</p>`;
  }

  // Display probabilities
  resultContainer.innerHTML += "<h3>Probabilities of Sums:</h3>";
  for (let i = 0; i < probabilities.length; i++) {
    resultContainer.innerHTML += `<p>P(Sum ${i + 2}) = ${probabilities[
      i
    ].toFixed(2)}</p>`;
  }
}

executeChallenge();

// <<<<<<<<part b solution>>>>>>>>

let standard_prob = [
  1 / 36,
  2 / 36,
  3 / 36,
  4 / 36,
  5 / 36,
  6 / 36,
  5 / 36,
  4 / 36,
  3 / 36,
  2 / 36,
  1 / 36,
];

// generate a random number between 1 and 4 (include)
function newDia_A() {
  return Math.floor(Math.random() * 4) + 1;
}

//generate a random number between 1 and 6
function new_dia_B() {
  return Math.floor(Math.random() * 6) + 1;
}

//create Die A with random values
function createdieA() {
  let die_a = [];
  for (let i = 0; i < 6; i++) {
    die_a.push(newDia_A());
  }
  return die_a;
}

//create Die B with random values
function createdieB() {
  let die_b = [];
  for (let i = 0; i < 6; i++) {
    die_b.push(new_dia_B());
  }
  return die_b;
}

// Function to calculate probabilities for all possible sums
function calculateprob(Die_A, Die_B) {
  const new_prob = new Array(2 * Die_A.length).fill(0);
  let arr = [];

  for (let i = 0; i < Die_A.length; i++) {
    for (let j = 0; j < Die_B.length; j++) {
      new_prob[Die_A[i] + Die_B[j] - 2]++;
    }
  }

  const total = Die_A.length * Die_B.length;
  for (let k = 0; k < new_prob.length; k++) {
    new_prob[k] /= total;
    arr.push((new_prob[k] /= total));
  }

  return arr;
}

// Function to compare probabilities with standard probabilities for Part B
function compareProb(probabilities, standardProbabilities) {
  for (let i = 0; i < probabilities.length; i++) {
    const min = 0.0001;
    if (Math.abs(probabilities[i] - standardProbabilities[i]) >= min) {
      return true;
    }
  }
  return false;
}

// new dice sum prob is matching with  standard probabilities
function findmatch(standProb) {
  console.log(standProb);
  let i = 0;
  while (i < 1000) {
    let New_Die_A = createdieA();
    let New_Die_B = createdieB();
    let probabilities = calculateprob(New_Die_A, New_Die_B);
    console.log(probabilities);
    let value = compareProb(probabilities, standProb);
    console.log(value);
    if (value) {
      return { New_Die_A, New_Die_B };
    } else {
      console.log("not validate");
    }

    i++;
  }
}

let result = findmatch(standard_prob);

if (result) {
  console.log("new_dice-A", result.New_Die_A);
  console.log("new_dice-B:", result.New_Die_B);
}
