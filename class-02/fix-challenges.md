# Fixing Code Challenges

Going through these steps once will mean you'll get the right code challenges for the rest of this course.

Please read these instructions carefully, as you will not need to run every command listed.

On the terminal:

1. `cd` into your `data-structures-and-algorithms` repo, at the root of the repo. (If you run `ls`, you should see `c-sharp`, `code-challenges`, `coverage`, `java` etc.)
1. Run `git checkout main` to ensure that you are on the main branch.
1. Run `sed -i 's|/code-301-guide/|/code-301-guide-react/|' ./code-challenges/bin/get-challenge.sh` to make it so all challenges you get in the future come from the React version of the repo.
1. A-C-P (yes, on the main branch)
1. IF you had already started working on Code Challenge 2:
    1. Run `git checkout map` to switch back to that branch.
    1. Run `git merge main -m "merge branch main"` to add those changes into this new branch.
    1. Run `git mv code-challenges/challenges-07.test.js code-challenges/challenges-02.test.js` to rename your file.
    1. Continue working in the `challenges-02.test.js` file. Challenge 1, about replacing zeroes, is not required.
1. IF you had not already started working on Code Challenge 2:
    1. Run `git checkout -b map` to switch to a new branch for this code challenge.
    1. Run `npm run get-challenge 02` to fetch the assignment.
    1. Work in `challenges-02.test.js`, completing all non-stretch challenges.
1. For all future code challenges, the code challenge number in the terminal will match the assignment. So, when you start working on code challenge 3, you'll run (in the future, DO NOT run this right now) `npm run get-challenge 03` to fetch the correct code challenge 3.
