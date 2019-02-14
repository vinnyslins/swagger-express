const router = require('express').Router();
const userSchema = require('../schemas/user');

router.get('/users', async (req, res) => {
  try {
    const users = await userSchema.find({});
    return res.json(users);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

router.get('/users/:id', async (req, res) => {
  try {
    const user = await userSchema.findById(req.params.id);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = await userSchema.create(req.body);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

router.patch('/users/:id', async (req, res) => {
  try {
    const user = await userSchema.findByIdAndUpdate(req.params.id, req.body);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

router.delete('/users/:id', async (req, res) => {
  try {
    const user = await userSchema.findByIdAndDelete(req.params.id);
    return res.json(user);
  } catch (error) {
    return res.status(500).json({ message: 'Erro interno no servidor.' });
  }
});

module.exports = router;
