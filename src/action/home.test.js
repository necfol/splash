const home = require("./home")
// @ponicode
describe("home.show", () => {
    test("0", () => {
        let callFunction = () => {
            home.show()
        }
    
        expect(callFunction).not.toThrow()
    })
})

// @ponicode
describe("home.hide", () => {
    test("0", () => {
        let callFunction = () => {
            home.hide()
        }
    
        expect(callFunction).not.toThrow()
    })
})
