function City({ city, setCity, setOpen }) {
  function handleSubmit(e) {
    e.preventDefault();
    setOpen((prev) => !prev);
  }

  return (
    <form id="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Please enter the city name..."
        className="city"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button className="cityButton">Search</button>
    </form>
  );
}

export default City;
