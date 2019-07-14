# Brute Force
# Rob current house, or dont rob current house
# input : [100,2,3,100] => 200
# input : [2,7,9,1,1] => 12
# time: 2^n, space complexity: O(n)
def rob(nums):
  return _rob(nums, len(nums) - 1)

def _rob(nums, index):
  if (index < 0):
    return 0
  return max(_rob(nums, index - 2) + nums[index], _rob(nums, index - 1))

# memoization 
def rob_memo(nums):
  
