namespace SpedTaskTracker.Api.Models
{
    public class TaskEntity
    {


        public int Id { get; set; }
        public string Titulo { get; set; } = string.Empty;
        
        public string Descricao { get; set; } = string.Empty;

        public DateTime DataCriacao { get; set; }

        public TaskStatus Status { get; set; }



    }
}
