using SpedTaskTracker.Api.Models;
using SpedTaskTracker.Api.Repositories;
using TaskStatus = SpedTaskTracker.Api.Models.TaskStatus;

namespace SpedTaskTracker.Api.Services
{
    public class TaskService : ITaskService
    {
        private readonly ITaskRepository _taskRepository;
        public TaskService(ITaskRepository taskRepository)
        {
            _taskRepository = taskRepository;
        }
        public IEnumerable<TaskEntity> GetAll()
        {
            return _taskRepository.GetAll();
        }
        public TaskEntity? GetById(int id)
        {
            return _taskRepository.GetById(id);
        }
        public void Create(TaskEntity task)
        {
            task.DataCriacao = DateTime.UtcNow;
            task.Status = TaskStatus.Pendente;
            _taskRepository.Add(task);
        }
        public void Update(TaskEntity task)
        {

            var existingTask = _taskRepository.GetById(task.Id);

            if (existingTask == null)
                return;

            existingTask.Titulo = task.Titulo;
            existingTask.Descricao = task.Descricao;
            existingTask.Status = task.Status;

            _taskRepository.Update(existingTask);
        }
        public void Delete(int id)
        {
            var task = _taskRepository.GetById(id);

            if (task == null)
                return; 

            _taskRepository.Delete(task);
        }


    }
}
