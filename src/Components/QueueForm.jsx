import { useState } from "react";
import { FaUserPlus } from "react-icons/fa";
export default function QueueForm({ onAdd }) {
  //todo
  const [name, SetName] = useState("");
  const [service, SetService] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    //validations
    if (!name.trim() || !service.trim()) return;
    onAdd({ name, service });
    SetName("");
    SetService("");
  };
  return (
    <>
      <form className="queue-form" onSubmit={handleSubmit}>
        <h2>Add to queue</h2>
        <div className="form-group">
          <input
            placeholder="Customer name"
            type="text"
            value={name}
            onChange={(e) => SetName(e.target.value)}
          />
        </div>
        <div className="form-group">
          <select value={service} onChange={(e) => SetService(e.target.value)}>
            <option value="">Select Service</option>
            <option value="consultation">consulatation</option>
            <option value="payment">payment</option>
            <option value="support">support</option>
          </select>
        </div>
        <button type="Submit">
          <FaUserPlus />
          Add Customer
        </button>
      </form>
    </>
  );
}
