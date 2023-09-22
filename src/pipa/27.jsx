function App() {
  let text;
  const isAdmin = false;

  if (isAdmin) {
    text = (
      <div>
        <p>PYPA</p>
        <p>LYPA</p>
      </div>
    );
  } else {
    text = "";
  }

  return text;
}

export default App;