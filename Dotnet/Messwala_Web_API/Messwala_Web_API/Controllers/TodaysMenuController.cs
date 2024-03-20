using Microsoft.AspNetCore.Mvc;
using BLL.MESS;
using BOL;

namespace Messwala_Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class TodaysMenuController : ControllerBase
    {

        private readonly ILogger<TodaysMenuController> _logger;

        public TodaysMenuController(ILogger<TodaysMenuController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("getTodaysMenu/{messID}")]
        public TodaysMenu GetTodaysMenu(int messID)
        {
            return TodaysMenuManager.showTodaysMenu(messID);
        }

        [HttpPost]
        [Route("addTodaysMenu")]
        public string AddTodaysMenu([FromForm]int messID, [FromForm]string menu, [FromForm]float price, [FromForm]bool avaibility)
        {
            TodaysMenu tm = new TodaysMenu(messID, menu, price, avaibility);
            if(TodaysMenuManager.addMenu(tm))
                return "Todays Menu Added Successfully";
            else
                return "Unable to Add Todays Menu !";
        }

        [HttpPut]
        [Route("updateTodaysMenu")]
        public string UpdateTodaysMenu(TodaysMenu tm)
        {
            if(TodaysMenuManager.updateMenu(tm))
                return "Todays Menu Updated Successfully";
            else
                return "Unable to Update Todays Menu !";
        }

    }
}
