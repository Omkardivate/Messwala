using Microsoft.AspNetCore.Mvc;
using BLL.MESS;
using BOL;

namespace Messwala_Web_API.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ReviewController : ControllerBase
    {

        private readonly ILogger<ReviewController> _logger;

        public ReviewController(ILogger<ReviewController> logger)
        {
            _logger = logger;
        }

        [HttpGet]
        [Route("getAllReview/{messID}")]
        public IEnumerable<Review> GetAllReviews(int messID)
        {
            List<Review> r_list = new List<Review>();
            r_list = MessReviewManager.showAllReview(messID); 
            return r_list.ToArray();
        }

        [HttpPost]
        [Route("giveReview")]
        public string GiveReview(Review r)
        {
            if(MessReviewManager.giveReview(r))
                return "Review given Successfully";
            else
                return "Unable to give Review !";
        }

        [HttpPut]
        [Route("updateReview")]
        public string UpdateReview(int userID, int messID, Review r)
        {
            if(MessReviewManager.changeReview(userID, messID, r))
                return "Review updated Successfully";
            else
                return "Unable to update Review !";
        }

        [HttpDelete]
        [Route("deleteReview")]
        public string DeleteReview(int userID, int messID)
        {
            if(MessReviewManager.removeReview(userID, messID))
                return "Review deleted Successfully";
            else
                return "Unable to delete Review !";
        }
    }
}
