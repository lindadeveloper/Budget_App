What I learned:
insertAdjacentHTML have higher performance than innerHTML and safer.
createElement have higher performance than innerHTMl and insertAdjacentHTML. This is the safest option if creating inputs.

Problems I faced:
The menu was overflowing when I used width for logic.
Solution: Instead of using width, I used the "displayed: none" method in CSS to fix this problem.

I have trouble finding a solution for active button.
Solution: I console log every step to see where goes wrong. I fixed the issue by separating the first render of the icons to determine which one is first active and create another active state inside the re-render.
