// Function to calculate all possible combinations
function calculateCombinations() {
  const dieA = [1, 2, 3, 4, 5, 6];
  const dieB = [1, 2, 3, 4, 5, 6];

  let combinations = [];

  for (let i = 0; i < dieA.length; i++) {
    for (let j = 0; j < dieB.length; j++) {
      combinations.push({
        dieA: dieA[i],
        dieB: dieB[j],
        sum: dieA[i] + dieB[j],
      });
    }
  }

  return combinations;
}

// Function to display the distribution of combinations
function displayDistribution(combinations) {
  let distribution = new Array(11).fill(0); // Array to store distribution for sums 2 to 12

  combinations.forEach((combination) => {
    distribution[combination.sum - 2]++;
  });

  return distribution;
}

// Function to calculate the probability of each sum
function calculateProbabilities(distribution, totalCombinations) {
  let probabilities = [];

  distribution.forEach((count) => {
    probabilities.push(count / totalCombinations);
  });

  return probabilities;
}

// Main function to execute the challenge
function executeChallenge() {
  const combinations = calculateCombinations();
  const totalCombinations = combinations.length;
  const distribution = displayDistribution(combinations);
  const probabilities = calculateProbabilities(distribution, totalCombinations);

  // Display results
  displayResults(combinations, distribution, probabilities);
}

// Function to display results in the HTML document
function displayResults(combinations, distribution, probabilities) {
  const resultContainer = document.getElementById("result-container");

  // Display all possible combinations
  resultContainer.innerHTML += "<h3>All Possible Combinations:</h3>";
  combinations.forEach((combination) => {
    resultContainer.innerHTML += `<p>Die A: ${combination.dieA}, Die B: ${combination.dieB}, Sum: ${combination.sum}</p>`;
  });

  // Display distribution
  resultContainer.innerHTML += "<h3>Distribution of Sums:</h3>";
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

// >>>>>>>>>>>>>>>>>>>>>>   Part(B) of the question >>>>>>>>>>>>>>>>>>>>>

// Function to undoom the dice
function undoom_dice(Die_A, Die_B) {
  // Calculate the original probabilities of each sum
  const originalProbabilities = calculateProbabilities2(Die_A, Die_B);
  // console.log(originalProbabilities)
  // Reattach spots to both dice
  const New_Die_A = reattachSpots(Die_A, originalProbabilities);
  const New_Die_B = reattachSpots(Die_B, originalProbabilities);

  // Return the new dice arrays
  return { New_Die_A, New_Die_B };
}

// Function to calculate the probabilities of each sum
function calculateProbabilities2(Die_A, Die_B) {
  const probabilities = new Array(11).fill(0); // Initialize an array to store probabilities

  // Loop through all combinations and count occurrences of each sum
  for (const valueA of Die_A) {
    for (const valueB of Die_B) {
      probabilities[valueA + valueB - 2]++;
    }
  }
  console.log(probabilities);

  // Calculate probabilities by dividing the counts by the total number of combinations
  return probabilities.map((count) => count / (Die_A.length * Die_B.length));
}

// Function to reattach spots to the dice
function reattachSpots(die, originalProbabilities) {
  const newDie = [...die]; // Create a copy of the original die array

  // Sort the die faces in descending order of spots
  newDie.sort((a, b) => b - a);

  // Adjust the spots on each face based on original probabilities
  for (let i = 0; i < newDie.length; i++) {
    const maxSpots = Math.min(4, newDie[i]); // Die_A cannot have more than 4 spots on a face
    const requiredProb = originalProbabilities.reduce(
      (sum, prob, index) => sum + prob * (index + 2 <= newDie[i]),
      0
    );

    // If the required probability is zero, set at least one spot for non-zero probability
    if (requiredProb === 0) {
      newDie[i] = 1;
    } else {
      // Calculate the new number of spots based on the required probability and constraints
      newDie[i] = Math.min(
        maxSpots,
        Math.ceil(requiredProb * (newDie[i] / maxSpots))
      );
    }
  }

  return newDie;
}

// Example usage
const Die_A = [1, 2, 3, 4, 5, 6];
const Die_B = [1, 2, 3, 4, 5, 6];

const { New_Die_A, New_Die_B } = undoom_dice(Die_A, Die_B);

console.log("Original Die_A:", Die_A);
console.log("Original Die_B:", Die_B);
console.log("New Die_A:", New_Die_A);
console.log("New Die_B:", New_Die_B);
