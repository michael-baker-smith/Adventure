import request from 'superagent'

const serverURL = 'http://localhost:3000/api/v1'

// *** EXAMPLE ***
export function getScenario() {
  return request.get(`${serverURL}/scenario`).then((response) => response.body)
}
// ***   ***   ***
