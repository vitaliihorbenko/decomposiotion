import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    profit: null,
    marginality: null,
    income: null,
  };

  handleChange = (e) => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: +value });
  };

  // handleIncome = () => {
  //   const sum = (this.state.profit / this.state.marginality) * 100;
  //   console.log(sum);
  //   this.setState({
  //     income: sum,
  //   });
  // };
  render() {
    return (
      <>
        <form type="submit">
          <label>
            Валовая прибыль
            <input
              type="number"
              name="profit"
              onChange={this.handleChange}
              title="В данное поле нужно ввести ту сумму, которую вы хотите заработать"
              required
            />
          </label>
          <label>
            Маржинальность, в %
            <input
              type="number"
              name="marginality"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Валовый доход (Оборот)
            <input type="number" name="income" onChange={this.handleChange} />
          </label>
          <label>
            Средний чек
            <input type="number" name="bill" onChange={this.handleChange} />
          </label>
          <label>
            Цена клиента
            <input
              type="number"
              name="costClient"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Конверсия отдела продаж
            <input type="number" name="cvSales" onChange={this.handleChange} />
          </label>
          <label>
            Коверсия сайта
            <input type="number" name="cvSite" onChange={this.handleChange} />
          </label>
          <label>
            Цена лида
            <input type="number" name="costLead" onChange={this.handleChange} />
          </label>
          <label>
            Цена клика
            <input
              type="number"
              name="costClick"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Необходимое количество трафика
            <input
              type="number"
              name="needTrafic"
              onChange={this.handleChange}
            />
          </label>
          <label>
            Стоимость рекламы
            <input type="number" name="costAds" onChange={this.handleChange} />
          </label>
        </form>
        <ul>
          <li>{this.state.profit}</li>
        </ul>
      </>
    );
  }
}

export default App;
