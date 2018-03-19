const request=require('supertest');

const expect=require('expect');
let app=require('./server').app;
describe('Server Tests',()=>{
    it('should return hello world response',(done)=>{
        request(app)
            .get('/')
          //  .expect('Hello World!')
          //  .end(done);
            .expect(404)
            .expect((res)=>{
                expect(res.body).toInclude({
                    error : 'Page Not Found.'
                })
            })  
            //.expect({error: 'Page Not Found.'})
            .end(done);
    });
    
    it('should include some people\'s information',(done)=>{
        request(app)
            .get('/users')
            .expect((res)=>{
                expect(res.body).toInclude({
                    ID:'007',
                    Name:'Jianjian'
                })
            })
            .end(done);
    });
});
