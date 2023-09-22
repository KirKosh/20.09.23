function App() {
	const isAdult = false;
  let text;
  if(isAdult) {
    text = "На завод"
  } else {
    text = "Не на завод"
  }
	
  return (
    <div>
      <p>{text}</p>
    </div>
  );
}
export default App;