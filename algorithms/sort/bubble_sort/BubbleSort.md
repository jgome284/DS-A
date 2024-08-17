# Bubble Sort

Bubble sort is an algorithm to sort a list through repeated swaps of adjacent elements.

````pseudocode
while array is not sorted
  for each value in array
    if current value > next value
      swap current value and next value

return array
```

Bubble sort is not the most efficient sorting algorithm. Bubble sort’s worst-case runtime is O(n^2). This is because we have to compare the current element we are looking at, to each element in the array after it and repeat this check for every single element in the array. Its best-case runtime is O(n) for an already-sorted list.

For nearly sorted lists, bubble sort performs relatively few operations since it only performs a swap when elements are out of order.

Bubble sort is a good introductory algorithm which opens the door to learning more complex algorithms. It answers the question, “How can we algorithmically sort a list?” and encourages us to ask, “How can we improve this sorting algorithm?”

````
