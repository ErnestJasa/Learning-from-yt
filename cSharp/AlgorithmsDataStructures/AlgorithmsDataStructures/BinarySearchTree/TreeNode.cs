using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.BinarySearchTree
{
    public class TreeNode
    {
        public int Key { get; set; }
        public string Value { get; set; }
        public TreeNode LeftChild { get; set; }
        public TreeNode RightChild { get; set; }

        public TreeNode(int key, string value)
        {
            Key = key;
            Value = value;
            
        }
    }
}
