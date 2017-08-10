import React, { Component } from "react";

export default class List extends Component {
  renderItem = (text, i) => {
    const { onClickItem } = this.props;

    return (
      <div key={i} style={styles.item} onClick={() => onClickItem(i)}>
        {text}
      </div>
    );
  };

  render() {
    const { list } = this.props;

    return (
      <div style={styles.container}>
        {list.map(this.renderItem)}
      </div>
    );
  }
}

const styles = {
  container: {
    display: "flex",
    padding:10,
    flexDirection: "column",
    font:"18px system-ui",
  },
  item: {
    backgroundColor: "whitesmoke",
    marginBottom: 5,
    padding: 15
  }
};
