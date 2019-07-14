# 6-30 workshop
class Node:
  def __init__(self, value):
      self.value = value
      self.left = None
      self.right = None 

# Traverse left then right subtree then root ( first two steps can be switched)
def postorder(node):
  if node == None:
    return
  postorder(node.left)
  postorder(node.right)
  visit(node)
# // Flatten Binary Tree to Linked List //
#      1         1->2->3->4->5->6 (right children)
#    2   5
#   3 4   6 
#left, right, node 

#what is the easiest way to traverse the nodes that helps me solve the problem
prev = None
def flatten(root):
  if root == None:
    return 
  flatten(root.right)
  flatten(root.left)
  root.right = prev
  root.left = None
  prev = root 

#  // Check balanced //
def checkBalanced(root):
  if root == None: 
    return True
  curr = [root]
  nextLevel = []
  lastLevel = False 
  nextLevel = False
  while len(curr) is not 0:
    for node in curr:
      if node.left:
        if lastLevel == True:
          return False
        nextLevel.append(node.left)
      else:
        if lastLevel:
          return False 
        else:
          nextLevel = True
      if node.right:
        if 
        nextLevel.append(node.right)
      else: 
        if lastLevel:
          return False 
        else:
          nextLevel = True
    if nextLevel:
      lastLevel = True
    curr = nextLevel
  return True 

a = Node(1)
b = Node(2)
c = Node(3)
d = Node(4)
e = Node(5)
f = Node(6)
a.left = b 
a.right = e
b.left = c
b.right = d 
c. 


    
      
  
  
  




 
 