using Microsoft.AspNetCore.Mvc;
using BLL.MESS;
using BOL;

namespace Messwala_Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class MessController : ControllerBase
    {

        private readonly ILogger<MessController> _logger;

        public MessController(ILogger<MessController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("getAllMess")]
        public IEnumerable<Mess> GetAllMess()
        {
            List<Mess> m_list = new List<Mess>();
            m_list = MessManager.showAllMess(); 
            return m_list.ToArray();
        }

        [HttpGet]
        [Route("getByLocation/{state}/{city}/{landmark}")]
        public IEnumerable<Mess> GetAllMess(string state, string city, string landmark)
        {
            List<Mess> m_list = new List<Mess>();
            m_list = MessManager.showByLocation(state, city, landmark); 
            return m_list.ToArray();
        }

        [HttpPost]
        [Route("registerMess")]
        public string RegisterMess([FromForm]string messname, [FromForm]string ownername, [FromForm]string password, [FromForm]string mobile, [FromForm]string messtime, [FromForm]string state, [FromForm]string city, [FromForm]string landmark)
        {
            Mess m = new Mess(messname, ownername, password, mobile, messtime, state, city, landmark);
            if(MessManager.addMess(m))
                return "Mess Registered Successfully";
            else 
                return "Unable to Registered Mess !";
        }

        [HttpPost]
        [Route("login")]
        public string LoginAsMess([FromForm]string mobile, [FromForm]string pass)
        {
            if(MessManager.loginMess(mobile, pass))
                return "Login Successfully";
            else 
                return "Unable to Login !";
        }

        [HttpPut]
        [Route("updateProfile")]
        public string UpdateMess(Mess m)
        {
            if(MessManager.updateMessProfile(m))
                return "Mess Profile Updated Successfully";
            else 
                return "Unable to Update Mess Profile !";
        }
    
        [HttpDelete]
        [Route("deleteAccount")]
        public string DeleteMessAccount([FromForm]int messID)
        {
            if(MessManager.deleteMessAccount(messID))
                return "Account Deleted Successfully";
            else 
                return "Unable to Delete Account !";
        }

        [HttpPut]
        [Route("forgotPass")]
        public string ForgotPassword([FromForm]string mobile, [FromForm]string pass)
        {
            if(MessManager.changePass(mobile, pass))
                return "Password Changed Successfully";
            else 
                return "Unable to Change Password !";
        }

        [HttpGet]
        [Route("getByRating")]
        public IEnumerable<Mess> GetAllMessByRating()
        {
            return MessManager.showByRating(); 
        }
        
    }
}
