using AlgorithmsDataStructures.LinkedList;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

namespace AlgorithmsDataStructures.BinarySearchTree
{
    public class BinarySearchTree
    {
        public TreeNode Root { get; set; } = null;

        public void Insert(int key, string value)
        {
            Root = InsertItem(Root, key, value);
        }

        private TreeNode InsertItem(TreeNode node, int key, string value)
        {
            TreeNode newNode = new TreeNode(key, value);
            // if this is the first insert, create the root
            if(node == null)
            {
                node = newNode;
                return node;
            }
            // if this isnt the first insert, traverse, find null and insert
            if(key < node.Key)
            {
                node.LeftChild = InsertItem(node.LeftChild, key, value);
            }
            else
            {
                node.RightChild = InsertItem(node.RightChild, key, value);
            }
            return node;
        }

        public string Find(int key)
        {
            TreeNode node = Find(Root, key);
            return node == null ? null : node.Value;
        }

        private TreeNode? Find(TreeNode root, int key)
        {
            if(root == null || root.Key == key)
            {
                return root;
            }else if(key < root.Key)
            {
                return Find(root.LeftChild, key);
            }else if(key > root.Key)
            {
                return Find(root.RightChild, key);
            }
            else
            {
                return null;
            }
        }
    }
}
