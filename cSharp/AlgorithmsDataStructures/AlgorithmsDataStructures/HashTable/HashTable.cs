using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.HashTable
{
    public class HashTable
    {
        public string[] _hashTable { get; set; }

        public HashTable()
        {
            _hashTable = new string[10];
        }
        // this is very weak hashing algorithm
        private int _hash(string key)
        {
            return key.Length % _hashTable.Length;
        }

        public string Get(string key)
        {
            int hashKey = _hash(key);
            return _hashTable[hashKey];
        }

        public void Set(string key, string value)
        {
            // key is going to be hashed
            int hashedKey = _hash(key);

            if (_hashTable[hashedKey] != null)
            {
                Console.WriteLine("sorry, hash collision has occured");
            }
            else
            {
                _hashTable[hashedKey] = value;
            }
        }
    }
}
