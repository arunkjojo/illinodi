namespace Kerala2.Models
{
    public class APIResponse<T>
    {
        public string? Msg { get; set; }
        public T? Data { get; set; }
    }
}
