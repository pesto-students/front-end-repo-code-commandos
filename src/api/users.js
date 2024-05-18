const fetchData = async () => {
  try {
    const response = await fetch(`${host}/user/match-feed`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ id: "6572343b20e0ba4957caf1fa" }),
    });
    const json = await response.json();

    return json.message;
  } catch (error) {
    console.log(error);
  }
};

export default fetchData