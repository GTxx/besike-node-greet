

describe("greet", function(){
    before(function(){
        greet = require("../index.js");
    });
    it("test should require the greet module", function(){
        expect(greet).not.to.be.a('undefined');
    });
    it("should greet a person by name", function(){
        expect(function(){
            greet();
        }).to.throw(Error);
        expect(greet('xx', "drunk")).to.be.a("string");
    });
    it("should greet a persion flirtatiously if drunk", function(){
        expect(greet('xx', 'drunk')).to.contain('you look sexy');
    })
})
