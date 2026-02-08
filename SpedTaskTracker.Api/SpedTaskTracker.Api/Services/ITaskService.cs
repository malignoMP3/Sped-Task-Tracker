using SpedTaskTracker.Api.Models;

namespace SpedTaskTracker.Api.Services
{
    public interface ITaskService
    {

        IEnumerable<TaskEntity> GetAll();
        TaskEntity? GetById(int id);

        void Create(TaskEntity task);
        void Update(TaskEntity task);
        void Delete(int id);




    }
}
