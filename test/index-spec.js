const should = require('should');
const VGenerator = require('../');

describe('index / VGenerator', () => {
  describe('getNext', () => {
    it('should generate all variants for charset=xx and secret len=3', () => {
      let vgen = new VGenerator('ab', 3);
      let actual = [];
      let next = vgen.getNext();
      while (next) {
        actual.push(next);
        next = vgen.getNext();
      }

      let expected = [
        'aaa', 'baa',
        'aba', 'bba',
        'aab', 'bab',
        'abb', 'bbb'
      ];
      should(actual).eql(expected);
    });

    it('should generate all variants for charset=xxx and secret len=2', () => {
      let vgen = new VGenerator('123', 2);
      let actual = [];
      let next = vgen.getNext();
      while (next) {
        actual.push(next);
        next = vgen.getNext();
      }

      let expected = [
        '11', '21', '31',
        '12', '22', '32',
        '13', '23', '33'
      ];
      should(actual).eql(expected);
    });
  });

  describe('getAll', () => {
    it('should generate all variants for charset=xx and secret len=3', () => {
      let vgen = new VGenerator('ab', 3);
      let actual = vgen.getAll();

      let expected = [
        'aaa', 'baa',
        'aba', 'bba',
        'aab', 'bab',
        'abb', 'bbb'
      ];
      should(actual).eql(expected);
    });

    it('should generate all variants for charset=xxx and secret len=2', () => {
      let vgen = new VGenerator('123', 2);
      let actual = vgen.getAll();

      let expected = [
        '11', '21', '31',
        '12', '22', '32',
        '13', '23', '33'
      ];
      should(actual).eql(expected);
    });
  });
});
