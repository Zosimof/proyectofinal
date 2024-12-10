const express = require('express');
const cors = require('cors');
const db = require('./db'); 
const path = require('path');


const app = express();

app.use(cors());
app.use(express.json()); 
app.use(express.static(path.join(__dirname, 'dist')));

app.post('/add-task', (req, res) => {
  const { titulo, descripcion, tipo } = req.body;
  const query = 'INSERT INTO selecciones (titulo, descripcion, tipo) VALUES (?, ?, ?)';

  db.query(query, [titulo, descripcion, tipo], (err, results) => {
    if (err) {
      console.error('Error adding task:', err.message);
      return res.status(500).send({ success: false, error: err.message });
    }
    res.status(201).send({ success: true, id: results.insertId });
  });
});

app.get('/tasks', (req, res) => {
  const query = 'SELECT * FROM selecciones';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching tasks:', err.message);
      return res.status(500).send({ success: false, error: err.message });
    }
    res.status(200).send(results);
  });
});


app.put('/tasks/:id/completed', (req, res) => {
  const taskId = req.params.id;
  const query = 'UPDATE selecciones SET completed = TRUE WHERE id = ?';

  db.query(query, [taskId], (err, results) => {
    if (err) {
      console.error('Error updating task:', err.message);
      return res.status(500).send({ success: false, error: err.message });
    }
    res.status(200).send({ success: true, message: 'Task marked as completed.' });
  });
});


app.get('/completed-tasks', (req, res) => {
  const query = 'SELECT * FROM selecciones WHERE completed = TRUE';

  db.query(query, (err, results) => {
    if (err) {
      console.error('Error fetching completed tasks:', err.message);
      return res.status(500).send({ success: false, error: err.message });
    }
    res.status(200).send(results);
  });
});
  
app.post('/completar-task/:id', (req, res) => {
  const taskId = req.params.id;


  const query = `
    INSERT INTO completed_tasks (titulo, descripcion, tipo)
    SELECT titulo, descripcion, tipo FROM selecciones WHERE id = ?;
    DELETE from selecciones WHERE id = ?;
  `;

  db.query(query, [taskId, taskId], (err) => {
    if (err) {
      console.error('Error completing task:', err.message);
      return res.status(500).send({ success: false, error: err.message });
    }

    res.status(200).send({ success: true, message: 'Task marked as completed.' });
  });
});

  

app.listen(3000, () => {
  console.log('Server running on http://localhost:3000');
});
