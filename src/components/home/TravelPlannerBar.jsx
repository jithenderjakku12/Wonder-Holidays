export default function TravelPlannerBar() {
  return (
    <section className="section">
      <div className="container">
        <div className="planner">
          <div className="field">
            <label>Destination</label>
            <input placeholder="Ex: Dubai, Bali, Goa..." />
          </div>

          <div className="field">
            <label>Travel Date</label>
            <input type="date" />
          </div>

          <div className="field">
            <label>Travelers</label>
            <select>
              <option>1</option>
              <option>2</option>
              <option>3</option>
              <option>4</option>
              <option>5+</option>
            </select>
          </div>

          <div className="field">
            <label>Budget</label>
            <select>
              <option>Any</option>
              <option>Below ₹25k</option>
              <option>₹25k - ₹60k</option>
              <option>₹60k - ₹1.2L</option>
              <option>₹1.2L+</option>
            </select>
          </div>

          <button className="plannerBtn">Search</button>
        </div>
      </div>
    </section>
  );
}