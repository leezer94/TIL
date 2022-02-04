class App extends React.Component {
  render() {
    return (
      <div>
        <Hello to="Keonhee" from="Ronja" />
        <Hello to="Ronja" from="Keonhee" />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
