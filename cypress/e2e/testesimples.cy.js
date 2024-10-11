describe ('Página Inicial', () => {  
 // before(() => {
  //  cy.viewport(1920, 1080)
 // })

//carrega o site
  beforeEach(() => {
    cy.viewport(1920, 1080)
    cy.visit('https://www.essentialnutrition.com.br/politica-de-frete')
  })

  it("Titulo", () => {
    //cy.visit('https://www.essentialnutrition.com.br/politica-de-frete')
    cy.contains("POLÍTICA DE FRETE GRÁTIS* ESSENTIAL NUTRITION")

  })

  it("primeiro parfagrafo", () => {
  //  cy.visit('https://www.essentialnutrition.com.br/politica-de-frete')
    cy.contains("Comprando no nosso site, além da agilidade na entrega, você ainda pode ganhar frete")

  })

  it("Descrição correta 2", () => {
    cy.contains("Valores para obter frete grátis*")

  })

  it("Titulo 2", () => {
    cy.contains("Lembre-se!")

  })

  it("Descrição correta 3", () => {
    cy.contains("Para calcular o valor do frete, selecione os produtos que você deseja comprar e clique em adicionar à sacola. Em seguida, informe seu CEP. Os custos e prazo de entrega serão calculados automaticamente. Selecione a opção preferida e finalize sua compra. Você ainda terá a opção de modificar seu pedido antes de concluir a transação.")

  })

  it("Descrição correta 4", () => {
    cy.contains("O prazo de entrega começa a contar após a aprovação do pagamento. Assim que seu pagamento for aprovado, você receberá uma confirmação por e-mail.")

  })

  it("Descrição correta 5", () => {
    cy.contains("Em caso de promoções ou utilização de cupons, o valor do frete será calculado considerando o valor total da compra, ou seja, após a aplicação dos descontos. ")

  })

  it("Descrição correta 6", () => {
    cy.contains("*O benefício do FRETE GRÁTIS será aplicável para a forma de entrega “SEDEX”.")

  })
})