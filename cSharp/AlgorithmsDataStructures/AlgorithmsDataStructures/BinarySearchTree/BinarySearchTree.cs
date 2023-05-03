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

        private TreeNode InsertItem(TreeNode node, int key, string value) // the first passed in node is the root
        {
            TreeNode newNode = new TreeNode(key, value);
            // if this is the first insert, create the root
            if (node == null)
            {
                node = newNode;
                return node;
            }
            // if this isnt the first insert, traverse, find null and insert
            if (key < node.Key)
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

        // binary search tree

        private TreeNode? Find(TreeNode root, int key)
        {
            if (root == null || root.Key == key)
            {
                return root;
            }
            else if (key < root.Key)
            {
                return Find(root.LeftChild, key);
            }
            else if (key > root.Key)
            {
                return Find(root.RightChild, key);
            }
            else
            {
                return null;
            }
        }


        // Depth first search

        // In order travesal
        public void PrintInOrderTraversal()
        {
            InOrderTraversal(Root);
        }

        private void InOrderTraversal(TreeNode node) // goes all the way to the right until hits null, then prints out the nodes, until is able to go right
        {
            if (node != null)
            {
                InOrderTraversal(node.LeftChild);
                Console.WriteLine(node.Key + " " + node.Value);
                InOrderTraversal(node.RightChild);
            }
        }

        // Pre order traversal

        public void PrintPreOrderTraversal()
        {
            PreOrderTraversal(Root);
        }

        private void PreOrderTraversal(TreeNode node)
        {
            if (node != null)
            {
                Console.WriteLine(node.Key + " " + node.Value);
                PreOrderTraversal(node.LeftChild);
                PreOrderTraversal(node.RightChild);
            }
        }

        // Post order traversal

        public void PrintPostOrderTraversal()
        {
            PostOrderTraversal(Root);
        }

        private void PostOrderTraversal(TreeNode node)
        {
            if (node != null)
            {
                PostOrderTraversal(node.LeftChild);
                PostOrderTraversal(node.RightChild);
                Console.WriteLine(node.Key + " " + node.Value);
            }
        }


        // Breath first serach
        public int BreathFirstSearch(int key)
        {
            return BFS(Root, key);
        }
        private int BFS(TreeNode node, int key)
        {
            Queue<TreeNode> queue = new Queue<TreeNode>();
            queue.Enqueue(node);
            int steps = 0;
            bool found = false;
            while (queue.Count != 0)
            {
                if (key == queue.First().Key)
                {
                    found = true;
                    break;
                }
                var next = queue.Dequeue();
                steps++;
                if (next.LeftChild != null)
                {
                    queue.Enqueue(next.LeftChild);
                }
                if (next.RightChild != null)
                {

                    queue.Enqueue(next.RightChild);
                }
            }
            if (found)
            {

                return steps;
            }
            else
            {
                return -1;
            }
        }
    }
}
