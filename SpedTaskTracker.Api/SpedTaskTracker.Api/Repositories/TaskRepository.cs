using SpedTaskTracker.Api.Data;
using SpedTaskTracker.Api.Models;
using Microsoft.EntityFrameworkCore;


namespace SpedTaskTracker.Api.Repositories
{
    public class TaskRepository : ITaskRepository
    {
        private readonly AppDbContext _context;

        public TaskRepository(AppDbContext context)
        {
            _context = context;
        }

        public IEnumerable<TaskEntity> GetAll()
        {
            return _context.Tasks.ToList();
        }


        public TaskEntity? GetById(int id)
        {
            return _context.Tasks.FirstOrDefault(t => t.Id == id);
        }

        public void Add(TaskEntity task)
        {
            _context.Tasks.Add(task);
            _context.SaveChanges();
        }

        public void Update(TaskEntity task)
        {
            _context.Tasks.Update(task);
            _context.SaveChanges();
        }

        public void Delete(TaskEntity task)
        {
            _context.Tasks.Remove(task);
            _context.SaveChanges();
        }
    }
}
