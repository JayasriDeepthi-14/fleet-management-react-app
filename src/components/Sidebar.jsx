import { useState } from "react";

export default function Sidebar({ addFleet }) {
  const [form, setForm] = useState({
    reg: "",
    category: "",
    driver: "",
    status: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.reg || !form.category || !form.driver || !form.status) {
      alert("All fields required");
      return;
    }

    addFleet({
      id: Date.now(),
      reg: form.reg,
      category: form.category,
      driver: form.driver,
      status: form.status,
    });

    setForm({ reg: "", category: "", driver: "", status: "" });
  };

  return (
    <aside className="sidebar">
      <h3>Add Fleet</h3>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Vehicle Reg Number"
          value={form.reg}
          onChange={(e) => setForm({ ...form, reg: e.target.value })}
        />
        <input
          placeholder="Category"
          value={form.category}
          onChange={(e) => setForm({ ...form, category: e.target.value })}
        />
        <input
          placeholder="Driver Name"
          value={form.driver}
          onChange={(e) => setForm({ ...form, driver: e.target.value })}
        />
        <select
          value={form.status}
          onChange={(e) => setForm({ ...form, status: e.target.value })}
        >
          <option value="">Select Status</option>
          <option value="Available">Available</option>
          <option value="Unavailable">Unavailable</option>
        </select>

        <button type="submit">Add Fleet</button>
      </form>
    </aside>
  );
}
