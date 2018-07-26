class Geladeira {
  constructor() {
    this.items = ['ovo', 'peixe', 'arroz'];
  }

  printItems() {
    console.log(this.items);
  }

  addItems(item) {
    this.items.push(item);
    console.log(`${item} adicionado com sucesso!`);
  }
}
