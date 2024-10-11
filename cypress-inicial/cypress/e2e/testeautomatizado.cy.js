describe('Página Inicial', () => {
  it('Carrega com sucesso', () => {
    cy.visit('https://essentia.com.br')
    cy.contains('Example Domain')
  })
})
   

