const { Router } = require('express');
const router = Router();

const User = require('../models/User');

const faker = require('faker');

router.get('/api/users', async (req, res) => {
    const users = await User.find();
    res.json({ users });// {} eh para ser um vetor 
});

router.get('/api/users/create', async (req, res) => {// cria 5 novos usuarios atraves do faker
    for (let i = 0; i < 5; i++) {
        await User.create({
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            avatar: faker.image.avatar(),
        });
    }
    res.json({ message: '5 Users created' });
});


module.exports = router; 