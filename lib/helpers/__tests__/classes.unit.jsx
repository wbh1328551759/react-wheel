import classes from '../classes'
describe("classes", () => {
  it("接受一个 className", () => {
    const result = classes('a')
    expect(result).toEqual('a')
  });
  it('接受两个 className', () => {
    const result = classes('a', 'b')
    expect(result).toEqual('a b')
  });
  it('接受 undefined ，但是不会出现 undefined', () => {
    const result = classes('a', undefined)
    expect(result).toEqual('a')
  });
  it('接受各种奇怪的 class', () => {
    const result = classes('a', undefined, '你好', false, null)
    expect(result).toEqual('a 你好')
  });
  it('没有参数', () => {
    const result = classes()
    expect(result).toEqual('')
  })
});
