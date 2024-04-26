using Microsoft.AspNetCore.Mvc;
using BLL.USER;
using BOL;

namespace Messwala_Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class UserController : ControllerBase
    {
        
        private readonly ILogger<UserController> _logger;

        public UserController(ILogger<UserController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("index")]
        public string Index()
        {
            return "Welcome To MessWala";
        }

        [HttpGet]
        [Route("getUser")]
        public IEnumerable<User> GetUser()
        {
            List<User> u_list = new List<User>();
            u_list = UserManager.showAllUser();
            return u_list.ToArray();
        }

        [HttpPost]
        [Route("register")]
        public string AddUser(User u)
        {
            if(UserManager.registerUser(u))
                return "User Registered Successfully";
            else
                return "Unable to Register User !";
        }

        [HttpPost]
        [Route("login")]
        public IActionResult Login([FromForm]string email, [FromForm]string pass)
        {
            Console.WriteLine(email, pass);
            User u = UserManager.loginUser(email, pass);
            if(u != null)
                return Ok(u);
            else
                return Ok(null);
        }

        [HttpPut]
        [Route("updateProfile")]
        public string UpdateUser(User u)
        {
            if(UserManager.updateUserProfile(u))
                return "Profile updated Successfully";
            else
                return "Unable to update !";
        }

        [HttpDelete]
        [Route("deleteAccount")]
        public string DeleteUser(User u)
        {
            if(UserManager.deleteUserAccount(u))
                return "Account deleted Successfully";
            else
                return "Unable to delete Account !";
        }

        [HttpPut]
        [Route("forgotPass")]
        public string ForgotPassword([FromForm]string userName, [FromForm]string pass)
        {
            if(UserManager.forgotUserPass(userName, pass))
                return "Password updated Successfully";
            else
                return "Unable to update Password!";
        }
    }
}
