function ComponentA(props) {
  let color = props.color;
}
<ComponentA color="blue" />;

class ComponentB extends React.Component {
  render() {
    let color = this.props.color;
  }
}
<ComponentB color="white" />;

//Prop itu read-only. Perhatikan contoh function ComponentA diatas, function ini hanya bisa membaca parameter props tetapi tidak bisa merubahnya. Yang bisa merubahnya adalah pemanggilnya yaitu <ComponentA />
//Prop umumnya digunakan untuk komunikasi data component dari parent komponent ke child component.

// State

class Counter extends React.Component {
  state = {
    value: 0,
  };

  minus = () => {
    let currentValue = this.state.value;
    this.setState({ value: currentValue - 1 });
  };

  plus = () => {
    let currentValue = this.state.value;
    this.setState({ value: currentValue + 1 });
  };
  render() {
    let currentValue = this.state.value;

    this.plus();
    console.log(currentValue);

    this.minus();
    console.log(currentValue);
  }
}

//Pada beberapa contoh inisialisasi di buat dengan menggunakan constructor()
//Untuk merubah state gunakan perintah this.setState().
//Untuk membaca state gunakan perintah this.state.keyName
//Semua perubahan state dilakukan di dalam method render()
