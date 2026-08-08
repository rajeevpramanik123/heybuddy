import React, { useState } from 'react';
import { Plus, Trash2 } from 'lucide-react';

export default function LiveKanbanSandbox() {
  const [tasks, setTasks] = useState([
    { id: '1', title: 'Setup React Vite & Tailwind', category: 'done', priority: 'High' },
    { id: '2', title: 'Implement Drag-and-Drop Handler', category: 'in_progress', priority: 'Medium' },
    { id: '3', title: 'Add localStorage Auto-Sync', category: 'todo', priority: 'High' },
    { id: '4', title: 'Design Glassmorphism Cards', category: 'todo', priority: 'Low' }
  ]);

  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [newTaskPriority, setNewTaskPriority] = useState('Medium');

  const addTask = (e) => {
    e.preventDefault();
    if (!newTaskTitle.trim()) return;
    setTasks(prev => [
      ...prev,
      {
        id: Date.now().toString(),
        title: newTaskTitle.trim(),
        category: 'todo',
        priority: newTaskPriority
      }
    ]);
    setNewTaskTitle('');
  };

  const moveTask = (id, newCategory) => {
    setTasks(prev =>
      prev.map(t => t.id === id ? { ...t, category: newCategory } : t)
    );
  };

  const deleteTask = (id) => {
    setTasks(prev => prev.filter(t => t.id !== id));
  };

  const columns = [
    { key: 'todo', title: '📋 To-Do', color: 'border-amber-500/30 bg-amber-500/5' },
    { key: 'in_progress', title: '⚡ In Progress', color: 'border-blue-500/30 bg-blue-500/5' },
    { key: 'done', title: '✅ Completed', color: 'border-emerald-500/30 bg-emerald-500/5' }
  ];

  return (
    <div className="glass-card p-4 sm:p-5 space-y-4 border-2 border-indigo-500/30">
      <div className="flex items-center justify-between border-b border-white/10 pb-3">
        <div>
          <div className="flex items-center gap-2">
            <span className="px-2.5 py-0.5 rounded-full bg-indigo-500/20 text-indigo-300 font-bold text-[10px] uppercase">
              Interactive Prototype Sandbox
            </span>
            <h3 className="font-bold text-white text-base font-heading">Live preview</h3>
          </div>
          <p className="text-xs text-gray-400 mt-0.5">Test moving tasks across columns directly inside this live demo.</p>
        </div>
      </div>

      {/* Mobile-First Responsive Form (Stacked on mobile <sm, 1-row on desktop) */}
      <form onSubmit={addTask} className="flex flex-col sm:flex-row gap-2 text-xs">
        <input
          type="text"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
          placeholder="Add a new task card (e.g. Implement State Hook)..."
          className="w-full sm:flex-1 bg-black/40 border border-white/10 focus:border-indigo-500 rounded-xl px-3 py-2.5 text-white outline-none"
        />
        <div className="flex items-center gap-2 w-full sm:w-auto">
          <select
            value={newTaskPriority}
            onChange={(e) => setNewTaskPriority(e.target.value)}
            className="flex-1 sm:flex-initial bg-slate-900 border border-white/10 rounded-xl px-3 py-2.5 text-gray-300 outline-none"
          >
            <option value="Low">Low Priority</option>
            <option value="Medium">Medium Priority</option>
            <option value="High">High Priority</option>
          </select>
          <button type="submit" className="btn-primary py-2.5 px-4 text-xs shrink-0 font-bold">
            <Plus className="w-4 h-4" /> Add Task
          </button>
        </div>
      </form>

      {/* Kanban Board 3-Column Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
        {columns.map(col => {
          const colTasks = tasks.filter(t => t.category === col.key);
          return (
            <div key={col.key} className={`rounded-xl border p-3 space-y-2 ${col.color}`}>
              <div className="flex items-center justify-between font-bold text-xs text-white pb-1">
                <span>{col.title}</span>
                <span className="px-2 py-0.5 rounded-full bg-white/10 text-[10px]">
                  {colTasks.length}
                </span>
              </div>

              <div className="space-y-2 min-h-[100px]">
                {colTasks.length === 0 ? (
                  <p className="text-[11px] text-gray-500 italic text-center pt-6">No tasks here</p>
                ) : (
                  colTasks.map(task => (
                    <div
                      key={task.id}
                      className="p-2.5 rounded-lg bg-slate-900/90 border border-white/10 space-y-2 shadow-sm text-xs"
                    >
                      <div className="flex items-start justify-between gap-1">
                        <p className="font-semibold text-white leading-snug">{task.title}</p>
                        <button
                          onClick={() => deleteTask(task.id)}
                          className="text-gray-500 hover:text-red-400 transition"
                        >
                          <Trash2 className="w-3.5 h-3.5" />
                        </button>
                      </div>

                      <div className="flex items-center justify-between pt-1 border-t border-white/5 text-[10px]">
                        <span className={`px-1.5 py-0.5 rounded font-bold ${
                          task.priority === 'High' ? 'bg-red-500/20 text-red-300' :
                          task.priority === 'Medium' ? 'bg-amber-500/20 text-amber-300' : 'bg-blue-500/20 text-blue-300'
                        }`}>
                          {task.priority}
                        </span>

                        {/* Move Actions */}
                        <div className="flex items-center gap-1">
                          {col.key !== 'todo' && (
                            <button
                              onClick={() => moveTask(task.id, col.key === 'done' ? 'in_progress' : 'todo')}
                              className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-gray-200 font-bold"
                              title="Move Left"
                            >
                              ← Move
                            </button>
                          )}
                          {col.key !== 'done' && (
                            <button
                              onClick={() => moveTask(task.id, col.key === 'todo' ? 'in_progress' : 'done')}
                              className="px-2 py-1 rounded bg-white/10 hover:bg-white/20 text-gray-200 font-bold"
                              title="Move Right"
                            >
                              Move →
                            </button>
                          )}
                        </div>
                      </div>
                    </div>
                  ))
                )}
              </div>
            </div>
          );
        })}
      </div>

    </div>
  );
}
