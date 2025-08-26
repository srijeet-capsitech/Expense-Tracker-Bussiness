namespace ExpenseTrackerBussiness.Server.MongoDbContext
{
    public class MongoDBSettings
    {

        public string ConnectionString { get; set; } = null!;
        public string DatabaseName { get; set; } = null!;
        public string UserCollectionName { get; set; } = null!;
        public string CategoryCollectionName { get; set; } = null!;
        //public string TaxInvoiceCollectionName { get; set; } = null!;
        //public string RefreshTokenCollectionName { get; set; } = null!;

    }
}
