const chai = require('chai');
const chaiHttp = require('chai-http');
chai.use(chaiHttp);
const childProcess = require('child_process')
const assert = chai.assert;

const app = require('../lib/app')
//an example of a test written using the mongo shell for data

// 1. make a connection to mogo
process.env.DB_URI = 'mongodb://localhost:27017/ripe-banana-test';
require('../lib/connection');
const mongoose = require('mongoose');

// 2. make sure db is in known starting condition

describe('actor API', () => {
    
    before(() => mongoose.connection.dropDatabase());

    before(done => {
        //actors.json is in test directory
        childProcess.execFile('mongoimport --file=.test/actors.json -d ripe-banana-test -c actors --jsonArray', done)
    })

    const request = chai.request(app);

    const clooneyId = '573957375'

    it('gets george clooney by id', () => {
        request.get(`/actors/${clooneyId}`)
            .then(res => {
                const clooney = res.body;
                assert.equal(clooney.name, 'george clooney');
            });
    });
});