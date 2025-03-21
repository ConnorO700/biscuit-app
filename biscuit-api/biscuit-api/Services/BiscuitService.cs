using MongoDB.Driver;
using biscuit_api.Models;
using Microsoft.Extensions.Options;
using ZstdSharp.Unsafe;
namespace biscuit_api.Services
{
    public class BiscuitService
    {
        private readonly IMongoCollection<Biscuit> _biscuitColl;

        public BiscuitService(IOptions<BiscuitDatabaseSettings> dbSettings)
        {
            var mongoClient = new MongoClient(dbSettings.Value.ConnectionString);
            var mongoDB = mongoClient.GetDatabase(dbSettings.Value.DatabaseName);
            _biscuitColl = mongoDB.GetCollection<Biscuit>(dbSettings.Value.BiscuitsCollectionName);
        }

        public async Task<List<Biscuit>> GetAsync() =>
            await _biscuitColl.Find(_ => true).ToListAsync();

        public async Task<Biscuit?> GetAsync(string id) =>
            await _biscuitColl.Find(x => x.Id == id).FirstOrDefaultAsync();

        public async Task CreateAsync(Biscuit biscuit) =>
            await _biscuitColl.InsertOneAsync(biscuit);

        public async Task UpdateAsync(string id, Biscuit biscuit) =>
            await _biscuitColl.ReplaceOneAsync(x => x.Id == id, biscuit);

        public async Task RemoveAync(string id) =>
            await _biscuitColl.DeleteOneAsync(x => x.Id == id);

            
    }
}
