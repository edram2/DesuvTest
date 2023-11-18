const userObject = {
  "username": 'Pedro',
  "password": '12345',
}

describe('Test API Demoblaze', () => {

  it('crear un usuario nuevo', () => {
    cy.request({
      method: 'post',
      url: '/signup',
      failOnStatusCode: false,
      body: userObject,
    }).as('respuesta')

    cy.get('@respuesta').its('status').should('be.greaterThan', 199)
    cy.get('@respuesta').its('status').should('be.lessThan', 300)
    
  })

  it('no poder crear un usuario ya existente', () => {
    cy.request({
      method: 'post',
      url: '/signup',
      failOnStatusCode: false,
      body: userObject,
    }).as('respuesta')

    cy.get('@respuesta').its('body.errorMessage').should('eq', 'This user already exist.')
  })

  it('iniciar sesión con un usuario con contraseña correcta', () => {
    cy.request({
      method: 'post',
      url: '/login',
      failOnStatusCode: false,
      body: userObject,
    }).as('respuesta')

    cy.get('@respuesta').its('status').should('eq', 200)
  })

  it('no poder iniciar sesión con un usuario con contraseña incorrecta', () => {
    cy.request({
      method: 'post',
      url: '/login',
      failOnStatusCode: false,
      body: {
        "username": userObject.username,
        "password": '98765',
      },
    }).as('respuesta')

    cy.get('@respuesta').its('body.errorMessage').should('eq', 'Wrong password.')
  })

})