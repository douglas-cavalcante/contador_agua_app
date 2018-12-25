import React from 'react';
import { StyleSheet, Text, View, ImageBackground, Button } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      consumed: 0,
      per: 0,
      status: "Ruim"
    }
  }

  update = (consumed) => {
    const per = Math.floor(((this.state.consumed / 2000) * 100));
    const status = this.state.per >= 100 ? "Bom" : "Ruim";
    this.setState({ consumed, per, status });
  }

  add = () => {
    const consumed = this.state.consumed += 200;
    this.update(consumed);
  }

  render() {


    return (
      <View style={styles.container}>
        <ImageBackground style={styles.bgImg} source={require('./water.jpg')}>
          <View>
            <View style={styles.areaInfo}>
              <View style={styles.area}>
                <Text style={styles.title}>Meta</Text>
                <Text style={styles.description}>2000 ml</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.title} >Consumido</Text>
                <Text style={styles.description}>{this.state.consumed + " ml"}</Text>
              </View>
              <View style={styles.area}>
                <Text style={styles.title}>Status</Text>
                <Text style={styles.description}>{this.state.status}</Text>
              </View>
            </View>
            <View style={styles.perArea}>
              <Text style={styles.perText}>
                {this.state.per + " %"}
              </Text>
            </View>
            <View style={styles.btnArea}>
              <Button onPress={this.add} title="Beber 200ml" />
            </View>
          </View>
        </ImageBackground>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20
  },
  bgImg: {
    flex: 1,
    width: null,
    opacity: 0.9
  },
  areaInfo: {
    flex: 1,
    flexDirection: "row",
    marginTop: 70
  },
  area: {
    flex: 1,
    alignItems: "center"
  },
  title: {
    color: "white",
    fontSize: 18,
    fontWeight: "bold",
  },
  description: {
    color: "#2b4274",
    fontWeight: "bold",
    fontSize: 15
  },
  perArea: {
    marginTop: 250,
    alignItems: "center"
  },
  perText: {
    fontSize: 70,
    color: "#2b4274",
    backgroundColor: "transparent"
  },
  btnArea: {
    marginTop: 30,
    alignItems: "center",
  }
});
