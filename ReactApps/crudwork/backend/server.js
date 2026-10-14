const express = require('express');
const sqlite3 = require('sqlite3').verbose();
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());

// Setup DB
const db = new sqlite3.Database('./bank.db');
db.run(`CREATE TABLE IF NOT EXISTS employee (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  ename TEXT,
  job TEXT,
  salary REAL
)`);

// CREATE
app.post('/employees', (req, res) => {
  const { ename, job, salary } = req.body;
  db.run('INSERT INTO employee (ename, job ,salary) VALUES (?, ?, ?)', [ename, job, salary], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ id: this.lastID, ename, job, salary });
  });
});

app.get('/', (req, res) => {
 
    res.send("hello world!");
  });
// });

// READ (all)
app.get('/employees', (req, res) => {
  db.all('SELECT * FROM employee', [], (err, rows) => {
    if (err) return res.status(500).json({ error: err.message });
    res.json(rows);
  });
});

// UPDATE
app.put('/employees/:id', (req, res) => {
  const { ename, job, salary,  } = req.body;
  db.run('UPDATE employee SET ename = ?, job = ?, salary = ?  WHERE id = ?', [ename, job, salary, req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ updated: this.changes });
  });
});

// DELETE
app.delete('/employees/:id', (req, res) => {
  db.run('DELETE FROM employee WHERE id = ?', [req.params.id], function (err) {
    if (err) return res.status(500).json({ error: err.message });
    res.json({ deleted: this.changes });
  });
});

app.listen(5000, () => console.log('Server running on port 5000'));