const express = require('express');
const router = express.Router();
const Contact = require('../models/contacts');

// get all contacts
router.get('/', async (req, res) => {
  try {
    const contacts = await Contact.find();
    res.json(contacts);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// get one contact
router.get('/:id', getContact, (req, res) => {
  res.json(res.contact);
});

// create one contact
router.post('/', async (req, res) => {
  const contact = new Contact({
    firstname: req.body.firstname,
    lastname: req.body.lastname,
    email: req.body.email,
  });
  try {
    const newContact = await contact.save();
    res.status(201).json(newContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// update one contact (patch for partial update)
router.patch('/:id', getContact, async (req, res) => {
  if (req.body.firstname != null) {
    res.contact.firstname = req.body.firstname;
  }
  if (req.body.lastname != null) {
    res.contact.lastname = req.body.lastname;
  }
  if (req.body.email != null) {
    res.contact.email = req.body.email;
  }
  try {
    const updatedContact = await res.contact.save();
    res.json(updatedContact);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
});

// delete one contact
router.delete('/:id', getContact, async (req, res) => {
  try {
    await res.contact.deleteOne();
    res.json({ message: 'Deleted contact' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

// delete all contacts
router.delete('/', async (req, res) => {
  try {
    await Contact.deleteMany({});
    res.json({ message: 'All contacts documents have been deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

async function getContact(req, res, next) {
  let contact;
  try {
    contact = await Contact.findById(req.params.id);
    if (contact == null) {
      return res.status(404).json({ message: 'Cannot find contact' });
    }
  } catch (err) {
    return res.status(500).json({ message: err.message });
  }

  res.contact = contact;
  next();
}

module.exports = router;
