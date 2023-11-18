import FormularioPO from '../support/DevsuPageObjects/FormularioPO.cy';

/// <reference types ="Cypress"/>

require('cypress-xpath')
require('cypress-plugin-tab')

describe('Test 1 Agregar (2) productos al carrito', () => {
    it('Agregando Productos', () => {
      cy.log("Automatización en Proceso")
      cy.visit("https://www.demoblaze.com//")
      cy.wait(2000)
      //Validando titulo de la pagina
      cy.title().should('eq','STORE')
      cy.wait(2000)
      //Seleccionado categoria de producto 'Laptos'
      cy.contains('Laptops').should("be.visible").click({force:true})
      cy.wait(2000)
      //Seleccionando el producto Laptop
      cy.contains('Sony vaio i5').should("be.visible").click({force:true})
      cy.wait(2000)
      //Seleccionar y adicionar al carrito
      cy.xpath("//a[@onclick='addToCart(8)']").should("be.visible").click()
      cy.wait(4000)
      //Validar la selección dentro del carrito
      cy.xpath("//a[@class='nav-link'][contains(.,'Cart')]").should("be.visible").click({force:true})
      cy.wait(4000)

      //Volver al home
      cy.xpath("//a[contains(.,'Home (current)')]").should("be.visible").click({force:true})
      //Seleccionado categoria de producto 'Monitor'
      cy.wait(2000)
      cy.contains('Monitor').should("be.visible").click({force:true})
      cy.wait(2000)
      //Seleccionando el producto Monitor
      cy.xpath("//a[contains(.,'Apple monitor 24')]").should("be.visible").click({force:true})
      cy.wait(2000)
      //Seleccionar y adicionar al carrito
      cy.xpath("//a[contains(.,'Add to cart')]").should("be.visible").click()
      cy.wait(4000)
      //Validar la selección dentro del carrito
      cy.xpath("//a[@class='nav-link'][contains(.,'Cart')]").should("be.visible").click({force:true})
      cy.wait(4000)
      
      //Seleccionar y ordenar la compra 
      cy.xpath("//button[@type='button'][contains(.,'Place Order')]").should("be.visible").click({force:true})
      cy.wait(2000)
      
      

      const formulario=new FormularioPO()
      formulario.completar('Marcos Martinez','Argentina','Buenos Aires','0987 7654 6543 4321','Abril','2024')
      formulario.finalizar_compra()
      

    })
  })