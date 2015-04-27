describe("Person", function() {
    it("says fashello", function() {
        var fakePerson = new Person();
        fakePerson.sayHello = jasmine.createSpy('"Say hello" spy').andReturn("ello ello");
        fakePerson.helloSomeone("world");
        expect(fakePerson.sayHello).toHaveBeenCalled();
    });
});