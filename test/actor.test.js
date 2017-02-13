const Actor = require('../lib/models/actors');

describe('actors model', () => {

    it('requires a name', () => {
        new Actor({ dob: new Date() })
            .validate()
            .then(
                () => { throw new Error('validation should not have suceeded'); },
                () => { /* err was expected, nothing to do */}
            );
    });
});