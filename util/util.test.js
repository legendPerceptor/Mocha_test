let util=require('./util');

const expect=require('expect');
describe('Utils',()=>{
    describe('Add',()=>{
        it('should add two numbers',()=>{
            let sum=util.add(33,11);
            expect(sum).toBe(44).toBeA('number');
        
        });
    })
    
    it('should square a number',()=>{
        let res = util.square(3);
        expect(res).toBe(9).toBeA('number');
    });
    
    it('should be some values',()=>{
        expect({
            name:'Huge',
            age:18,
            Sex:'Male'
        }).toInclude({
            age:18
        });
    });
});
