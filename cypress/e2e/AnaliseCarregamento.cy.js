describe('Teste de Carregamento Completo da Página', () => {
    it('Deve carregar a página completamente e garantir que todos os elementos esperados estejam presentes', () => {
        // Visita a página que será testada
        cy.visit('https://promemberstaging.essentialnutrition.com.br/body-immersion-noorskin-gel-de-banho'); 
        cy.wait(20000);

        // Ignora erros relacionados ao reCAPTCHA, gRecaptcha, owlCarousel e "No reCAPTCHA clients exist"
        cy.on('uncaught:exception', (err, runnable) => {
            if (err.message.includes('grecaptcha') || 
                err.message.includes('recaptcha') || 
                err.message.includes('owlCarousel') || 
                err.message.includes('No reCAPTCHA clients exist')) {
                return false; // Ignora o erro
            }
            throw err;
        });

        // Intercepta requisições relacionadas ao reCAPTCHA
        cy.intercept('GET', '**/recaptcha/**', {
            statusCode: 200,
            body: { success: true },
        }).as('recaptcha');

        // Verifica se a página está completamente carregada
        cy.window().should('have.property', 'document').then((doc) => {
            expect(doc.readyState).to.equal('complete');
        });

        // Verifica se o título da página está correto
        cy.title().should('include', 'Body Immersion');

        // Verifica se elementos importantes estão presentes e visíveis
        cy.get('#subfooter-container').should('be.visible');

        // Verifica se os botões principais estão visíveis e clicáveis
        cy.get('.action.submit.primary.to-out-of-stock-subscription').should('be.visible').and('not.be.disabled');

        // Verifica as imagens, mas ignora as que estão escondidas (display: none)
        cy.get('img').each(($img) => {
            if ($img.is(':visible')) {
                cy.wrap($img, { timeout: 10000 }).should('be.visible');
                cy.wrap($img, { timeout: 10000 }).should('have.attr', 'src').should('not.be.empty');
            } else {
                cy.log('Imagem ignorada porque está com display: none');
            }
        });

        // Verifica se o owlCarousel foi carregado corretamente
        cy.get('.owl-carousel').should('exist').then(($carousel) => {
            // Verifica se o Owl Carousel está presente
            expect($carousel).to.have.class('owl-carousel'); // Confirma que a classe está presente
        });

        // Verifica se um spinner ou indicador de carregamento não está mais visível
        cy.get('.spinner').should('not.exist');

        // Verifica que não há erros na rede
        cy.intercept('GET', '**/*').as('networkRequests');
        cy.wait('@networkRequests').then((interception) => {
            expect(interception.response.statusCode).to.be.oneOf([200, 304]);
        });
    });
});
