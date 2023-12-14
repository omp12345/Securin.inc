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
function calculateprobabilities1(distribution, totalCombinations) {
  let probabilities = [];

  distribution.forEach((count) => {
    probabilities.push(count / totalCombinations);
  });

  return probabilities;
}

// Main function to execute the challenge
function executeChallenge() {
  const combinations = combination();
  const totalCombinations = combinations.length;
  const distribution = displayDistribution(combinations);
  const probabilities = calculateprobabilities1(
    distribution,
    totalCombinations
  );

  // Display the execution results
  displayResults(combinations, distribution, probabilities);
}

// Function to display results in the HTML document with decrative opporches
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

// part b solution
function generateDieA() {
  // Create Die A with numbers ≤ 4, including repetitions
  const dieA = [1, 2, 3, 4, 1, 2, 3, 4, 1, 2, 3, 4];
  return dieA;
}

function generateDieB() {
  // Create Die B with numbers, some > 6
  const dieB = [2, 4, 6, 8, 10, 12];
  return dieB;
}

function isStandardDiceProbability(sum) {
  // Standard dice probabilities for sums 2 to 12
  const standardProbabilities = [
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

  // Check if the calculated sum matches standard dice probabilities
  return (
    Math.abs(
      calculateProbabilities(generateDieA(), generateDieB())[sum - 2] -
        standardProbabilities[sum - 2]
    ) < 0.0001
  );
}

function findValidCombinations() {
  const dieA = generateDieA();
  const dieB = generateDieB();
  const validCombinations = [];

  for (const valueA of dieA) {
    for (const valueB of dieB) {
      const sum = valueA + valueB;

      if (isStandardDiceProbability(sum)) {
        validCombinations.push({ dieA: valueA, dieB: valueB, sum });
      }
    }
  }

  return validCombinations;
}

// Calculate the probabilities of each sum for a given combination of Die A and Die B
function calculateProbabilities(dieA, dieB) {
  let probabilities = new Array(11).fill(0);

  for (const valueA of dieA) {
    for (const valueB of dieB) {
      probabilities[valueA + valueB - 2]++;
    }
  }

  return probabilities.map((count) => count / (dieA.length * dieB.length));
}

const validCombinations = findValidCombinations();
console.log("Valid Combinations:", validCombinations);
