using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.AbstractDataType
{
    public class Pokemon
    {
        public string Name { get; set; }        // This is representation (fields)
        public int Exp { get; set; }

        public bool IsPokemon()                 // this is operation (methods) and these two together make an abstract data type
        {
            return true;
        }
    }
}
