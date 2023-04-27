

using BreathFirstSearchAlgorithm;

//static Node CreateExampleTree()
//{
//    Node root =
//        new Node("1",
//            new Node("2",
//                new Node("5",
//                    new Node("9"),
//                    null,
//                    null),
//                null, null),
//            new Node("3",
//                new Node("6",
//                    new Node("10"),
//                    null,
//                    null),
//                new Node("7"),
//                null),
//            new Node("4",
//                new Node("8"),
//                null,
//                null));                
//        return root;
//}

static Node sample_tree()
{
    Node root =
        new Node("A",
            new Node("B",
                new Node("C"), new Node("D")),
            new Node("E",
                new Node("F"), new Node("G",
                                        new Node("H"), null)));
    return root;
}

Node tree = sample_tree();

BFSTraveler.BFS_Traversal(tree); 