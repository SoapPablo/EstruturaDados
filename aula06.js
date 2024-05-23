dequeue() {
    // verifica de a fila está vazia
    if (this.isEmpty()) {
        return undefined;
    }
    //armazenamento o valor da frente da fila
    const result = this.items[this.lowestCount];
    //removendo o elemento da frente
    delete this.items[this.lowestCount];
    // será necessario incrementar a propriedade lowestCount
    this.lowestCount++;
    return result;
}