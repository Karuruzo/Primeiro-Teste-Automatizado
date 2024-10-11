describe('Testando login com Basic Auth', () => {
    it('Deve realizar login com sucesso usando Basic Auth', () => {
        cy.loginBasicAuthBase64();  // Chama o comando personalizado
        
        // Adicione mais verificações após o login, como por exemplo, verificar se algum conteúdo carregou
        // Exemplo de verificação: 
       //cy.contains('Algum texto na página').should('be.visible');
    });
});
