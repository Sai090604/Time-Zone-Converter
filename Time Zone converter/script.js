let isPM = false;

document.getElementById("am-button").addEventListener("click", () => setAMPM(false));
document.getElementById("pm-button").addEventListener("click", () => setAMPM(true));

function setAMPM(pm) {
  isPM = pm;
  document.getElementById("am-button").classList.toggle("active", !isPM);
  document.getElementById("pm-button").classList.toggle("active", isPM);
}

function convertTime() {
  const timeInput = document.getElementById("timeInput").value;
  const fromOffset = parseFloat(document.getElementById("fromCountrySelect").value);
  const toOffset = parseFloat(document.getElementById("toCountrySelect").value);

  if (!timeInput) {
    document.getElementById("output").textContent = "Please enter a valid time.";
    return;
  }

  let [hours, minutes] = timeInput.split(":").map(Number);

  if (isPM && hours < 12) {
    hours += 12;
  } else if (!isPM && hours === 12) {
    hours = 0;
  }

  const totalMinutes = hours * 60 + minutes + (toOffset - fromOffset) * 60;
  const convertedHours = Math.floor((totalMinutes / 60) + 24) % 24;
  const convertedMinutes = (totalMinutes % 60 + 60) % 60;

  const formattedHours = String(convertedHours).padStart(2, '0');
  const formattedMinutes = String(convertedMinutes).padStart(2, '0');

  document.getElementById("output").textContent = `Converted Time: ${formattedHours}:${formattedMinutes}`;
}
