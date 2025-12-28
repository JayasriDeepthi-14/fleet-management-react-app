import { memo } from "react";

function FleetCard({ id, reg, category, driver, status, updateDriver, toggleAvailability, deleteFleet }) {
  return (
    <div className="fleet-card">
      <img src="https://via.placeholder.com/100" alt="vehicle" />
      <p><b>Reg No:</b> {reg}</p>
      <p><b>Category:</b> {category}</p>
      <p><b>Driver:</b> {driver}</p>
      <p><b>Status:</b> {status}</p>

      <button onClick={() => updateDriver(id)}>Update Driver</button>
      <button onClick={() => toggleAvailability(id)}>Change Availability</button>
      <button onClick={() => deleteFleet(id)}>Delete</button>
    </div>
  );
}

export default memo(FleetCard);
