using Microsoft.AspNetCore.Mvc;
using SpedTaskTracker.Api.Services;
using SpedTaskTracker.Api.Models;

namespace SpedTaskTracker.Api.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class TaskController : ControllerBase
    {

        private readonly ITaskService _taskService;

        public TaskController(ITaskService taskService)
        {
            _taskService = taskService;
        }


        [HttpGet]
        public IActionResult GetAll()
        {

            var tasks = _taskService.GetAll();
            return Ok(tasks);
        }



        [HttpGet("{id}")]
        public IActionResult GetById(int id)
        {

            var task = _taskService.GetById(id);

            if (task == null)
                return NotFound();

            return Ok(task);


        }



        [HttpPost]
        public IActionResult Create([FromBody] TaskEntity task)
        {

            _taskService.Create(task);
            return CreatedAtAction(nameof(GetById), new { id = task.Id }, task);

        }


        [HttpPut("{id}")]
        public IActionResult Update(int id, [FromBody] TaskEntity task)
        {
            task.Id = id;
            _taskService.Update(task);
            return NoContent();
        }



        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            _taskService.Delete(id);
            return NoContent();


        }
    }
}