describe ('Página Inicial', () => {
  before(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.essentialnutrition.com.br/')
  })

  it('Deve carregar a página com sucesso', () => {
    cy.url().should('eq', 'https://www.essentialnutrition.com.br/')
  })

  it('Deve exibir o logotipo da empresa', () => {
    cy.get('img[alt="Essential Nutrition"]').should('be.visible')
  })

  it('Deve exibir o menu de navegação', () => {
    cy.get('nav').should('be.visible')
    cy.get('nav').within(() => {
      cy.contains('Produtos').should('be.visible')
      cy.contains('Sobre').should('be.visible')
      cy.contains('Blog').should('be.visible')
      cy.contains('Contato').should('be.visible')
    })
  })

  it('Deve exibir o banner principal', () => {
    cy.get('.main-banner').should('be.visible')
  })

  it('Deve exibir a seção de produtos em destaque', () => {
    cy.contains('Produtos em Destaque').should('be.visible')
    cy.get('.featured-products').should('be.visible')
  })

  it('Deve exibir a seção de categorias de produtos', () => {
    cy.contains('Categorias').should('be.visible')
    cy.get('.product-categories').should('be.visible')
  })

  it('Deve exibir a seção de depoimentos', () => {
    cy.contains('Depoimentos').should('be.visible')
    cy.get('.testimonials').should('be.visible')
  })

  it('Deve exibir a seção de blog', () => {
    cy.contains('Blog').should('be.visible')
    cy.get('.blog-section').should('be.visible')
  })

  it('Deve exibir o rodapé com informações de contato', () => {
    cy.get('footer').should('be.visible')
    cy.get('footer').within(() => {
      cy.contains('Contato').should('be.visible')
      cy.contains('Política de Privacidade').should('be.visible')
      cy.contains('Termos de Uso').should('be.visible')
    })
  })
})
