describe('Página Inicial', () => {
  before(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.essentialnutrition.com.br/radiance-joy-protein-bar-berries-white-chocolate-box')
  })

  it('Deve carregar a página com sucesso', () => {
    cy.url().should('include', 'radiance-joy-protein-bar-berries-white-chocolate-box')
  })

  it('Deve conter o título correto', () => {
    cy.title().should('include', 'Radiance Joy Protein Bar Berries White Chocolate Box')
  })

  it('Deve exibir a descrição do produto', () => {
    cy.contains('Barra de proteína vegana rica em sabor e nutrientes. Sua incrível composição traz um blend de proteínas vegetais (amêndoas, ervilha e arroz), além de fibras, frutas vermelhas liofilizadas, vitaminas e minerais.')
  })

  it('Deve exibir a imagem do produto', () => {
    cy.get('img').should('have.attr', 'src').and('include', 'radiance-joy-protein-bar-berries-white-chocolate-box')
  })

  it('Deve exibir o preço do produto', () => {
    cy.get('.product-price').should('be.visible')
  })

  it('Deve conter um botão de adicionar ao carrinho', () => {
    cy.get('button').contains('Adicionar ao Carrinho').should('be.visible')
  })

  it('Deve exibir avaliações do produto', () => {
    cy.get('.product-reviews').should('be.visible')
  })

  it('Deve exibir informações nutricionais', () => {
    cy.contains('Informações Nutricionais').should('be.visible')
  })

  it('Deve exibir a seção de produtos relacionados', () => {
    cy.contains('Produtos Relacionados').should('be.visible')
  })
})

