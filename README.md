What I learned:

1. insertAdjacentHTML have higher performance and safer than innerHTML.
2. createElement have higher performance than innerHTMl and insertAdjacentHTML. This is the safest option if creating inputs.
3. The `<dialog>` tag is excellent for accessibility. It is considered best practice for creating modal dialogs, alerts, and popups. It also comes with many perks that are already implemented in it.

Problems I faced:

1. The menu was overflowing when I used width for logic.
   Solution: Instead of using width, I used the "displayed: none" method in CSS to fix this problem.

2. I have trouble finding a solution for active button.
   Solution: I console log every step to see where goes wrong. I fixed the issue by separating the first render of the icons to determine which one is first active and create another active state inside the re-render.

3. I had trouble creating the remove icon function.
   Solution: I console.logged on let id = 0 to check if it was valid or null whenever it's being passed down to a new function. I made sure the id was passed down successfully to every function.

4. I had trouble with the confirmation modal. It kept deleting the entire carousel icons and the modal icons.

Analyze: I console.log the icon's id being passed to the removeIconCategory file and realized it was populating the entire icon's id which caused the entire icons to be deleted on click.

Solution: I added unique ids to each removeBtn to make sure it only delete one icon at a time.

5. I had trouble making the side bar go all the way to the bottom.

Analyze: I used the dev tool to figure out what I could do to fix this. This allowed me to experiment the CSS without breaking the site permenantly.

solution: Instead of display flex, I switched the site wrapper to grid template to fix this problem.
