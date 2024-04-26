using Microsoft.AspNetCore.Mvc;
using BLL.MESS;
using BOL;

namespace Messwala_Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessPlannedController : ControllerBase
    {

        private readonly ILogger<MessPlannedController> _logger;

        public MessPlannedController(ILogger<MessPlannedController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("getAllPlan")]
        public IEnumerable<MessPlanned> GetAllPlan(int messID)
        {
            List<MessPlanned> mp_list = new List<MessPlanned>();
            mp_list = MessPlannedManager.showAllPlan(messID);
            return mp_list.ToArray();
        }

        // [HttpPost]
        // [Route("addPlan")]
        // public string AddNewPlan(Mess m, MessPlanned mp)
        // {
        //     try
        //     {
        //         if(MessPlannedManager.addPlan(m, mp))
        //             return "Plan Added Successfully";
        //         else
        //             return "Unable to Add Successfully";
        //     }
        //     catch(Exception e) {
        //         Console.WriteLine("Error : "+e.Message);
        //     }
        //     return "Unable to Add Successfully";
        // }

        // [HttpPut]
        // [Route("updatePlan")]
        // public string UpdatePlan(Mess m, MessPlanned mp)
        // {
        //     if(MessPlannedManager.changePlan(m, mp))
        //         return "Plan Updated Successfully";
        //     else
        //         return "Unable to Update Successfully";
        // }

        // [HttpDelete]
        // [Route("removePlan")]
        // public string DeletePlan(Mess m, MessPlanned mp)
        // {
        //     if(MessPlannedManager.removePlan(m, mp))
        //         return "Plan Removed Successfully";
        //     else
        //         return "Unable to Remove Successfully";
        // }    
    }
}
