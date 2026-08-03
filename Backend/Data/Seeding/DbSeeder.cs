namespace Backend.Data.Seeding
{
    public class DbSeeder
    {
        public static void Seed(ToDoContext context)
        {
            ToDoTaskSeeder.Seed(context);
            context.SaveChanges();
        }
    }
}
