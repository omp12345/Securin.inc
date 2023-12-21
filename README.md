# Securin.inc

<p>this is the problem statement
The below problems must be solved & implemented in Python/Java/Ruby/C++/Go
You are given two six-sided dice, Die A and Die B, each with faces numbered from 1 to
6.
You can only roll both the dice together & your turn is guided by the obtained sum.
Example: Die A = 6, Die B = 3. Sum = 6 + 3 = 9

You may represent Dice as an Array or Array-like structure.
Die A = [1, 2, 3, 4, 5, 6] where the indices represent the 6 faces of the die & the value on
each face </p>

<p> part (A)
1. How many total combinations are possible? Show the math along with the code!
2. Calculate and display the distribution of all possible combinations that can be
obtained when rolling both Die A and Die B together. Show the math along with
the code!
Hint: A 6 x 6 Matrix.
3. Calculate the Probability of all Possible Sums occurring among the number of
combinations from (2).
Example: P(Sum = 2) = 1/X as there is only one combination possible to obtain
Sum = 2. Die A = Die B = 1. </p>
output of  part(A) 
<img src="https://github.com/omp12345/Securin.inc/assets/112754710/30e0189a-0f1c-49ab-b36b-9790ad3472a8"/>
<img src="https://github.com/omp12345/Securin.inc/assets/112754710/7b150f8d-0b3a-4ee7-b37a-19151e7f4fc4"/>
<img src="https://github.com/omp12345/Securin.inc/assets/112754710/30e0189a-0f1c-49ab-b36b-9790ad3472a"/>
<img src="https://github.com/omp12345/Securin.inc/assets/112754710/30e0189a-0f1c-49ab-b36b-9790ad3472a8" />
<img src="https://github.com/omp12345/Securin.inc/assets/112754710/3f366e4d-04b0-4792-acbc-5a6cd6e286a5"/>
<img src="https://github.com/omp12345/Securin.inc/assets/112754710/1f5ec585-5ad1-4794-ae72-28bed30d4e6d"/>



 <p>Now comes the real challenge. You were happily spending a lazy afternoon playing
your board game with your dice when suddenly the mischievous Norse God Loki ( You
love Thor too much & Loki didn’t like that much ) appeared.
Loki dooms your dice for his fun removing all the “Spots” off the dice.

No problem! You have the tools to re-attach the “Spots” back on the Dice.
However, Loki has doomed your dice with the following conditions:
● Die A cannot have more than 4 Spots on a face.
● Die A may have multiple faces with the same number of spots.
● Die B can have as many spots on a face as necessary i.e. even more than 6.
But in order to play your game, the probability of obtaining the Sums must remain the
same!
So if you could only roll P(Sum = 2) = 1/X, the new dice must have the spots reattached
such that those probabilities are not changed.
Input:
● Die_A = [1, 2, 3, 4, 5, 6] & Die B = Die_A = [1, 2, 3, 4, 5, 6]
Output:
● A Transform Function undoom_dice that takes (Die_A, Die_B) as input &
outputs New_Die_A = [?, ?, ?, ?, ?, ?],New_Die_B = [?, ?,
?, ?, ?, ?] where,
● No New_Die A[x] > 4</p>

<p>output of Part(B)</p>
<img src="https://github.com/omp12345/Securin.inc/assets/112754710/2d69d832-4083-4ef2-a2f7-98be3461d0c5"/>

<img src="https://github.com/omp12345/Securin.inc/assets/112754710/0dee1366-9fbf-4f0f-9dee-4073ee5ad4ad"/>


<img src="https://github.com/omp12345/Securin.inc/assets/112754710/969e560c-157b-41aa-b5b6-e045375d7954"/>


<img src="https://github.com/omp12345/Securin.inc/assets/112754710/1fbf1793-2848-47d0-885a-80ef66bf51c3"/>


<img src="https://github.com/omp12345/Securin.inc/assets/112754710/ce3eedce-8276-4222-89a4-62c5d4db9aeb"/>

<img src="https://github.com/omp12345/Securin.inc/assets/112754710/1b6c780c-c230-4501-85d0-c3652cec0b21"/>


<p>and so on when we rolled with multiple times we will get the new_diaA and New_diab</p>












