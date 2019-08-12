function hello(name) {
  return `Hello, ${name}!`; 
  // Deve retornar os mesmos 
  // outputs do teste
}

// Teste
describe('hello', function() {
  it('deve retornar Hello, Alan!', function() {
    expect(hello('Alan')).toBe('Hello, Alan!');
  });
});