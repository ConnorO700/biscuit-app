using MongoDB.Bson.Serialization.Attributes;
using MongoDB.Bson;
namespace biscuit_api.Models
{
    public class Biscuit
    {
        [BsonId]
        [BsonRepresentation(BsonType.ObjectId)]
        public string? Id { get; set; }
        public string Name { get; set; }
        public string Type { get; set; }
        public string Description { get; set; }
        public double Price { get; set; }
    }
}
