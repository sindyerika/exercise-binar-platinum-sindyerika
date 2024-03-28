function Greetings(props) {
  return <h1>Hello, {props.name}</h1>;
}

function App() {
  return <Greetings name="World!" />;
}
