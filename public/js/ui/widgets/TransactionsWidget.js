/**
 * Класс TransactionsWidget отвечает за
 * открытие всплывающих окон для
 * создания нового дохода или расхода
 * */

class TransactionsWidget {
  /**
   * Устанавливает полученный элемент
   * в свойство element.
   * Если переданный элемент не существует,
   * необходимо выкинуть ошибку.
   * */
  constructor(element) {
    if (!element) {
      throw new Error("Элемент не существует");
    }
    this.element = element;
    this.registerEvents();

  }
  /**
   * Регистрирует обработчики нажатия на
   * кнопки «Новый доход» и «Новый расход».
   * При нажатии вызывает Modal.open() для
   * экземпляра окна
   * */
  registerEvents() {
    const incomeBtn = document.querySelector(".create-income-button");
    const expenseBtn = document.querySelector(".create-expense-button");
    const incomeModal = App.getModal("newIncome");
    const expenseModal = App.getModal("newExpense");

    if (incomeBtn) {
      incomeBtn.addEventListener("click", (e) => {
        incomeModal.open();
      });
    }
    if (expenseBtn) {
      expenseBtn.addEventListener("click", (e) => {
        expenseModal.open();
      });
    }
  }
}
