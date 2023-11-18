class FormularioPO{

    completar(Name,Country,City,CreditCard,Month,Year){
        cy.xpath("//input[@id='name']").type(Name).tab().type(Country).tab().
        type(City).tab().type(CreditCard).tab().type(Month).tab().type(Year)
        cy.wait(1000)
    }

    finalizar_compra(){
       cy.xpath("(//button[contains(@type,'button')])[9]").should("be.visible").click({force:true})
       cy.wait(4000)
       cy.xpath("//button[@class='confirm btn btn-lg btn-primary'][contains(.,'OK')]").should("be.visible").click({force:true})
    }
}//final

export default FormularioPO