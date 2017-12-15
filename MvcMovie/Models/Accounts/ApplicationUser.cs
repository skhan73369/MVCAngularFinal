using Microsoft.AspNetCore.Identity;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace MvcMovie.Models.Accounts
{
    public class ApplicationUser : IdentityUser
    {
        public string ScreenName { get; set; }
    }
}
