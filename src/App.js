import "./App.css";
import React, { Component } from "react";

class App extends Component {
  state = {
    profit: null,
    marginality: null,
    income: null,
    totalSale: null,
    bill: null,
  };

  handleChange = async (e) => {
    const { name, value } = e.currentTarget;
    await this.setState({ [name]: Number(value) });
    this.incomeSum();
    this.totalSale();
  };

  incomeSum = () => {
    const { profit, marginality } = this.state;
    if (profit && marginality) {
      console.log(marginality);

      const sum = (profit / marginality) * 100;
      console.log(sum);

      this.setState({
        income: sum,
      });
    } else if (profit === 0 || marginality === 0) {
      this.setState({
        income: null,
      });
    }
  };

  totalSale = () => {
    if (this.state.income && this.state.bill) {
      const total = this.state.income / this.state.bill;
      this.setState({
        totalSale: Math.round(total),
      });
    }
  };

  render() {
    const { income, totalSale } = this.state;
    return (
      <div className="container">
        <form type="submit">
          <label className="inputLabel">
            Валовая прибыль
            <input
              type="number"
              name="profit"
              onChange={this.handleChange}
              title="В данное поле нужно ввести ту сумму, которую вы хотите заработать"
              required
            />
          </label>
          <label className="inputLabel">
            Маржинальность, в %
            <input
              type="number"
              name="marginality"
              onChange={this.handleChange}
            />
          </label>
          <label className="inputLabel">
            Валовый доход (Оборот)
            <input
              type="number"
              name="income"
              value={income ? income : ""}
              disabled
            />
          </label>
          <label>
            Средний чек
            <input type="number" name="bill" onChange={this.handleChange} />
          </label>
          <label>
            Количество заказов
            <input
              type="number"
              name="totalSale"
              value={totalSale ? totalSale : ""}
              disabled
            />
          </label>
          <label>
            Количество лидов
            <input
              type="number"
              name="totalLeads"
              onChange={this.handleChange}
            />
          </label>
          <label className="inputLabel">
            Конверсия отдела продаж
            <input type="number" name="cvSales" onChange={this.handleChange} />
          </label>
          <label className="inputLabel">
            Коверсия сайта
            <input type="number" name="cvSite" onChange={this.handleChange} />
          </label>
          <label className="inputLabel">
            Цена клика
            <input
              type="number"
              name="costClick"
              onChange={this.handleChange}
            />
          </label>
          <label className="inputLabel">
            Необходимое количество трафика
            <input
              type="number"
              name="needTrafic"
              onChange={this.handleChange}
            />
          </label>
          <label className="inputLabel">
            Стоимость рекламы
            <input type="number" name="costAds" onChange={this.handleChange} />
          </label>
          <label className="inputLabel">
            Цена лида
            <input type="number" name="costLead" onChange={this.handleChange} />
          </label>
          <label className="inputLabel">
            Цена клиента
            <input
              type="number"
              name="costClient"
              onChange={this.handleChange}
            />
          </label>
        </form>
        <ul>
          {this.state.profit && <li>{this.state.profit}</li>}
          {this.state.marginality && <li>{this.state.marginality}</li>}
          {this.state.income && <li>{this.state.income}</li>}
        </ul>
      </div>
    );
  }
}

export default App;
