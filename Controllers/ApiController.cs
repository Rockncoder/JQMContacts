using System.Web.Mvc;
using TAContacts.Models;

namespace TAContacts.Controllers
{
	public class ApiController : Controller
	{
		IContactManager _contactManager;

		public ApiController()
		{
			this._contactManager = new ContactManager();
		}

		[HttpGet]
		[ActionName("Contacts")]
		public JsonResult GetContacts(int? id)
		{
			if (!id.HasValue || id.Value == 0)
			{
				var model = this._contactManager.GetContacts();
				return Json(model, JsonRequestBehavior.AllowGet);
			}
			else
			{
				var model = this._contactManager.GetById(id.Value);
				return Json(model, JsonRequestBehavior.AllowGet);
			}
		}

		[HttpPost]
		[ActionName("Contacts")]
		public JsonResult PostContacts(Contact contact)
		{
			var model = this._contactManager.Create(contact);
			return Json(model);
		}

		[HttpPut]
		[ActionName("Contacts")]
		public JsonResult PutContacts(Contact contact)
		{
			var model = this._contactManager.Update(contact);
			return Json(model);
		}

		[HttpDelete]
		[ActionName("Contacts")]
		public JsonResult DeleteContacts(int id)
		{
			return Json(this._contactManager.Delete(id));
		}
	}
}
