import React, { Component } from "react";

export default class ProportionBar extends Component {
  render() {
    const {
      inss,
      irpf,
      netSalary,
      colorINSS = "#e67e22",
      colorIRPF = "#c0392b",
      colorNetSalary = "#16a085",
    } = this.props;

    console.log(this.props);

    return (
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "flex-start",
        }}
      >
        <div
          style={{
            backgroundColor: colorINSS,
            width: inss + "%",
            height: "20px",
          }}
        />
        <div
          style={{
            backgroundColor: colorIRPF,
            width: irpf + "%",
            height: "20px",
          }}
        />
        <div
          style={{
            backgroundColor: colorNetSalary,
            width: netSalary + "%",
            height: "20px",
          }}
        />
      </div>
    );
  }
}
