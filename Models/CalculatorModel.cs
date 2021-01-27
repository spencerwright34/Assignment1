using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Threading.Tasks;

namespace SpencersFirstASPNETWebApp__Assignment_1_.Models
{
    public class CalculatorModel
    {
        [Range(0, 100)]
        public int assignments { get; set; }
        [Range(0, 100)]
        public int groupproject { get; set; }
        [Range(0, 100)]
        public int quizzes { get; set; }
        [Range(0, 100)]
        public int exams { get; set; }
        [Range(0, 100)]
        public int intex { get; set; }
    }
}
