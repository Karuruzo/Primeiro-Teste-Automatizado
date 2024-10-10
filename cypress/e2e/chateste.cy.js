describe('Página Inicial', () => {
  it('Carrega com sucesso', () => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.essentialnutrition.com.br/radiance-joy-protein-bar-berries-white-chocolate-box')

    cy.contains('Barra de proteína vegana rica em sabor e nutrientes. Sua incrível composição traz um blend de proteínas vegetais (amêndoas, ervilha e arroz), além de fibras, frutas vermelhas liofilizadas, vitaminas e minerais.')
  })     
})
