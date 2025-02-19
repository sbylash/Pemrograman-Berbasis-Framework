import React, { useState } from 'react';

function TodoList() {
  const [tasks, setTasks] = useState([
    'Belajar React',
    'Mengerjakan Jobsheet Framework'
  ]);
  const [newTask, setNewTask] = useState('');

  // Fungsi menambahkan tugas baru (tetap bisa menerima input kosong)
  const handleAddTask = (e) => {
    e.preventDefault();
    setTasks([...tasks, newTask]);
    setNewTask(''); // Kosongkan input setelah menambahkan
  };

  // Fungsi menghapus tugas berdasarkan indeksnya
  const handleDeleteTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div>
      <h2>Todo List</h2>
      <form onSubmit={handleAddTask}>
        <input
          type="text"
          placeholder="Tambahkan tugas baru..."
          value={newTask}
          onChange={(e) => setNewTask(e.target.value)}
        />
        <button type="submit">Tambah</button>
      </form>
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDeleteTask(index)}>Hapus</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TodoList;
