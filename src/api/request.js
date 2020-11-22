export default (() => {
  const run = async (url) => {
    const response = await fetch(url);

    if (!response.ok) {
      console.log(response);
    }

    return await response.json();
  };

  return {
    get: (url) => run(url),
  };
})();
