import React, { Component } from "react";
import InputFullSalary from "./components/InputFullSalary";
import InputReadOnly from "./components/InputReadOnly";
import ProportionBar from "./components/ProportionBar";
import { calculateSalaryFrom } from "./helpers/salary";

const COLOR_INSS = "#e67e22";
const COLOR_IRPF = "#c0392b";
const COLOR_NETSALARY = "#16a085";

export default class App extends Component {
  constructor() {
    super();

    this.state = {
      fullSalary: 1000,
    };
  }

  handleFullSalaryChange = (newValue) => {
    this.setState({ fullSalary: newValue });
  };

  render() {
    const { fullSalary } = this.state;

    const salaryObject = calculateSalaryFrom(fullSalary);

    const {
      baseINSS,
      discountINSS,
      baseIRPF,
      discountIRPF,
      netSalary,
      percentINSS,
      percentIRPF,
      percentNetSalary,
    } = salaryObject;

    return (
      <div className="container">
        <div style={styles.borda} className="center">
          <h1 style={styles.title}>React Salário</h1>
          <div className="row">
            <InputFullSalary
              currentValue={fullSalary}
              onSalaryChange={this.handleFullSalaryChange}
            />
          </div>

          <div className="row">
            <InputReadOnly label="Base INSS" value={baseINSS} />

            <InputReadOnly
              label="Desconto INSS"
              value={discountINSS}
              percentage={percentINSS}
              color={COLOR_INSS}
            />

            <InputReadOnly label="Base IRPF" value={baseIRPF} />

            <InputReadOnly
              label="Desconto IRPF"
              value={discountIRPF}
              percentage={percentIRPF}
              color={COLOR_IRPF}
            />

            <InputReadOnly
              label="Salário líquido"
              value={netSalary}
              percentage={percentNetSalary}
              color={COLOR_NETSALARY}
            />
          </div>
          <ProportionBar
            inss={percentINSS}
            irpf={percentIRPF}
            netSalary={percentNetSalary}
          />
        </div>
      </div>
    );
  }
}

const styles = {
  borda: {
    border: "1px solid gray",
    borderRadius: "10px",
    padding: "10px",
    marginTop: "50px",
  },
};
