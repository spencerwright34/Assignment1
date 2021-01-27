using Microsoft.AspNetCore.Mvc;
using SpencersFirstASPNETWebApp__Assignment_1_.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace SpencersFirstASPNETWebApp__Assignment_1_.Controllers
{
    public class HomeController : Controller
    {
        public IActionResult Index()
        {
            return View();
        }

        [HttpGet("Calculator")]
        public IActionResult Calculator ()
        {
            return View();
        }

        [HttpPost("Calculator")]
        public IActionResult Calculator (CalculatorModel model)
        {
            return View();
        }
    }
}
