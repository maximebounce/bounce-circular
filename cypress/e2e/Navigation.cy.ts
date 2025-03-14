describe('Navigation', () => {
  describe('Static pages', () => {
    it('should navigate to the about page', () => {
      // Start from the index page
      cy.visit('/');

      // The index page should contain an h1
      cy.findByRole('heading', {
        name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
      });

      // Find a link containing "Faq" text and click it
      cy.findByRole('link', { name: 'Faq' }).click();

      // The new url should include "/about"
      cy.url().should('include', '/faq');

      // The new page should contain two "lorem ipsum" paragraphs
      cy.findAllByText('Lorem ipsum dolor sit amet', { exact: false }).should(
        'have.length',
        2
      );
    });

    it('should take screenshot of the homepage', () => {
      cy.visit('/');

      // Wait until the page is displayed
      cy.findByRole('heading', {
        name: 'Boilerplate code for your Nextjs project with Tailwind CSS',
      });

      cy.percySnapshot('Homepage');
    });

    it('should take screenshot of the Faq page', () => {
      cy.visit('/faq');

      // Wait until the page is displayed
      cy.findByRole('link', { name: 'Faq' });

      cy.percySnapshot('Faq');
    });
  });
});
