// Mock data for demonstration purposes
const vehicles = [
  { id: 1, friendlyName: "Vehicle A" },
  { id: 2, friendlyName: "Vehicle B" },
  // Add more vehicles as needed
];

const alerts = [
  { id: 1, type: "Speeding", vehicleId: 1, driver: "John Doe", vehicleFriendlyName: "Vehicle A", timestamp: "2023-12-14T12:34:56Z", markedAsFalse: false },
  { id: 2, type: "Lane Departure", vehicleId: 2, driver: "Jane Smith", vehicleFriendlyName: "Vehicle B", timestamp: "2023-12-14T13:45:00Z", markedAsFalse: true },
  // Add more alerts as needed
];

// Function to fetch vehicles and populate the dropdown
function fetchVehicles() {
  const vehicleDropdown = document.getElementById("vehicleSearch");

  vehicles.forEach((vehicle) => {
    const option = document.createElement("option");
    option.value = vehicle.id;
    option.text = vehicle.friendlyName;
    vehicleDropdown.add(option);
  });
}

// Function to render alerts in the dashboard
function renderAlerts(filteredAlerts) {
  const alertContainer = document.getElementById("alertContainer");
  alertContainer.innerHTML = "";

  filteredAlerts.forEach((alert) => {
    const alertBox = document.createElement("div");
    alertBox.classList.add("alert-box");

    const leftSide = document.createElement("div");
    leftSide.classList.add("alert-box-left");
    leftSide.innerHTML = `
      <strong class="alert-type">${alert.type}</strong>
      <p class="alert-time">&bull; ${formatTimestamp(alert.timestamp)}</p>
      <p class="driver-info">Driver: ${alert.driver} / ${alert.vehicleFriendlyName}</p>
    `;

    const rightSide = document.createElement("div");
    rightSide.classList.add("alert-box-right");
    const markAsFalseButton = document.createElement("button");
    markAsFalseButton.innerHTML = '<div class="bell-icon"></div> Mark As False Alarm';
    markAsFalseButton.onclick = () => markAsFalseAlarm(alert.id);
    markAsFalseButton.disabled = alert.markedAsFalse;
    rightSide.appendChild(markAsFalseButton);

    alertBox.appendChild(leftSide);
    alertBox.appendChild(rightSide);
    alertContainer.appendChild(alertBox);
  });
}

// Function to format UTC timestamp to the user's timezone
function formatTimestamp(timestamp) {
  const date = new Date(timestamp);
  return date.toLocaleString();
}

// Function to search alerts based on user input
function searchAlerts() {
  const freeText = document.getElementById("freeTextSearch").value.toLowerCase();
  const filteredAlerts = alerts.filter((alert) => {
    const textMatch = alert.type.toLowerCase().includes(freeText) ||
                      alert.driver.toLowerCase().includes(freeText);
    return textMatch;
  });

  renderAlerts(filteredAlerts);
}

// Function to search alerts by vehicle
function searchByVehicle() {
  const selectedVehicleId = document.getElementById("vehicleSearch").value;
  const filteredAlerts = alerts.filter((alert) => {
    return selectedVehicleId === "" || alert.vehicleId.toString() === selectedVehicleId;
  });

  renderAlerts(filteredAlerts);
}

// Function to search alerts by date range
function searchByDateRange() {
  const startDate = document.getElementById("startDate").value;
  const endDate = document.getElementById("endDate").value;

  const filteredAlerts = alerts.filter((alert) => {
    return (startDate === "" || alert.timestamp >= startDate) &&
           (endDate === "" || alert.timestamp <= endDate);
  });

  renderAlerts(filteredAlerts);
}

// Function to mark an alert as false alarm
function markAsFalseAlarm(alertId) {
  // Implement the marking logic here
  console.log(`Marking alert ${alertId} as false alarm`);
}
