# Driver Monitoring System

This project is a single-page web application for a Driver Monitoring System that allows fleet managers to view and manage driver behavior alerts. The application provides a user-friendly interface with features such as alert filtering, search options, and the ability to mark alerts as false alarms.

## Features

- **Alert List:** Display a table of alerts with columns for alert type, vehicle, driver, timestamp, and a button to mark the alert as a false alarm.
- **Search Interfaces:**
  - Free text search: Search all text in the alerts for a given string.
  - Search by vehicle number: Searches only the vehicle_friendly_name field in the alerts.
  - Search by date range: Shows alerts whose timestamps fall within the given range.
- **Dropdown Menu:** A dropdown menu in the search by vehicle box that shows current vehicles (using the GET /vehicles endpoint).
- **Timezone Handling:** Display timestamps and date range in the user's time zone, but call the backend using UTC timestamps.
- **False Alarm Marking:** Allow users to mark alerts as false alarms with a button click. Update the backend with the marked alerts.

### Bonus Features

- Visual indicator for unread alerts (e.g., a badge on the alert list).

## Technical Details

- Backend Service: Exposes driver monitoring model inferences through REST endpoints.
  - `GET /vehicles`: Returns a list of vehicles with ID and friendly name.
  - `GET /alerts`: Returns a list of alerts with ID, alert type, vehicle ID, driver name, vehicle friendly name, and timestamp.
  - `PUT /alerts/:id`: Update the backend with marked false alarms.
- Frontend: Implemented without using any framework, leveraging controlled components and event listeners.

## Design

- Clean and uncluttered UI.
- Clear and concise labels for all elements.
- Consistent visual style for different UI components.
- Responsive layout for different screen sizes.

## How to Use

1. Clone this repository.
2. Open `index.html` in a web browser.
3. Interact with the provided features to view and manage driver behavior alerts.

## Mock Data

Mock data is provided for demonstration purposes. You can replace it with data from your backend service.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
