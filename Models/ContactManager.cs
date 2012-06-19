using System.Collections.Generic;
using System.Linq;

namespace TAContacts.Models
{
	public class ContactManager : IContactManager
	{
		private static Dictionary<int, Contact> database = new Dictionary<int, Contact>()
		{
			{1, new Contact {id=1, firstName="Abel", lastName = "Able", telephone = "7141112222", email = "aable@gmail.com", createdAt = ""}},
			{2, new Contact {id=2, firstName="Betty", lastName = "Baker", telephone = "7141112222", email = "bbaker@gmail.com", createdAt = ""}},
			{3, new Contact {id=3, firstName="Charles", lastName = "Charlie", telephone = "7141112222", email = "ccharlie@gmail.com", createdAt = ""}},
			{4, new Contact {id=4, firstName="Dan", lastName = "Delta", telephone = "7141112222", email = "ddelta@gmail.com", createdAt = ""}},
			{5, new Contact {id=5, firstName="Eric", lastName = "Echo", telephone = "7141112222", email = "eecho@gmail.com", createdAt = ""}},
			{6, new Contact {id=6, firstName="Frank", lastName = "Foxtrot", telephone = "7141112222", email = "ffoxtrot@gmail.com", createdAt = ""}},
			{7, new Contact {id=7, firstName="George", lastName = "Golf", telephone = "7141112222", email = "ggolf@gmail.com", createdAt = ""}},
			{8, new Contact {id=8, firstName="Herbert", lastName = "Hotel", telephone = "7141112222", email = "hhotel@gmail.com", createdAt = ""}},
			{9, new Contact {id=9, firstName="Ivan", lastName = "India", telephone = "7141112222", email = "iindia@gmail.com", createdAt = ""}},
			{10, new Contact {id=10, firstName="Julie", lastName = "Juliet", telephone = "7141112222", email = "jjuliet@yahoo.com", createdAt = ""}}
		};

		public Contact Create(Contact item)
		{

			item.id = database.Count + 1;
			database.Add(item.id, item);
			return item;
		}

		public List<int> CreateContacts(List<Contact> items)
		{
			return items.Select(task => Create(task).id).ToList();
		}

		public Contact Update(Contact item)
		{
			database.Remove(item.id);
			database.Add(item.id, item);
			return item;
		}

		public Contact GetById(int id)
		{


			return database[id];
		}

		public List<Contact> GetContacts()
		{
			return database.Values.ToList();
		}

		public bool Delete(int id)
		{
			database.Remove(id);
			return true;
		}
	}
}