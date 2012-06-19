using System.Web.Mvc;
using TAContacts.Models;

namespace TAContacts.Controllers
{
	public class HomeController : Controller
	{
		IContactManager _contactManager;

		public HomeController()
		{
			this._contactManager = new ContactManager();
		}
		public ActionResult Index()
		{
			//ViewBag.Contacts = Json(_contactManager.GetContacts());
			return View();
		}

	}
}
