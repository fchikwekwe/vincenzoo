// TEST PUT
    it('should update a SINGLE animal on /animals/:animalId POST', (done) =>{
        chai.request(server)
        .get('/zoo/animals')
        .end(function(err, res){
            chai.request(server)
            .post('/zoo/animals/animalId')
            .send({

            })
            .end((err, res) =>{
                res.should.have.status(200);
                res.should.be.json
                done();
            });
        })

    });
