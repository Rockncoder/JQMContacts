using System.Collections.Generic;

namespace TAContacts.Models
{
	public interface IContactManager
	{
		Contact Create(Contact item);
		List<int> CreateContacts(List<Contact> items);
		Contact Update(Contact item);
		Contact GetById(int id);
		List<Contact> GetContacts();
		bool Delete(int id);
	}
}