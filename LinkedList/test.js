import LLink from './LLink'

var testLink = new LLink()
for (let i = 0; i < 10; i++) {
  testLink.insert(i, 'head')
}
testLink.display()

// 删除第二个
testLink.remove()
