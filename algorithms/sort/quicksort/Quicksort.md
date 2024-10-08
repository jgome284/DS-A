# Quicksort

## Introduction

Quicksort is an efficient recursive algorithm for sorting arrays or lists of values. The algorithm is a comparison sort, where values are ordered by a comparison operation such as > or <.

Quicksort uses a divide and conquer strategy, breaking the problem into smaller sub-problems until the solution is so clear there’s nothing to solve.

**The problem:** many values in the array which are out of order.

**The solution:** break the array into sub-arrays containing at most one element. One element is sorted by default!

We choose a single pivot element from the list. Every other element is compared with the pivot, which partitions the array into three groups.

1. A sub-array of elements smaller than the pivot.
2. The pivot itself.
3. A sub-array of elements greater than the pivot.

The process is repeated on the sub-arrays until they contain zero or one element. Elements in the “smaller than” group are never compared with elements in the “greater than” group. If the smaller and greater groupings are roughly equal, this cuts the problem in half with each partition step!

```pseudocode
[6,5,2,1,9,3,8,7]
6 # The pivot
[5, 2, 1, 3] # lesser than 6
[9, 8, 7] # greater than 6


[5,2,1,3]  # these values
# will never be compared with
[9,8,7] # these values
```

Depending on the implementation, the sub-arrays of one element each are recombined into a new array with sorted ordering, or values within the original array are swapped in-place, producing a sorted mutation of the original array.

![Quick Sort](quick-sort.png)

## Runtime

The key to Quicksort’s runtime efficiency is the division of the array. The array is partitioned according to comparisons with the pivot element, so which pivot is the optimal choice to produce sub-arrays of roughly equal length?

The graphic displays two data sets which always use the first element as the pivot. Notice how many more steps are required when the quicksort algorithm is run on an already sorted input. The partition step of the algorithm hardly divides the array at all!

The worst case occurs when we have an imbalanced partition like when the first element is continually chosen in a sorted data-set.

One popular strategy is to select a random element as the pivot for each step. The benefit is that no particular data set can be chosen ahead of time to make the algorithm perform poorly.

Another popular strategy is to take the first, middle, and last elements of the array and choose the median element as the pivot. The benefit is that the division of the array tends to be more uniform.

Quicksort is an unusual algorithm in that the worst case runtime is O(N^2), but the average case is O(N \* logN).

We typically only discuss the worst case when talking about an algorithm’s runtime, but for Quicksort it’s so uncommon that we generally refer to it as O(N \* logN).
