 # 2 sorted arrays
 # intersection hashmap
 # runtime : O(n+m) Space: O(n)
def intersection_hm(arr1, arr2):
  counts = defaultdict(int)
  result = []
  for num in arr1:
    counts += 1
  for num in arr2:
    if counts[num] > 0:
      result.append(num)
      counts -= 1
  return result
    
def intersection_ls(arr1, arr2):
  p1 = 0
  p2 = 0
  result = []
  while p1 < len(arr1) and p2 < len(arr2):
    if arr1[p1] == arr2[p2]:
      result.append(arr1[p1])
      p1 += 1
      p2 += 1
    elif arr1[p1] < arr1[p2]:
      p1 += 1
    else:
      p2 += 1
  return result 

# Binary Search
def intersection_bs(arr1, arr2):
  result = []
  if len(arr1) > len(arr2):
    longer_array = arr1
    shorter_array = arr2 
  else: 
    longer_array = arr2 
    shorter_array = arr1
  for n in shorter_array:
    if binary_search(longer_array, n):
      result.append(n)
# def binary_search(arr, target):
#   mid = int(len(arr)/2)
#   if target == arr[mid]:
#     return True
#   elif target > arr[mid]:
#     return binary_search(arr[0:mid])
#   else:
#     return binary_search(arr[mid+1:])
   



