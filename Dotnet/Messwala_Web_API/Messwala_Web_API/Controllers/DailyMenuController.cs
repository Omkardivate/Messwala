using Microsoft.AspNetCore.Mvc;
using BLL.MESS;
using BOL;

namespace Messwala_Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class DailyMenuController : ControllerBase
    {

        private readonly ILogger<DailyMenuController> _logger;

        public DailyMenuController(ILogger<DailyMenuController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("getMenuCard/{messID}")]
        public IEnumerable<DailyMenu> GetMenuCard(int messID)
        {
            List<DailyMenu> dm_list = new List<DailyMenu>();
            dm_list = DailyMenuManager.showMenuCard(messID); 
            return dm_list.ToArray();
        }

        [HttpPost]
        [Route("addMenuItem")]
        public string AddMenuItem([FromForm]int messID, [FromForm]string menu, [FromForm]float price)
        {
            DailyMenu dm = new DailyMenu(messID, menu, price);
            if(DailyMenuManager.addMenu(dm))
                return "Menu Item Added Successfully";
            else
                return "Unable to Add Menu Item !";
        }

        [HttpPut]
        [Route("updateMenuCard")]
        public string UpdateMenuCardItem(DailyMenu dm)
        {
            if(DailyMenuManager.updateMenu(dm))
                return "Menu-Card Item Updated Successfully";
            else
                return "Unable to Update Menu-Card Item !";
        }

        [HttpDelete]
        [Route("deleteMenuItem")]
        public string DeleteMenuItem(DailyMenu dm)
        {
            if(DailyMenuManager.deleteMenu(dm))
                return "Menu-Card Item Deleted Successfully";
            else
                return "Unable to Delete Menu-Card Item !";
        }
    }
}
