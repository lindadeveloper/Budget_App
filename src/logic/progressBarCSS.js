export function progressBarCSS(progressBarId, progress) {
  //if their expense is over 100, this will help users understand that they went over their budget
  if (progress > 100) {
    progressBarId.classList.add("progress-bar-maxed");
  } else {
    progressBarId.classList.remove("progress-bar-maxed");
  }

  //if their expense is over 60, this will caution users to make careful judgements
  if (progress > 60) {
    progressBarId.classList.add("progress-bar-caution");
  } else {
    progressBarId.classList.remove("progress-bar-caution");
  }
}
