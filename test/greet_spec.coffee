greet = require("../lib/index.js")
describe "greet", ->
  before ->
    return

  it "should greet a person by name", ->
    # expect style
    expect(->
        greet()
        return
    ).to.throw(Error);
    # should style
    (->
      greet()
      return
    ).should.Throw Error
    expect(greet("xx", "drunk")).to.be.a "string"
    return

  it "should greet a persion flirtatiously if drunk", ->
    expect(greet("xx", "drunk")).to.contain "you look sexy"
    return

  return