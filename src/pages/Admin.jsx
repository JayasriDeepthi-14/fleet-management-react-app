import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import FleetCard from "../components/FleetCard";
import { memo } from "react";

function Admin({ fleets, addFleet, updateDriver, toggleAvailability, deleteFleet }) {

  return (
    <div className="admin-container">
      <Navbar />
      <div className="admin-body">
        <Sidebar addFleet={addFleet} />
        <div className="fleet-grid">
          {fleets.map((fleet) => (
            <FleetCard
              key={fleet.id}
              {...fleet}
              updateDriver={updateDriver}
              toggleAvailability={toggleAvailability}
              deleteFleet={deleteFleet}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default memo(Admin);
