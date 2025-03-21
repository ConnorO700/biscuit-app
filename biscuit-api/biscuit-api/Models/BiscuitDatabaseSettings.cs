namespace biscuit_api.Models
{
    public class BiscuitDatabaseSettings
    {

        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string BiscuitsCollectionName { get; set; } = null!;

    }
}
