// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add("login", (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add("drag", { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add("dismiss", { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite("visit", (originalFn, url, options) => { ... })

import dayjs from 'dayjs'
import { desktop } from 'cypress/integration/_helpers/default-devices'
import 'cypress-iframe'

const auth = {
  username: Cypress.env('AUTH_USERNAME'),
  password: Cypress.env('AUTH_PASSWORD'),
}

Cypress.dayjs = dayjs

Cypress.Commands.add('visitWithDesktop', (targetUrl) => {
  const [w, h] = desktop.viewport
  cy.viewport(w, h)
  cy.visit(targetUrl, { auth, retryOnStatusCodeFailure: true })
})

Cypress.Commands.add('dataCy', (value, options = {}) => {
  return cy.get(`[data-cy="${value}"]`, options)
})

Cypress.Commands.add('visitWithDevice', (targetUrl, device) => {
  const [w, h] = device.viewport
  cy.viewport(w, h)
  cy.visit(targetUrl, { auth, retryOnStatusCodeFailure: true })
})

//Workaraound, to really clear cookies:
Cypress.Commands.add('forceClearCookies', () => {
  cy.clearCookies()
  cy.wait(100)
  cy.getCookies({ timeout: 3000 }).then((cookies) => {
    if (cookies.length !== 0) {
      cy.reload()
      cy.getCookies({ timeout: 3000 }).should('be.empty')
    }
  })
})

let LOCAL_STORAGE_MEMORY = {}

Cypress.Commands.add('saveLocalStorageCache', () => {
  Object.keys(localStorage).forEach((key) => {
    LOCAL_STORAGE_MEMORY[key] = localStorage[key]
  })
})

Cypress.Commands.add('restoreLocalStorageCache', () => {
  Object.keys(LOCAL_STORAGE_MEMORY).forEach((key) => {
    localStorage.setItem(key, LOCAL_STORAGE_MEMORY[key])
  })
})

/*
 * Configurable pause/delay between commands
 * Description: Workaround to allow the configuration of the speed steps in test
 * Source: https://github.com/cypress-io/cypress/issues/249
 *
 * or try with config: "defaultCommandTimeout": 4000,
 * Source: https://docs.cypress.io/api/cypress-api/config.html#Object
 *
 * */
const COMMAND_DELAY = 200
for (const command of [
  'visit',
  'click',
  'trigger',
  'type',
  'clear',
  'reload',
  'contains',
]) {
  Cypress.Commands.overwrite(command, (originalFn, ...args) => {
    const origVal = originalFn(...args)
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(origVal)
      }, COMMAND_DELAY)
    })
  })
}

const WAIT_DELAY = 1700
const ONETRUST_DELAY = 1000
Cypress.Commands.overwrite('visit', (originalFn, url, options) => {
  const origVal = originalFn(url, options)
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(origVal)
    }, COMMAND_DELAY)
  }).then((window) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(window)
      }, WAIT_DELAY)
    }).then((window) => {
      return new Promise((resolve) => {
        if (window.OneTrust) {
          window.OneTrust.AllowAll()
        }
        setTimeout(() => {
          resolve()
        }, ONETRUST_DELAY)
      })
    })
  })
})
