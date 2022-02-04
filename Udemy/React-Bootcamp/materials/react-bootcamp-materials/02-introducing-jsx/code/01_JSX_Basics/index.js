function getMood() {
  const moods = ['Angry', 'Hungry', 'Silly', 'Hangry', 'Happy', 'Paranoid'];
  return moods[Math.floor(Math.random() * moods.length)];
}

class JSXDemo extends React.Component {
  render() {
    return (
      <div>
        <h1>My current mood is : {getMood()}</h1>
        <img src="https://dazedimg-dazedgroup.netdna-ssl.com/480/azure/dazed-prod/1190/9/1199005.jpg"></img>
      </div>
    );
  }
}

ReactDOM.render(<JSXDemo />, document.querySelector('#root'));
