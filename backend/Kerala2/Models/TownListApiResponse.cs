namespace Kerala2.Models
{
    public class TownListApiResponse
    {
        public List<Locations>? District { get; set; }
        public List<Locations>? Cities { get; set; }
        public List<Locations>? Town { get; set; }
    }
}
