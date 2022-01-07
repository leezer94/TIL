function getNum() {
  return Math.floor(Math.random() * 10 + 1);
}

function thing() {}

class NumPicker extends React.Component {
  render() {
    const num = getNum();
    let msg;

    if (num === 7) {
      msg = (
        <div>
          <h2>Congrats !! You win</h2>
          <img src="https://dazedimg-dazedgroup.netdna-ssl.com/480/azure/dazed-prod/1190/9/1199005.jpg"></img>
        </div>
      );
    } else {
      msg = <h2>Congrats !! You Lose</h2>;
    }
    return (
      <div>
        <h1>My Number is : {num}</h1>

        {msg}
      </div>
    );
  }
}

ReactDOM.render(<NumPicker />, document.querySelector('#root'));
